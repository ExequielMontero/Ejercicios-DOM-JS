import { navLinks } from "./dom/boton_hamburguer.js";
import { clockReloj, alarmaReloj } from "./dom/reloj_dom.js";

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

  clockReloj("#play-reloj", "#stop-reloj", "#reset-reloj");
  alarmaReloj("#activar-alarma", "#desactivar-alarma");
});
