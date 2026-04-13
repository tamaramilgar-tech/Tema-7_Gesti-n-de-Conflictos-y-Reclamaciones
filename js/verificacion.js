export function codigoDelDia() {
  const hoy = new Date();
  const d = String(hoy.getDate()).padStart(2, "0");
  const m = String(hoy.getMonth() + 1).padStart(2, "0");
  const y = hoy.getFullYear();
  return `${d}${m}${y}`;
}

export function verificarCodigo(codigo) {
  return String(codigo).trim() === codigoDelDia();
}
