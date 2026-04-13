import { phases } from "./data.js";
import { loadState, saveState, resetState } from "./storage.js";
import { verificarCodigo } from "./verificacion.js";

let state = loadState();
let currentPhaseId = 0;

const phaseList = document.getElementById("phaseList");
const content = document.getElementById("content");
const studentNameInput = document.getElementById("studentName");
const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");
const heroContinue = document.getElementById("heroContinue");
const heroCertificate = document.getElementById("heroCertificate");
const certButton = document.getElementById("certificateBtn");
const resetButton = document.getElementById("resetBtn");

studentNameInput.value = state.studentName || "";

studentNameInput.addEventListener("input", (e) => {
  state.studentName = e.target.value;
  persist();
  updateCertificateState();
});

heroContinue.addEventListener("click", () => {
  const nextId = getNextRecommendedPhaseId();
  currentPhaseId = nextId;
  render();
  scrollToTop();
});

heroCertificate.addEventListener("click", () => {
  if (!canGenerateCertificate()) {
    alert("Debes completar tu nombre y validar todas las fases antes de generar el certificado.");
    return;
  }
  showCertificate();
});

certButton.addEventListener("click", () => {
  if (!canGenerateCertificate()) {
    alert("Debes completar tu nombre y validar todas las fases antes de generar el certificado.");
    return;
  }
  showCertificate();
});

resetButton.addEventListener("click", () => {
  if (!confirm("Se borrará todo el progreso guardado en este navegador. ¿Deseas continuar?")) return;
  resetState();
  state = loadState();
  studentNameInput.value = "";
  currentPhaseId = 0;
  render();
});

function persist() {
  saveState(state);
}

function isPhaseUnlocked(id) {
  if (id === 0) return true;
  return state.validatedPhases.includes(id - 1);
}

function isPhaseValidated(id) {
  return state.validatedPhases.includes(id);
}

function getNextRecommendedPhaseId() {
  for (const phase of phases) {
    if (!isPhaseValidated(phase.id) && isPhaseUnlocked(phase.id)) return phase.id;
  }
  return phases[phases.length - 1].id;
}

function getTestRecord(id) {
  return state.testState[id] || {
    attempts: 0,
    passed: false,
    failedLocked: false,
    lastScore: null
  };
}

function setTestRecord(id, record) {
  state.testState[id] = record;
  persist();
}

function getProgressPercent() {
  return Math.round((state.validatedPhases.length / phases.length) * 100);
}

function updateHeaderProgress() {
  const pct = getProgressPercent();
  progressBar.style.width = `${pct}%`;
  progressText.textContent = `${state.validatedPhases.length} de ${phases.length} fases validadas`;
}

function updateCertificateState() {
  certButton.disabled = !canGenerateCertificate();
}

function canGenerateCertificate() {
  return Boolean(state.studentName && state.studentName.trim()) && state.validatedPhases.length === phases.length;
}

function renderPhaseList() {
  phaseList.innerHTML = "";
  phases.forEach((phase) => {
    const btn = document.createElement("button");
    btn.className = "phase-card";
    if (phase.id === currentPhaseId) btn.classList.add("active");
    if (isPhaseValidated(phase.id)) btn.classList.add("done");
    if (!isPhaseUnlocked(phase.id)) btn.classList.add("locked");

    const status = isPhaseValidated(phase.id)
      ? "Validada"
      : !isPhaseUnlocked(phase.id)
      ? "Bloqueada"
      : "Disponible";

    btn.innerHTML = `
      <span class="phase-card__title">${phase.title}</span>
      <span class="phase-card__status">${status}</span>
    `;

    if (!isPhaseUnlocked(phase.id)) {
      btn.disabled = true;
    } else {
      btn.addEventListener("click", () => {
        currentPhaseId = phase.id;
        render();
      });
    }
    phaseList.appendChild(btn);
  });
}

