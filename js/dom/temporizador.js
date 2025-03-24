let intervalo;

export function establecerMinimo() {
  let ahora = new Date();
  ahora.setMinutes(ahora.getMinutes() - ahora.getTimezoneOffset());
  let minDatetime = ahora.toISOString().slice(0, 16);
  document.getElementById("datetime").min = minDatetime;
}

function iniciarTemporizador() {
  let inputFecha = document.getElementById("datetime");
  let mensaje = document.getElementById("mensaje");

  let fechaSeleccionada = new Date(inputFecha.value);
  let ahora = new Date();

  if (fechaSeleccionada <= ahora) {
    mensaje.textContent = "⚠ Debes seleccionar una fecha y hora futura.";
    inputFecha.value = "";
    return;
  }

  if (intervalo) clearInterval(intervalo);

  actualizarCuentaRegresiva(fechaSeleccionada);

  // Actualizar cada segundo
  intervalo = setInterval(() => {
    actualizarCuentaRegresiva(fechaSeleccionada);
  }, 1000);
}

function actualizarCuentaRegresiva(fechaObjetivo) {
  let ahora = new Date();
  let diferencia = fechaObjetivo - ahora;

  if (diferencia <= 0) {
    clearInterval(intervalo);
    document.getElementById("mensaje").textContent = "⏳ ¡Tiempo finalizado!";
    alert("⏳¡Tiempo finalizado!");
    return;
  }

  let dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  let horas = Math.floor(
    (diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  let segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  document.getElementById(
    "mensaje"
  ).textContent = `⏳ Faltan: ${dias} días, ${horas} horas, ${minutos} minutos, ${segundos} segundos`;
}

window.iniciarTemporizador = iniciarTemporizador;
