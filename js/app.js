(function () {
  const { PHASES } = window.Tema7Data;
  const { loadProgress, saveProgress, resetProgress } = window.Tema7Storage;
  const TOTAL_PHASES = PHASES.length;

  let state = loadProgress();
  let currentView = 'home';
  let currentPhaseId = PHASES[0].id;

  const $ = (selector) => document.querySelector(selector);

  function init() {
    bindGlobalEvents();
    ensureCompletionFlags();
    renderHomePhaseCards();
    renderPhaseNav();
    renderCurrentPhase();
    hydrateStudentName();
    updateAllUI();
  }

  function bindGlobalEvents() {
    $('#studentName').addEventListener('input', (event) => {
      state.studentName = event.target.value;
      persist();
      updateCertificatePanel();
    });

    $('#resetProgressBtn').addEventListener('click', () => {
      const ok = confirm('Se borrará el progreso guardado en este navegador. ¿Deseas continuar?');
      if (!ok) return;
      state = resetProgress();
      currentView = 'home';
      currentPhaseId = PHASES[0].id;
      renderPhaseNav();
      renderHomePhaseCards();
      renderCurrentPhase();
      hydrateStudentName();
      updateAllUI();
    });

    $('#startBtn').addEventListener('click', () => openPhase(PHASES[0].id));
    $('#goCertificateBtn').addEventListener('click', () => showView('certificate'));
    $('#generateCertificateBtn').addEventListener('click', handleGenerateCertificate);
  }

  function hydrateStudentName() {
    $('#studentName').value = state.studentName || '';
  }

  function ensureCompletionFlags() {
    PHASES.forEach((phase) => {
      if (typeof state.practiceCompleted[phase.id] !== 'boolean') state.practiceCompleted[phase.id] = false;
      if (typeof state.phasesCompleted[phase.id] !== 'boolean') state.phasesCompleted[phase.id] = false;
    });
  }

  function persist() {
    state = saveProgress(state);
    updateAllUI();
  }

  function getPhaseStatus(phase, index) {
    if (state.phasesCompleted[phase.id]) return 'completed';
    if (index === 0) return 'available';
    const previousPhase = PHASES[index - 1];
    return state.phasesCompleted[previousPhase.id] ? 'available' : 'locked';
  }

  function renderPhaseNav() {
    const nav = $('#phaseNav');
    nav.innerHTML = '';

    const homeButton = document.createElement('button');
    homeButton.className = `phase-link ${currentView === 'home' ? 'active' : ''}`;
    homeButton.innerHTML = `
      <span>
        <span class="phase-title">Inicio</span>
      </span>
      <span class="phase-state available">general</span>
    `;
    homeButton.addEventListener('click', () => showView('home'));
    nav.appendChild(homeButton);

    PHASES.forEach((phase, index) => {
      const status = getPhaseStatus(phase, index);
      const button = document.createElement('button');
      button.className = `phase-link ${status} ${currentView === 'phase' && currentPhaseId === phase.id ? 'active' : ''}`;
      button.disabled = status === 'locked';
      button.innerHTML = `
        <span>
          <span class="phase-title">${index === 0 ? 'Inicial' : 'Fase ' + index} · ${phase.shortTitle}</span>
        </span>
        <span class="phase-state ${status}">${statusLabel(status)}</span>
      `;
      button.addEventListener('click', () => openPhase(phase.id));
      nav.appendChild(button);
    });

    const certButton = document.createElement('button');
    certButton.className = `phase-link ${currentView === 'certificate' ? 'active' : ''}`;
    certButton.innerHTML = `
      <span><span class="phase-title">Certificado</span></span>
      <span class="phase-state ${canGenerateCertificate() ? 'completed' : 'locked'}">${canGenerateCertificate() ? 'listo' : 'pendiente'}</span>
    `;
    certButton.addEventListener('click', () => showView('certificate'));
    nav.appendChild(certButton);
  }

  function renderHomePhaseCards() {
    const container = $('#phaseCardsHome');
    container.innerHTML = '';

    PHASES.forEach((phase, index) => {
      const status = getPhaseStatus(phase, index);
      const article = document.createElement('article');
      article.className = `card phase-home-card ${status}`;
      article.innerHTML = `
        <p class="eyebrow">${index === 0 ? 'Práctica inicial' : 'Fase ' + index}</p>
        <h3>${phase.shortTitle}</h3>
        <p>${phase.intro}</p>
        <span class="badge-inline">${statusLabel(status)}</span>
      `;
      article.addEventListener('click', () => {
        if (status !== 'locked') openPhase(phase.id);
      });
      container.appendChild(article);
    });
  }

  function renderCurrentPhase() {
    const phase = PHASES.find((item) => item.id === currentPhaseId) || PHASES[0];
    const index = PHASES.findIndex((item) => item.id === phase.id);
    const container = $('#phaseContainer');
    const savedText = state.practiceAnswers[phase.id] || '';
    const testResult = state.testResults[phase.id];

    container.innerHTML = `
      <div class="phase-header">
        <div>
          <p class="phase-index">${index === 0 ? 'PRÁCTICA INICIAL' : 'FASE ' + index}</p>
          <h2>${phase.title}</h2>
          <p>${phase.intro}</p>
        </div>
        <div class="card" style="min-width: 220px;">
          <p class="small muted">Estado de la fase</p>
          <p><strong>${state.phasesCompleted[phase.id] ? 'Superada' : 'Pendiente'}</strong></p>
          <p class="small muted">Práctica: ${state.practiceCompleted[phase.id] ? 'completada' : 'pendiente'}</p>
          <p class="small muted">Test: ${testResult ? `${testResult.score}/${phase.test.length}` : 'sin realizar'}</p>
        </div>
      </div>

      <article class="card theory-box">
        <p class="eyebrow">Contenidos clave</p>
        <div class="mini-grid">
          <div>
            <h3>Ideas esenciales</h3>
            <ul class="info-list">
              ${phase.theory.map((item) => `<li>${item}</li>`).join('')}
            </ul>
          </div>
          <div>
            <h3>Criterios de corrección orientativos</h3>
            <ul class="check-list">
              ${phase.rubric.map((item) => `<li>${item}</li>`).join('')}
            </ul>
          </div>
        </div>
      </article>

      <article class="card practice-box">
        <p class="eyebrow">Práctica aplicada</p>
        <p>${phase.practicePrompt}</p>
        <p class="practice-tip">Consejo didáctico: redacta una respuesta argumentada, conecta teoría con el caso y utiliza vocabulario técnico del tema.</p>
        <label class="field-label" for="practiceAnswer">Respuesta del estudiante</label>
        <textarea id="practiceAnswer" placeholder="Escribe aquí tu desarrollo..."></textarea>
        <div class="cta-row">
          <button id="savePracticeBtn" class="secondary">Guardar práctica</button>
          <button id="completePracticeBtn">Marcar práctica como completada</button>
          <span class="saved-indicator" id="savedPracticeIndicator">Autoguardado activo</span>
        </div>
        <p class="small muted">Mínimo recomendado: ${phase.minLength} caracteres.</p>
      </article>

      <article class="card test-box">
        <p class="eyebrow">Test de consolidación</p>
        <p>Debes alcanzar al menos un 80 % de aciertos para superar la fase.</p>
        <form id="testForm"></form>
        <div class="cta-row">
          <button id="submitTestBtn">Corregir test</button>
        </div>
        <div id="testResultBox"></div>
      </article>
    `;

    const practiceAnswer = $('#practiceAnswer');
    practiceAnswer.value = savedText;
    practiceAnswer.addEventListener('input', debounce((event) => {
      state.practiceAnswers[phase.id] = event.target.value;
      persist();
      showSavedMessage();
    }, 220));

    $('#savePracticeBtn').addEventListener('click', () => {
      state.practiceAnswers[phase.id] = practiceAnswer.value;
      persist();
      showSavedMessage('Guardado manual realizado.');
    });

    $('#completePracticeBtn').addEventListener('click', () => markPracticeCompleted(phase));
    $('#submitTestBtn').addEventListener('click', (event) => {
      event.preventDefault();
      evaluateTest(phase);
    });

    renderQuestions(phase);
    paintStoredAnswers(phase);
    paintTestResult(phase);
  }

  function showSavedMessage(customText) {
    const indicator = $('#savedPracticeIndicator');
    if (!indicator) return;
    indicator.textContent = customText || 'Cambios guardados automáticamente.';
    clearTimeout(showSavedMessage.timer);
    showSavedMessage.timer = setTimeout(() => {
      if (indicator) indicator.textContent = 'Autoguardado activo';
    }, 1800);
  }

  function renderQuestions(phase) {
    const form = $('#testForm');
    form.innerHTML = phase.test.map((question, qIndex) => `
      <fieldset class="question-card">
        <legend>${qIndex + 1}. ${question.question}</legend>
        ${question.options.map((option, oIndex) => `
          <label class="option">
            <input type="radio" name="${phase.id}_q${qIndex}" value="${oIndex}" ${getStoredAnswer(phase.id, qIndex) === oIndex ? 'checked' : ''} />
            <span>${option}</span>
          </label>
        `).join('')}
      </fieldset>
    `).join('');

    form.querySelectorAll('input[type="radio"]').forEach((input) => {
      input.addEventListener('change', (event) => {
        const [, qIndex] = event.target.name.split('_q');
        if (!state.testAnswers[phase.id]) state.testAnswers[phase.id] = {};
        state.testAnswers[phase.id][qIndex] = Number(event.target.value);
        persist();
      });
    });
  }

  function paintStoredAnswers(phase) {
    const answers = state.testAnswers[phase.id] || {};
    Object.entries(answers).forEach(([questionIndex, optionIndex]) => {
      const selector = `input[name="${phase.id}_q${questionIndex}"][value="${optionIndex}"]`;
      const input = document.querySelector(selector);
      if (input) input.checked = true;
    });
  }

  function getStoredAnswer(phaseId, qIndex) {
    return state.testAnswers?.[phaseId]?.[qIndex];
  }

  function markPracticeCompleted(phase) {
    const answer = ($('#practiceAnswer')?.value || '').trim();
    if (answer.length < phase.minLength) {
      alert(`La práctica necesita un desarrollo más completo. Escribe al menos ${phase.minLength} caracteres antes de marcarla como completada.`);
      return;
    }

    state.practiceAnswers[phase.id] = answer;
    state.practiceCompleted[phase.id] = true;
    maybeCompletePhase(phase.id);
    persist();
    renderCurrentPhase();
  }

  function evaluateTest(phase) {
    const answers = state.testAnswers[phase.id] || {};
    const total = phase.test.length;
    const answered = Object.keys(answers).length;

    if (answered < total) {
      alert('Debes responder todas las preguntas antes de corregir el test.');
      return;
    }

    let score = 0;
    phase.test.forEach((question, index) => {
      if (Number(answers[index]) === question.correct) score += 1;
    });

    const percentage = Math.round((score / total) * 100);
    const passed = percentage >= 80;

    state.testResults[phase.id] = {
      score,
      total,
      percentage,
      passed,
      checkedAt: new Date().toISOString()
    };

    maybeCompletePhase(phase.id);
    persist();
    paintTestResult(phase);
    renderPhaseNav();
    renderHomePhaseCards();
  }

  function maybeCompletePhase(phaseId) {
    const practiceDone = !!state.practiceCompleted[phaseId];
    const testDone = !!state.testResults[phaseId]?.passed;
    state.phasesCompleted[phaseId] = practiceDone && testDone;
  }

  function paintTestResult(phase) {
    const box = $('#testResultBox');
    if (!box) return;

    const result = state.testResults[phase.id];
    if (!result) {
      box.innerHTML = '';
      return;
    }

    const className = result.passed ? 'success' : 'warning';
    const message = result.passed
      ? `Fase superada en el test con ${result.score}/${result.total} aciertos (${result.percentage} %).`
      : `Has obtenido ${result.score}/${result.total} aciertos (${result.percentage} %). Necesitas al menos un 80 % para superar la fase.`;

    box.innerHTML = `<div class="result-banner ${className}">${message}</div>`;
  }

  function openPhase(phaseId) {
    currentPhaseId = phaseId;
    showView('phase');
  }

  function showView(view) {
    currentView = view;
    $('#view-home').classList.toggle('hidden', view !== 'home');
    $('#view-phase').classList.toggle('hidden', view !== 'phase');
    $('#view-certificate').classList.toggle('hidden', view !== 'certificate');

    if (view === 'phase') renderCurrentPhase();
    if (view === 'certificate') updateCertificatePanel();

    renderPhaseNav();
    renderHomePhaseCards();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function updateAllUI() {
    const completedCount = getCompletedCount();
    $('#completedPhasesCount').textContent = completedCount;
    $('#globalProgressValue').textContent = `${Math.round((completedCount / TOTAL_PHASES) * 100)}%`;
    updateProgressCircle(completedCount / TOTAL_PHASES);
    updateCertificatePanel();
    renderPhaseNav();
    renderHomePhaseCards();
  }

  function updateCertificatePanel() {
    const completedCount = getCompletedCount();
    const hasName = !!state.studentName.trim();
    $('#certificateStudentName').textContent = hasName ? state.studentName : 'Pendiente';
    $('#certificateCompletedInfo').textContent = `${completedCount}/${TOTAL_PHASES}`;
    $('#certificateStatus').textContent = canGenerateCertificate() ? 'Disponible' : 'No disponible';
    $('#generateCertificateBtn').disabled = !canGenerateCertificate();
  }

  function canGenerateCertificate() {
    return !!state.studentName.trim() && getCompletedCount() === TOTAL_PHASES;
  }

  function handleGenerateCertificate() {
    if (!state.studentName.trim()) {
      alert('Debes completar el nombre del estudiante antes de generar el certificado.');
      return;
    }
    if (getCompletedCount() !== TOTAL_PHASES) {
      alert('Debes completar la práctica inicial y las 8 fases antes de generar el certificado.');
      return;
    }

    window.Tema7Certificate.generateCertificate({
      studentName: state.studentName.trim(),
      completedCount: getCompletedCount(),
      totalCount: TOTAL_PHASES
    });
  }

  function getCompletedCount() {
    return PHASES.filter((phase) => state.phasesCompleted[phase.id]).length;
  }

  function updateProgressCircle(progress) {
    const circle = $('#progressCircle');
    const circumference = 326.73;
    circle.style.strokeDashoffset = String(circumference - circumference * progress);
  }

  function statusLabel(status) {
    return {
      completed: 'superada',
      available: 'disponible',
      locked: 'bloqueada'
    }[status];
  }

  function debounce(fn, wait) {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn.apply(null, args), wait);
    };
  }

  document.addEventListener('DOMContentLoaded', init);
})();
