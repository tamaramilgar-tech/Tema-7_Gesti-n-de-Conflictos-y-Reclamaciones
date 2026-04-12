import { cargarProgreso, guardarProgreso, reiniciarProgreso } from './storage.js';
import { verificarCodigo, obtenerCodigoHoy } from './verificacion.js';
import { fases } from './fases.js';

const phaseList = document.getElementById('phaseList');
const phaseContent = document.getElementById('phaseContent');
const certificateSection = document.getElementById('certificateSection');
const progressText = document.getElementById('progressText');
const progressBarFill = document.getElementById('progressBarFill');
const studentNameInput = document.getElementById('studentName');
const startBtn = document.getElementById('startBtn');
const certificateBtn = document.getElementById('certificateBtn');
const resetBtn = document.getElementById('resetBtn');

let progreso = cargarProgreso();
let faseActual = Number.isInteger(progreso.faseActual) ? progreso.faseActual : 0;

function puedeAcceder(faseId) {
  if (faseId === 0) return true;
  return progreso.fasesCompletadas.includes(faseId - 1);
}

function guardarEstado() {
  progreso.nombre = studentNameInput.value.trim();
  progreso.faseActual = faseActual;
  guardarProgreso(progreso);
}

function completarFase(faseId) {
  if (!progreso.fasesCompletadas.includes(faseId)) {
    progreso.fasesCompletadas.push(faseId);
  }
  progreso.validaciones[faseId] = true;

  const siguiente = faseId + 1;
  if (siguiente < fases.length) {
    progreso.faseActual = siguiente;
    faseActual = siguiente;
  }
  guardarEstado();
  render();
}

function actualizarProgresoUI() {
  const completadas = progreso.fasesCompletadas.length;
  progressText.textContent = `${completadas}/${fases.length}`;
  progressBarFill.style.width = `${(completadas / fases.length) * 100}%`;
}

