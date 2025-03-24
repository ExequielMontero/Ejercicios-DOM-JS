import { navLinks } from "./dom/boton_hamburguer.js";
import { clockReloj, alarmaReloj } from "./dom/reloj_dom.js";
import { table } from "./dom/tablero_and_ball.js";

const d = document;
d.addEventListener("DOMContentLoaded", (e) => {
  navLinks(
    "#hamburger",
    "#button-nav",
    "#nav-ul-li-1",
    "#nav-ul-li-2",
    "#nav-ul-li-3",
    "#nav-ul-li-4",
    "#nav-ul-li-5"
  );

  /*Reloj*/
  clockReloj("#play-reloj", "#stop-reloj", "#reset-reloj");
  alarmaReloj("#activar-alarma", "#desactivar-alarma");
  /*End reloj*/
});
/*Tablero y manejo de la bola seccion 2"*/
d.addEventListener("keydown", (e) => {
  table(e, ".table", ".ball-table");
}); /* End Tablero y manejo de la bola seccion 2"*/

/*funcion temporizador inputs*/
function validateNumber(input, maxValue) {
  let value = parseInt(input.value, 10);

  if (isNaN(value)) {
    value = 0;
  } else if (value > maxValue) {
    value = maxValue;
  } else if (value < 0) {
    value = 0;
  }

  input.value = value;
}
window.validateNumber = validateNumber;

/*end funcion temporizador inputs*/
