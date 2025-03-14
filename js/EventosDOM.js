import { navLinks } from "./FuncionesEventosDOM.js";
document.addEventListener("click", (e) => {
  //evento click del button hamburguer para abrir el nav
  if (e.target.closest("#hamburger")) {
    navLinks();
  }
  //evento click del button button-nav que esta dentro del nav para cerrar el nav
  if (e.target.closest("#button-nav")) {
    navLinks();
  }
  //evento click de los enlaces a que estan dentro del nav para al darle click que se cierre
  if (
    e.target.closest("#nav-ul-li-1") ||
    e.target.closest("#nav-ul-li-2") ||
    e.target.closest("#nav-ul-li-3") ||
    e.target.closest("#nav-ul-li-4") ||
    e.target.closest("#nav-ul-li-5")
  ) {
    navLinks();
  }
});