function renderPhaseList() {
  phaseList.innerHTML = '';

  fases.forEach((fase) => {
    const btn = document.createElement('button');
    btn.className = 'phase-btn';
    if (fase.id === faseActual) btn.classList.add('is-active');
    if (progreso.fasesCompletadas.includes(fase.id)) btn.classList.add('is-complete');

    const acceso = puedeAcceder(fase.id);
    if (!acceso) btn.disabled = true;

    const status = progreso.fasesCompletadas.includes(fase.id)
      ? '✅'
      : acceso
        ? '➡️'
        : '🔒';

    btn.innerHTML = `
      <span>
        <span class="phase-btn__title">${fase.titulo}</span><br>
        <span class="muted">${fase.resumen}</span>
      </span>
      <span class="phase-btn__status">${status}</span>
    `;

    btn.addEventListener('click', () => {
      faseActual = fase.id;
      progreso.faseActual = fase.id;
      guardarEstado();
      render();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    phaseList.appendChild(btn);
  });
}

function crearLista(items) {
  return `<ul>${items.map((item) => `<li>${item}</li>`).join('')}</ul>`;
}

function renderTest(fase) {
  return fase.test.map((q, i) => `
    <fieldset class="test-question">
      <legend>${i + 1}. ${q.pregunta}</legend>
      ${q.opciones.map((op, idx) => `
        <label class="option">
          <input type="radio" name="fase-${fase.id}-preg-${i}" value="${idx}">
          <span>${op}</span>
        </label>
      `).join('')}
    </fieldset>
  `).join('');
}

function renderValidationBox(faseId) {
  const validada = Boolean(progreso.validaciones[faseId]);
  return `
    <div class="block validation-box">
      <h3>Validación docente</h3>
      <p>
        Cuando hayas subido la evidencia al EVAGD, introduce el código facilitado por el docente.
        El código previsto para hoy sigue el formato <strong>ddmmaaaa</strong>.
      </p>
      <div class="validation-grid">
        <input class="input" id="codigoInput" type="text" inputmode="numeric" placeholder="Código del docente">
        <button class="btn btn--success" id="validateBtn">Validar fase</button>
      </div>
      <div id="validationMessage" class="result-box ${validada ? 'success' : ''}">
        ${validada ? 'Fase ya validada y registrada correctamente.' : 'Pendiente de validación por parte del docente.'}
      </div>
    </div>
  `;
}

function renderPhaseContent() {
  const fase = fases[faseActual];
  const nombreGuardado = progreso.nombre || '';
  const respuestaGuardada = progreso.respuestasPracticas[fase.id] || '';
  const scoreGuardado = progreso.testScores[fase.id];

  phaseContent.innerHTML = `
    <h2>${fase.titulo}</h2>
    <div class="phase-meta">
      <span class="tag">${progreso.fasesCompletadas.includes(fase.id) ? 'Fase completada' : 'Fase en curso'}</span>
      <span class="tag">${fase.resumen}</span>
    </div>

    <section class="block">
      <h3>Teoría</h3>
      ${crearLista(fase.teoria)}
    </section>

    <section class="block practice-callout">
      <h3>Práctica</h3>
      ${crearLista(fase.practica)}
      ${fase.recursoDescargable ? `<p><a href="${fase.recursoDescargable.url}" download>${fase.recursoDescargable.texto}</a></p>` : ''}
      <label class="field">
        <span>Anotaciones de trabajo del estudiante</span>
        <textarea id="practiceNotes" class="textarea" placeholder="Escribe aquí tus ideas, esquema de la práctica o un recordatorio de lo que vas a subir al EVAGD.">${respuestaGuardada}</textarea>
      </label>
      <p class="muted">Estas anotaciones se guardan en el navegador para que puedas retomarlas más adelante. La evidencia oficial debe subirse al EVAGD.</p>
      <button class="btn btn--secondary" id="saveNotesBtn">Guardar anotaciones</button>
      <div id="notesMessage" class="result-box hidden"></div>
    </section>

    <section class="block">
      <h3>Test</h3>
      <p>Debes revisar la teoría y responder el test antes de solicitar la validación docente.</p>
      <form id="testForm">
        ${renderTest(fase)}
        <button type="submit" class="btn btn--primary">Corregir test</button>
      </form>
      <div id="testResult" class="result-box ${typeof scoreGuardado === 'number' ? '' : 'hidden'}">
        ${typeof scoreGuardado === 'number' ? `Último resultado guardado: ${scoreGuardado}/${fase.test.length}` : ''}
      </div>
    </section>

    ${renderValidationBox(fase.id)}
  `;

  const saveNotesBtn = document.getElementById('saveNotesBtn');
  const notesMessage = document.getElementById('notesMessage');
  saveNotesBtn.addEventListener('click', () => {
    const value = document.getElementById('practiceNotes').value.trim();
    progreso.respuestasPracticas[fase.id] = value;
    guardarEstado();
    notesMessage.className = 'result-box success';
    notesMessage.textContent = 'Anotaciones guardadas correctamente en este dispositivo.';
  });

  const testForm = document.getElementById('testForm');
  const testResult = document.getElementById('testResult');
  testForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let aciertos = 0;
    let incompletas = 0;

    fase.test.forEach((pregunta, index) => {
      const checked = document.querySelector(`input[name="fase-${fase.id}-preg-${index}"]:checked`);
      if (!checked) {
        incompletas += 1;
        return;
      }
      if (Number(checked.value) === pregunta.correcta) aciertos += 1;
    });

    if (incompletas > 0) {
      testResult.className = 'result-box error';
      testResult.textContent = `Debes responder todas las preguntas antes de corregir. Pendientes: ${incompletas}.`;
      return;
    }

    progreso.testScores[fase.id] = aciertos;
    guardarEstado();
    const aprobado = aciertos === fase.test.length;
    testResult.className = `result-box ${aprobado ? 'success' : ''}`;
    testResult.textContent = aprobado
      ? `Resultado: ${aciertos}/${fase.test.length}. Has completado correctamente el test de esta fase.`
      : `Resultado: ${aciertos}/${fase.test.length}. Revisa la teoría y vuelve a intentarlo antes de solicitar la validación.`;
  });

  const validateBtn = document.getElementById('validateBtn');
  const validationMessage = document.getElementById('validationMessage');
  validateBtn.addEventListener('click', () => {
    const codigo = document.getElementById('codigoInput').value.trim();
    const resultado = progreso.testScores[fase.id];
    const nombre = studentNameInput.value.trim();

    progreso.nombre = nombre;
    guardarEstado();

    if (!nombre) {
      validationMessage.className = 'result-box error';
      validationMessage.textContent = 'Antes de validar la fase debes escribir el nombre del estudiante en la cabecera.';
      return;
    }

    if (typeof resultado !== 'number' || resultado !== fase.test.length) {
      validationMessage.className = 'result-box error';
      validationMessage.textContent = 'Para validar la fase debes tener el test completo y correcto.';
      return;
    }

    if (!verificarCodigo(codigo)) {
      validationMessage.className = 'result-box error';
      validationMessage.textContent = 'Código incorrecto. Solicita al docente el código vigente del día en formato ddmmaaaa.';
      return;
    }

    completarFase(fase.id);
    validationMessage.className = 'result-box success';
    validationMessage.textContent = `Fase validada correctamente. Código aceptado: ${obtenerCodigoHoy()}.`;
  });
}

