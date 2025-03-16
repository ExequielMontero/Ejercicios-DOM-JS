export const navLinks = (
  btnPLay,
  btnClose,
  enlace1,
  enlace2,
  enlace3,
  enlace4,
  enlace5
) => {
  const $nav = document.querySelector(".nav");
  document.addEventListener("click", (e) => {
    //evento click del button hamburguer para abrir el nav
    if (e.target.closest(btnPLay)) {
      $nav.style.display = $nav.style.display === "none" ? "flex" : "none";
    }
    //evento click del button button-nav que esta dentro del nav para cerrar el nav
    if (e.target.closest(btnClose)) {
      $nav.style.display = $nav.style.display === "none" ? "flex" : "none";
    }
    //evento click de los enlaces a que estan dentro del nav para al darle click que se cierre
    if (
      e.target.closest(enlace1) ||
      e.target.closest(enlace2) ||
      e.target.closest(enlace3) ||
      e.target.closest(enlace4) ||
      e.target.closest(enlace5)
    ) {
      $nav.style.display = $nav.style.display === "none" ? "flex" : "none";
    }
  });
};
