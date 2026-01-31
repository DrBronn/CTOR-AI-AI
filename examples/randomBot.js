// ------------------------------------------------------------
// CTOR GAME — Random Bot
// ------------------------------------------------------------
// This bot chooses a random empty cell on the board.
// It is stronger than the "first empty cell" bot,
// but still very simple.
//
// Useful as a baseline opponent for testing.
// ------------------------------------------------------------

export function randomBot(board, color) {
  const legalMoves = [];

  // Collect all empty cells
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      if (board[row][col] === ".") {
        legalMoves.push({ row, col });
      }
    }
  }

  // No moves available
  if (legalMoves.length === 0) {
    return null;
  }

  // Choose a random move
  const index = Math.floor(Math.random() * legalMoves.length);
  return legalMoves[index];
}
