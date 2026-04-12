export const STORAGE_KEY = 'cya_tema7_progreso_v2';

export const defaultProgress = {
  nombre: '',
  faseActual: 0,
  fasesCompletadas: [],
  respuestasPracticas: {},
  testScores: {},
  validaciones: {},
  certificadoGenerado: false
};

export function cargarProgreso() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return structuredClone(defaultProgress);
    return { ...structuredClone(defaultProgress), ...JSON.parse(raw) };
  } catch {
    return structuredClone(defaultProgress);
  }
}

export function guardarProgreso(progreso) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progreso));
}

export function reiniciarProgreso() {
  localStorage.removeItem(STORAGE_KEY);
  return structuredClone(defaultProgress);
}
