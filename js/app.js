// =======================
// ESTADO GLOBAL
// =======================

let faseActual = 0;

let progreso = JSON.parse(localStorage.getItem("progreso")) || {
  nombre: "",
  fasesCompletadas: [],
  tests: {}
};

function guardarProgreso() {
  localStorage.setItem("progreso", JSON.stringify(progreso));
}

// =======================
// CODIGO DOCENTE
// =======================

function obtenerCodigoHoy() {
  const hoy = new Date();
  const dia = String(hoy.getDate()).padStart(2, "0");
  const mes = String(hoy.getMonth() + 1).padStart(2, "0");
  const anio = hoy.getFullYear();
  return `${dia}${mes}${anio}`;
}

// =======================
// VALIDACIÓN FASE
// =======================

window.validarFase = function () {
  const input = document.getElementById("teacherCodeInput");
  const mensaje = document.getElementById("validationMessage");

  const codigo = input.value.trim();

  if (codigo === obtenerCodigoHoy()) {
    if (!progreso.fasesCompletadas.includes(faseActual)) {
      progreso.fasesCompletadas.push(faseActual);
    }
    mensaje.innerText = "✅ Fase validada correctamente";
  } else {
    mensaje.innerText = "❌ Código incorrecto";
  }

  input.value = ""; // 🔐 limpia campo
  guardarProgreso();
  actualizarProgreso();
};

// =======================
// RENDER FASE
// =======================

function renderFase() {
  const content = document.getElementById("content");

  content.innerHTML = `
    <h2>Fase ${faseActual}</h2>

    <div class="teacher-validation-box">
      <h3>Validación docente</h3>
      <p>
        Cuando hayas subido la evidencia al EVAGD, introduce el código facilitado por el docente.
      </p>

      <div style="display:flex; gap:10px;">
        <input id="teacherCodeInput" 
               type="password" 
               placeholder="Código del docente" 
               autocomplete="off" />

        <button onclick="validarFase()">Validar fase</button>
      </div>

      <p id="validationMessage">Pendiente de validación.</p>
    </div>
  `;
}

// =======================
// PROGRESO VISUAL
// =======================

function actualizarProgreso() {
  const total = 9;
  const completadas = progreso.fasesCompletadas.length;

  const texto = document.getElementById("progressText");
  const barra = document.getElementById("progressBar");

  if (texto) {
    texto.innerText = `${completadas} de ${total} fases validadas`;
  }

  if (barra) {
    barra.style.width = `${(completadas / total) * 100}%`;
  }
}

// =======================
// CERTIFICADO
// =======================

window.generarCertificado = function () {
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
};

// =======================
// INICIO
// =======================

window.onload = function () {
  const nameInput = document.getElementById("studentName");

  if (progreso.nombre && nameInput) {
    nameInput.value = progreso.nombre;
  }

  if (nameInput) {
    nameInput.addEventListener("input", () => {
      progreso.nombre = nameInput.value;
      guardarProgreso();
    });
  }

  actualizarProgreso();
  renderFase();
};
