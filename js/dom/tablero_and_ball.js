const d = document;
let y = 0,
  x = 0;
export const table = function (e, table, ball) {
  const $table = d.querySelector(table);
  const $ball = d.querySelector(ball);
  const limiteTable = $table.getBoundingClientRect();
  const limiteBall = $ball.getBoundingClientRect();
  switch (e.keyCode) {
    case 37:
      e.preventDefault();
      if (limiteBall.left > limiteTable.left) x--;
      break;
    case 38:
      e.preventDefault();
      if (limiteBall.top > limiteTable.top) y--;
      break;
    case 39:
      e.preventDefault();
      if (limiteBall.right < limiteTable.right) x++;
      break;
    case 40:
      e.preventDefault();
      if (limiteBall.bottom < limiteTable.bottom) y++;
      break;
  }
  $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
};
