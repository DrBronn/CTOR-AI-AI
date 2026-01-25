/* ============================================================
   BOARD VISUALIZATION MODULE
   ============================================================ */

/**
 * Создаёт HTML-таблицу 10×10 для отображения доски.
 */
function createBoardTable(game) {
  const table = document.getElementById("board");
  table.innerHTML = "";

  const N = game.N;

  for (let i = 0; i < N; i++) {
    const tr = document.createElement("tr");

    for (let j = 0; j < N; j++) {
      const td = document.createElement("td");
      td.dataset.i = i;
      td.dataset.j = j;
      td.classList.add("inner");
      tr.appendChild(td);
    }

    table.appendChild(tr);
  }
}

/**
 * Обновляет отображение доски, счёта и статуса.
 */
function updateBoardView(game) {
  const N = game.N;

  const tds = document.querySelectorAll("#board td");
  tds.forEach(td => {
    const i = parseInt(td.dataset.i, 10);
    const j = parseInt(td.dataset.j, 10);

    td.classList.remove("black", "white");

    const val = game.board[i][j];
    if (val === 'R') td.classList.add("black");
    if (val === 'B') td.classList.add("white");
  });

  const [r, b] = game.getScore();
  document.getElementById("scoreR").textContent = r;
  document.getElementById("scoreB").textContent = b;

  document.getElementById("status").textContent =
    game.finished
      ? `Game finished. Winner: ${game.winner}`
      : `Turn ${game.turn} — Player ${game.current}`;
}

export { createBoardTable, updateBoardView };
