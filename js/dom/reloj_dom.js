const d = document;
export const clockReloj = (playReloj, stopReloj, resetReloj) => {
  let stopClock;
  let actual;
  d.addEventListener("click", (e) => {
    if (e.target.matches(playReloj)) {
      stopClock = setInterval(() => {
        actual = new Date().toLocaleTimeString("es-ES");
        d.querySelector(".label1").textContent = `${actual} ¡running!`;
      }, 1000);
    }

    if (e.target.matches(stopReloj)) {
      const ahora = actual;
      clearInterval(stopClock);
      d.querySelector(".label1").textContent = `${ahora} ¡stopping!`;
    }

    if (e.target.matches(resetReloj)) {
      clearInterval(stopClock);
      d.querySelector(".label1").textContent = "00:00:00";
    }
  });
};

export const alarmaReloj = (activarAlarma, desactivarAlarma) => {
  const alarma = d.createElement("audio");
  let intervalAlarma;
  d.querySelector(desactivarAlarma).disabled = true;
  d.addEventListener("click", (e) => {
    if (e.target.matches(activarAlarma)) {
      const time = d.getElementById("time").value;
      alarma.src = "../assets/alarma.mp3";
      alert(`Alarma Activada a las ${time}`);
      intervalAlarma = setInterval(async () => {
        const ahora = new Date();
        e.target.disabled = true;
        d.querySelector(desactivarAlarma).disabled = false;
        if (
          `${ahora.getHours().toString().padStart(2, "0")}:${ahora
            .getMinutes()
            .toString()
            .padStart(2, "0")}` == time
        ) {
          try {
            await alarma.play(); // Espera a que empiece la reproduccion
          } catch (error) {
            console.error("Error al reproducir el audio:", error);
          } finally {
            clearInterval(intervalAlarma); // Detiene el intervalo
          }
        }
      }, 1000);
    }

    if (e.target.matches(desactivarAlarma)) {
      clearInterval(intervalAlarma);
      alarma.pause();
      alarma.currentTime = 0;
      d.getElementById("time").value = d.getElementById("time").defaultValue;
      d.querySelector(activarAlarma).disabled = false;
      d.querySelector(desactivarAlarma).disabled = true;
    }
  });
};
