// ------------------------------------------------------------
// CTOR GAME — Greedy Bot
// ------------------------------------------------------------
// This bot evaluates every legal move and chooses the one that
// captures the largest number of opponent pieces.
//
// NOTE:
// The platform must provide a helper function "evaluateMove"
// or you can implement your own scoring logic.
// ------------------------------------------------------------

export function greedyBot(board, color) {
  let bestMove = null;
  let bestScore = -1;

  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      if (board[row][col] !== ".") continue;

      // If evaluateMove is available in your platform:
      const score = evaluateMove(board, row, col, color);

      if (score > bestScore) {
        bestScore = score;
        bestMove = { row, col };
      }
    }
  }

  return bestMove || null;
}