function renderTabs(phase, activeTab = "teoria") {
  const isValidated = isPhaseValidated(phase.id);
  const testRecord = getTestRecord(phase.id);
  const wrapper = document.createElement("div");
  wrapper.className = "tabs";

  wrapper.innerHTML = `
    <div class="tab-buttons">
      <button class="tab-btn ${activeTab === "teoria" ? "active" : ""}" data-tab="teoria">Teoría</button>
      <button class="tab-btn ${activeTab === "practica" ? "active" : ""}" data-tab="practica">Práctica</button>
      <button class="tab-btn ${activeTab === "test" ? "active" : ""}" data-tab="test">Tipo test</button>
      <button class="tab-btn ${activeTab === "validacion" ? "active" : ""}" data-tab="validacion">Validación</button>
    </div>
    <div class="tab-panels">
      <section class="tab-panel ${activeTab === "teoria" ? "active" : ""}" data-panel="teoria"></section>
      <section class="tab-panel ${activeTab === "practica" ? "active" : ""}" data-panel="practica"></section>
      <section class="tab-panel ${activeTab === "test" ? "active" : ""}" data-panel="test"></section>
      <section class="tab-panel ${activeTab === "validacion" ? "active" : ""}" data-panel="validacion"></section>
    </div>
  `;

  const theoryPanel = wrapper.querySelector('[data-panel="teoria"]');
  theoryPanel.innerHTML = `
    <h3>Teoría esencial</h3>
    <ul class="clean-list">
      ${phase.theory.map((item) => `<li>${item}</li>`).join("")}
    </ul>
  `;

  const practicePanel = wrapper.querySelector('[data-panel="practica"]');
  practicePanel.innerHTML = `
    <h3>${phase.practice_title}</h3>
    <ul class="clean-list">
      ${phase.practice.map((item) => `<li>${item}</li>`).join("")}
    </ul>
    ${
      phase.download_map
        ? `<a class="download-btn" href="./assets/mapa_conceptual_tema7.png" download>Descargar mapa conceptual</a>`
        : ""
    }
  `;

  const testPanel = wrapper.querySelector('[data-panel="test"]');
  testPanel.appendChild(renderTestBlock(phase, testRecord));

  const validationPanel = wrapper.querySelector('[data-panel="validacion"]');
  validationPanel.innerHTML = `
    <div class="validation-box">
      <h3>Validación docente</h3>
      <p>Cuando hayas subido la evidencia al EVAGD y el docente la haya revisado, introduce el código que te facilite para validar esta fase.</p>
      <div class="validation-controls">
        <input id="teacherCodeInput" type="text" placeholder="Código del docente" autocomplete="off" />
        <button id="validatePhaseBtn" class="primary-btn">Validar fase</button>
      </div>
      <p class="status-box ${isValidated ? "ok" : ""}" id="validationMessage">${
        isValidated ? "Fase validada correctamente." : "Pendiente de validación por parte del docente."
      }</p>
    </div>
  `;

  const validateBtn = validationPanel.querySelector("#validatePhaseBtn");
  const codeInput = validationPanel.querySelector("#teacherCodeInput");
  const validationMessage = validationPanel.querySelector("#validationMessage");

  if (isValidated) {
    codeInput.disabled = true;
    validateBtn.disabled = true;
  }

  validateBtn?.addEventListener("click", () => {
    const code = codeInput.value.trim();
    if (!code) {
      validationMessage.textContent = "Debes introducir el código facilitado por el docente.";
      validationMessage.classList.remove("ok");
      return;
    }
    if (verificarCodigo(code)) {
      if (!state.validatedPhases.includes(phase.id)) {
        state.validatedPhases.push(phase.id);
        state.validatedPhases.sort((a, b) => a - b);
        persist();
      }
      validationMessage.textContent = "Fase validada correctamente.";
      validationMessage.classList.add("ok");
      render();
    } else {
      validationMessage.textContent = "Código incorrecto. Consulta con tu docente.";
      validationMessage.classList.remove("ok");
    }
  });

  wrapper.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      renderPhaseContent(phase.id, btn.dataset.tab);
    });
  });

  return wrapper;
}

