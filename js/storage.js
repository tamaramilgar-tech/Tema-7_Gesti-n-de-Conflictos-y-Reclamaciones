const KEY = "tema7_conflictos_reclamaciones_v1";

const defaultState = {
  studentName: "",
  validatedPhases: [],
  testState: {}
};

export function loadState() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return structuredClone(defaultState);
    const parsed = JSON.parse(raw);
    return {
      studentName: parsed.studentName || "",
      validatedPhases: Array.isArray(parsed.validatedPhases) ? parsed.validatedPhases : [],
      testState: parsed.testState && typeof parsed.testState === "object" ? parsed.testState : {}
    };
  } catch {
    return structuredClone(defaultState);
  }
}

export function saveState(state) {
  localStorage.setItem(KEY, JSON.stringify(state));
}

export function resetState() {
  localStorage.removeItem(KEY);
}
