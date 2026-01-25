/* ============================================================
   BUILT-IN BOTS
   ============================================================ */

import { CTORGame } from "../core/game.js";

/* Основной объект со встроенными ботами */
const Bots = {
  random(board, player) {
    const game = new CTORGame();
    game.board = board.map(r => r.slice());
    game.current = player;

    const moves = game.getLegalMoves(player);
    if (moves.length === 0) return null;

    return moves[Math.floor(Math.random() * moves.length)];
  },

  greedy(board, player) {
    const game = new CTORGame();
    game.board = board.map(r => r.slice());
    game.current = player;

    const moves = game.getLegalMoves(player);
    if (moves.length === 0) return null;

    let best = null;
    let bestScore = -Infinity;

    for (const m of moves) {
      const tmp = board.map(r => r.slice());
      applyMoveToBoard(tmp, m, player);
      const score = evaluateBoard(tmp, player);

      if (score > bestScore) {
        bestScore = score;
        best = m;
      }
    }
    return best;
  }
};

/* Источники встроенных ботов */
const botSources = {
  random: "built-in",
  greedy: "built-in"
};

/* ============================================================
   HELPERS
   ============================================================ */

function applyMoveToBoard(b, move, player) {
  if (move.type === "put") {
    b[move.i][move.j] = player;
  } else if (move.type === "move") {
    const [i1, j1] = move.from;
    const [i2, j2] = move.to;
    b[i1][j1] = '.';
    b[i2][j2] = player;
  }
}

function evaluateBoard(b, player) {
  let score = 0;
  for (let i = 0; i < b.length; i++)
    for (let j = 0; j < b.length; j++)
      if (b[i][j] === player) score++;
  return score;
}

export { Bots, botSources };
