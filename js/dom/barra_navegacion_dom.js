const $nav = document.createElement("nav"),
  $ul = document.createElement("ul"),
  links = [
    { title: "Reloj y Alarma", src: "#seccion1" },
    { title: "Tabla bolla", src: "#seccion2" },
    { title: "Temporizador", src: "#seccion3" },
    { title: "sección 4", src: "#seccion4" },
    { title: "sección 5", src: "#seccion5" },
  ],
  $button = document.createElement("button");

//Configuración del contenido nav
$nav.classList.add("nav");
$ul.innerHTML = links
  .map(
    (link, index) => `
  <li>
    <a id="nav-ul-li-${index + 1}" href="index.html${link.src}">${
      link.title
    }</a>
  </li>
`
  )
  .join("");
//End configuración del contenido nav

//button dentro del nav
const $i = `<i class="bi bi-x-circle-fill button-nav-i"></i>`;
$button.innerHTML = $i;
$button.classList.add("button-nav");
$button.setAttribute("id", "button-nav");
//End button dentro del nav

const $header = document.querySelector(".header");
//Agregando al DOM
$nav.appendChild($ul);
$nav.appendChild($button);
$header.appendChild($nav);
/* document.body.appendChild($nav); */
//End agregando al DOM
