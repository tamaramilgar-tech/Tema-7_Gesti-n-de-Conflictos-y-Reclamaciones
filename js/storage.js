(function () {
  const STORAGE_KEY = 'tema7_conflictos_reclamaciones_progreso_v1';

  function buildDefaultState() {
    return {
      studentName: '',
      practiceAnswers: {},
      practiceCompleted: {},
      testAnswers: {},
      testResults: {},
      phasesCompleted: {},
      lastUpdated: null
    };
  }

  function loadProgress() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return buildDefaultState();
      const parsed = JSON.parse(raw);
      return { ...buildDefaultState(), ...parsed };
    } catch (error) {
      console.warn('No se pudo cargar el progreso guardado.', error);
      return buildDefaultState();
    }
  }

  function saveProgress(progress) {
    const next = { ...progress, lastUpdated: new Date().toISOString() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    return next;
  }

  function resetProgress() {
    localStorage.removeItem(STORAGE_KEY);
    return buildDefaultState();
  }

  window.Tema7Storage = {
    STORAGE_KEY,
    buildDefaultState,
    loadProgress,
    saveProgress,
    resetProgress
  };
})();