function renderTestBlock(phase, testRecord) {
  const wrap = document.createElement("div");
  wrap.className = "test-box";

  const total = phase.questions.length;
  const needed = Math.ceil(total * 0.8);

  let intro = `<div class="test-info">
      <strong>Indicaciones del test:</strong> dispones de <strong>2 intentos</strong>. Para superarlo necesitas acertar al menos <strong>${needed} de ${total}</strong> preguntas (${Math.round((needed / total) * 100)} %).
    </div>`;

  if (testRecord.passed) {
    intro += `<p class="status-pill passed">Test superado. Resultado registrado: ${testRecord.lastScore}/${total}.</p>`;
  } else if (testRecord.failedLocked) {
    intro += `<p class="status-pill failed">Test no superado tras 2 intentos. Se muestran las respuestas correctas y no hay más intentos.</p>`;
  } else if (testRecord.attempts === 1) {
    intro += `<p class="status-pill warning">Ya has realizado 1 intento. Te queda 1 intento.</p>`;
  } else {
    intro += `<p class="status-pill neutral">Todavía no has realizado intentos en esta fase.</p>`;
  }

  wrap.innerHTML = intro;

  const form = document.createElement("form");
  form.className = "test-form";

  phase.questions.forEach((question, qIndex) => {
    const item = document.createElement("fieldset");
    item.className = "question-card";
    if (testRecord.failedLocked) item.classList.add("review-mode");
    const legend = document.createElement("legend");
    legend.innerHTML = `<span class="q-number">${qIndex + 1}</span> ${question.q}`;
    item.appendChild(legend);

    question.options.forEach((option, oIndex) => {
      const label = document.createElement("label");
      const isCorrect = oIndex === question.a;
      const reviewClass = testRecord.failedLocked && isCorrect ? " correct-answer" : "";
      label.className = `option-row${reviewClass}`;
      label.innerHTML = `
        <input type="radio" name="q_${qIndex}" value="${oIndex}" ${testRecord.passed || testRecord.failedLocked ? "disabled" : ""}/>
        <span>${option}</span>
      `;
      item.appendChild(label);
    });

    if (testRecord.failedLocked) {
      const note = document.createElement("div");
      note.className = "correct-note";
      note.textContent = `Respuesta correcta: ${question.options[question.a]}`;
      item.appendChild(note);
    }

    form.appendChild(item);
  });

  if (!testRecord.passed && !testRecord.failedLocked) {
    const action = document.createElement("div");
    action.className = "test-actions";
    action.innerHTML = `<button type="submit" class="primary-btn">Corregir test</button><p class="mini-help">Recuerda: el test se supera con un 80 % de aciertos.</p>`;
    form.appendChild(action);

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let correct = 0;
      phase.questions.forEach((question, qIndex) => {
        const selected = form.querySelector(`input[name="q_${qIndex}"]:checked`);
        if (selected && Number(selected.value) === question.a) {
          correct += 1;
        }
      });

      const updated = { ...testRecord };
      updated.attempts += 1;
      updated.lastScore = correct;

      if (correct >= needed) {
        updated.passed = true;
        setTestRecord(phase.id, updated);
        alert(`Has superado el test con ${correct} de ${total} respuestas correctas.`);
      } else if (updated.attempts >= 2) {
        updated.failedLocked = true;
        setTestRecord(phase.id, updated);
        alert(`No has superado el test tras el segundo intento. Resultado: ${correct} de ${total}. Ahora se mostrarán las respuestas correctas y no tendrás más intentos.`);
      } else {
        setTestRecord(phase.id, updated);
        alert(`Primer intento no superado. Has acertado ${correct} de ${total}. Te queda un segundo intento.`);
      }

      renderPhaseContent(phase.id, "test");
    });
  }

  wrap.appendChild(form);
  return wrap;
}

