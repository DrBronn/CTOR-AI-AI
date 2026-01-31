// ------------------------------------------------------------
// CTOR GAME — Beginner Bot Template
// ------------------------------------------------------------
// This file provides a fully commented starter bot for CTOR GAME.
// It is designed for students who are writing their first AI bot.
//
// HOW TO USE THIS FILE:
// 1. Copy this file and rename it (e.g., "myBot.js").
// 2. Replace the strategy section with your own logic.
// 3. Upload your bot into the CTOR GAME platform.
// 4. Test it against built‑in bots.
//
// ------------------------------------------------------------
// BOT FUNCTION REQUIREMENTS
// ------------------------------------------------------------
// Your bot MUST export exactly one function:
//
//   export function myBot(board, color)
//
// PARAMETERS:
//   board — an 8×8 array representing the game board.
//            Each cell contains:
//              "R" — Red piece
//              "B" — Blue piece
//              "." — empty cell
//
//   color — a string: "R" or "B"
//           This is YOUR bot's color.
//
// RETURN VALUE:
//   Your bot must return an object:
//       { row: Number, col: Number }
//
//   If no legal moves exist, return:
//       null
//
// ------------------------------------------------------------
// IMPORTANT RULES:
// ------------------------------------------------------------
// • You may choose ANY empty cell (".").
// • If you choose an illegal move, your bot automatically loses.
// • The platform will execute your function once per turn.
// • Your bot must run quickly — avoid heavy computations.
//
// ------------------------------------------------------------
// STARTER STRATEGY (VERY SIMPLE)
// ------------------------------------------------------------
// The example below chooses the FIRST empty cell on the board.
// This is the simplest possible bot.
// Replace this logic with your own strategy.
// ------------------------------------------------------------

export function myBot(board, color) {
  // Loop through all board cells
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {

      // Check if the cell is empty
      if (board[row][col] === ".") {

        // Return this move
        return { row, col };
      }
    }
  }

  // ------------------------------------------------------------
  // NO MOVES AVAILABLE
  // ------------------------------------------------------------
  // If the board has no empty cells, return null.
  // The game engine will handle this situation.
  // ------------------------------------------------------------
  return null;
}

// ------------------------------------------------------------
// WHERE TO ADD YOUR STRATEGY
// ------------------------------------------------------------
// Replace the simple "first empty cell" logic with your own code.
// Examples of strategies you can implement:
//
// • Random move
// • Greedy move (maximize captures)
// • Defensive move (block opponent)
// • Pattern‑based heuristics
// • Minimax search (advanced)
// • Hybrid strategies
//
// You can create helper functions below this line if needed.
// ------------------------------------------------------------
