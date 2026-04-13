// =======================
// PROGRESO
// =======================

let progreso = JSON.parse(localStorage.getItem("progreso")) || {
  nombre: "",
  fasesCompletadas: [],
  tests: {}
};

function guardarProgreso() {
  localStorage.setItem("progreso", JSON.stringify(progreso));
}

// =======================
// CONTROL DE ACCESO
// =======================

function puedeAcceder(fase) {
  if (fase === 0) return true;
  return progreso.fasesCompletadas.includes(fase - 1);
}

// =======================
// VALIDACIÓN DOCENTE
// =======================

function obtenerCodigoHoy() {
  const hoy = new Date();
  const dia = String(hoy.getDate()).padStart(2, "0");
  const mes = String(hoy.getMonth() + 1).padStart(2, "0");
  const anio = hoy.getFullYear();
  return `${dia}${mes}${anio}`;
}

function validarFase(faseActual) {
  const input = document.getElementById("codigoInput");
  const mensaje = document.getElementById("mensajeValidacion");

  const codigo = input.value;

  if (codigo === obtenerCodigoHoy()) {
    if (!progreso.fasesCompletadas.includes(faseActual)) {
      progreso.fasesCompletadas.push(faseActual);
    }
    guardarProgreso();
    mensaje.innerText = "✅ Fase validada";
  } else {
    mensaje.innerText = "❌ Código incorrecto";
  }

  input.value = ""; // limpia y oculta
}

// =======================
// TEST (2 INTENTOS)
// =======================

function evaluarTest(fase, respuestas, correctas) {
  let aciertos = 0;

  respuestas.forEach((r, i) => {
    if (r === correctas[i]) aciertos++;
  });

  const nota = aciertos / correctas.length;

  if (!progreso.tests[fase]) {
    progreso.tests[fase] = {
      intentos: 0,
      superado: false
    };
  }

  progreso.tests[fase].intentos++;

  if (nota >= 0.8) {
    progreso.tests[fase].superado = true;
    alert("✅ Test superado");
  } else {
    if (progreso.tests[fase].intentos >= 2) {
      alert("❌ No superado. Se muestran las respuestas correctas.");
      mostrarCorrectas(correctas);
    } else {
      alert("❌ No superado. Te queda 1 intento.");
    }
  }

  guardarProgreso();
}

function mostrarCorrectas(correctas) {
  console.log("Respuestas correctas:", correctas);
}

// =======================
// CERTIFICADO
// =======================

function generarCertificado() {
  if (!progreso.nombre || progreso.nombre.trim() === "") {
    alert("Introduce tu nombre");
    return;
  }

  if (progreso.fasesCompletadas.length < 9) {
    alert("Debes completar todas las fases");
    return;
  }

  let resumen = "RESULTADO TESTS:\n";

  for (let fase in progreso.tests) {
    resumen += `Fase ${fase}: ${
      progreso.tests[fase].superado ? "SUPERADO" : "NO SUPERADO"
    }\n`;
  }

  alert("Certificado generado\n\n" + resumen);
}