function renderCertificate() {
  const total = fases.length;
  const completadas = progreso.fasesCompletadas.length;
  const puedeEmitir = completadas === total && Boolean(progreso.nombre.trim());

  certificateSection.classList.remove('hidden');
  certificateSection.innerHTML = `
    <h2>Certificado final</h2>
    <p class="muted">Este certificado solo puede generarse cuando el estudiante ha completado todas las fases y ha introducido su nombre.</p>
    <div class="certificate">
      <p>Itinerario formativo:</p>
      <h3>CYA · Tema 7 · Gestión de conflictos y reclamaciones</h3>
      <p>Estudiante:</p>
      <div class="certificate__name">${progreso.nombre ? progreso.nombre : 'Pendiente de nombre'}</div>
      <p>Fases completadas: <strong>${completadas} de ${total}</strong></p>
      <p>Estado: <strong>${puedeEmitir ? 'Apto para certificado' : 'Pendiente de completar requisitos'}</strong></p>
      <button class="btn btn--primary" id="generateCertificateBtn">Generar certificado en pantalla</button>
      <div id="certificateMessage" class="result-box hidden"></div>
    </div>
  `;

  document.getElementById('generateCertificateBtn').addEventListener('click', () => {
    const certificateMessage = document.getElementById('certificateMessage');

    if (!progreso.nombre || !progreso.nombre.trim()) {
      certificateMessage.className = 'result-box error';
      certificateMessage.textContent = 'Debes completar el nombre del estudiante antes de generar el certificado.';
      return;
    }

    if (progreso.fasesCompletadas.length !== fases.length) {
      certificateMessage.className = 'result-box error';
      certificateMessage.textContent = 'No puedes generar el certificado hasta completar y validar todas las fases.';
      return;
    }

    progreso.certificadoGenerado = true;
    guardarEstado();
    certificateMessage.className = 'result-box success';
    certificateMessage.innerHTML = `Certificado listo para revisión docente. Puedes imprimir esta pantalla o exportarla desde el navegador.`;
  });
}

function render() {
  studentNameInput.value = progreso.nombre || '';
  actualizarProgresoUI();
  renderPhaseList();
  renderPhaseContent();
  renderCertificate();
}

studentNameInput.addEventListener('input', () => {
  progreso.nombre = studentNameInput.value.trim();
  guardarEstado();
});

startBtn.addEventListener('click', () => {
  const primeraPendiente = fases.find((fase) => puedeAcceder(fase.id) && !progreso.fasesCompletadas.includes(fase.id));
  faseActual = primeraPendiente ? primeraPendiente.id : fases.at(-1).id;
  progreso.faseActual = faseActual;
  guardarEstado();
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

certificateBtn.addEventListener('click', () => {
  certificateSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

resetBtn.addEventListener('click', () => {
  const ok = window.confirm('Se borrará el progreso guardado en este dispositivo. ¿Deseas continuar?');
  if (!ok) return;
  progreso = reiniciarProgreso();
  faseActual = 0;
  render();
});

render();
