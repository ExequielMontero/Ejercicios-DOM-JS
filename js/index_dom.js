import { navLinks } from "./dom/boton_hamburguer.js";
import { clockReloj, alarmaReloj } from "./dom/reloj_dom.js";
import { table } from "./dom/tablero_and_ball.js";
import { establecerMinimo } from "./dom/temporizador.js";

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

  /*funcion temporizador inputs*/
  establecerMinimo();
  /*end funcion temporizador inputs*/
});
/*Tablero y manejo de la bola seccion 2"*/
d.addEventListener("keydown", (e) => {
  table(e, ".table", ".ball-table");
}); /* End Tablero y manejo de la bola seccion 2"*/

setInterval(establecerMinimo, 60000); // 60000 ms = 1 minuto
