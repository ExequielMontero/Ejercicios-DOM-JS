const d = document;
export function darkMode(btn) {
  d.addEventListener("click", (e) => {
    if (e.target.closest(btn)) {
      const buttons = d.querySelectorAll(".button");
      const h3 = d.querySelectorAll("h3");
      const label = d.querySelectorAll("label");
      const tableForBall = d.querySelector(".table");

      d.body.classList.toggle("body-darkmode");

      buttons.forEach((button) => {
        button.classList.toggle("button-darkmode");
      });
      h3.forEach((h3) => {
        h3.classList.toggle("h3-darkmode");
      });

      label.forEach((label) => {
        label.classList.toggle("label-darkmode");
      });

      tableForBall.classList.toggle("table-darkmode");
    }
  });
}