function renderPhaseContent(id, activeTab = "teoria") {
  const phase = phases.find((p) => p.id === id);
  if (!phase) return;
  currentPhaseId = id;
  content.innerHTML = `
    <article class="phase-view">
      <header class="phase-header">
        <div>
          <p class="eyebrow">Secuencia guiada</p>
          <h2>${phase.title}</h2>
          <p class="phase-summary">${phase.short}</p>
        </div>
        <div class="phase-badges">
          <span class="badge ${isPhaseUnlocked(phase.id) ? "open" : "closed"}">${isPhaseUnlocked(phase.id) ? "Disponible" : "Bloqueada"}</span>
          <span class="badge ${isPhaseValidated(phase.id) ? "success" : "pending"}">${isPhaseValidated(phase.id) ? "Validada" : "Pendiente"}</span>
        </div>
      </header>
    </article>
  `;
  content.querySelector(".phase-view").appendChild(renderTabs(phase, activeTab));
  renderPhaseList();
  updateHeaderProgress();
  updateCertificateState();
}

function render() {
  if (!isPhaseUnlocked(currentPhaseId)) {
    currentPhaseId = getNextRecommendedPhaseId();
  }
  renderPhaseContent(currentPhaseId);
}

function formatDate(date = new Date()) {
  return date.toLocaleDateString("es-ES");
}

function showCertificate() {
  const resultsRows = phases
    .map((phase) => {
      const test = getTestRecord(phase.id);
      let testStatus = "No realizado";
      if (test.passed) testStatus = `Superado (${test.lastScore}/${phase.questions.length})`;
      else if (test.failedLocked) testStatus = `No superado (${test.lastScore}/${phase.questions.length})`;
      else if (test.attempts === 1) testStatus = `Pendiente tras 1 intento (${test.lastScore}/${phase.questions.length})`;

      return `
        <tr>
          <td>${phase.title}</td>
          <td>${isPhaseValidated(phase.id) ? "Validada" : "No validada"}</td>
          <td>${testStatus}</td>
        </tr>
      `;
    })
    .join("");

  const win = window.open("", "_blank");
  win.document.write(`
    <!doctype html>
    <html lang="es">
      <head>
        <meta charset="utf-8"/>
        <title>Certificado - Tema 7</title>
        <style>
          body { font-family: Arial, Helvetica, sans-serif; margin: 40px; color: #14213d; }
          .sheet { border: 4px solid #2d6cdf; padding: 32px; border-radius: 18px; }
          h1 { margin: 0 0 8px; font-size: 34px; }
          h2 { margin: 0 0 24px; color: #2d6cdf; }
          p { line-height: 1.5; }
          table { width: 100%; border-collapse: collapse; margin-top: 24px; font-size: 14px; }
          th, td { border: 1px solid #cfd8ea; padding: 10px; text-align: left; vertical-align: top; }
          th { background: #eef4ff; }
          .center { text-align: center; }
          .sign { margin-top: 32px; display: flex; justify-content: space-between; gap: 16px; }
          .box { border-top: 1px solid #6b7280; padding-top: 8px; width: 48%; }
        </style>
      </head>
      <body>
        <div class="sheet">
          <h1>Certificado de seguimiento</h1>
          <h2>Tema 7. Gestión de conflictos y reclamaciones</h2>
          <p>Se certifica que <strong>${escapeHtml(state.studentName)}</strong> ha completado la secuencia de fases validadas en la web didáctica de la unidad.</p>
          <p>Fecha de emisión: <strong>${formatDate()}</strong></p>
          <table>
            <thead>
              <tr>
                <th>Fase</th>
                <th>Estado de validación</th>
                <th>Resultado del test</th>
              </tr>
            </thead>
            <tbody>${resultsRows}</tbody>
          </table>
          <p>Nota: cuando un test no se supera tras el segundo intento, queda registrado como <strong>no superado</strong> en este certificado.</p>
          <div class="sign">
            <div class="box">Firma del docente</div>
            <div class="box">Firma del estudiante</div>
          </div>
        </div>
        <script>window.onload = () => window.print();<\/script>
      </body>
    </html>
  `);
  win.document.close();
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (s) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[s]));
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

render();
