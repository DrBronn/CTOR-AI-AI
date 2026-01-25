# CTOR Tournament — Modular Browser Edition

This project is a modular, browser‑based platform for running, testing, and comparing AI bots in the abstract strategy game **CTOR**.  
It is a complete refactor of the original single‑file prototype into a clean, maintainable, and extensible architecture.

---

## 🚀 Features

- Full CTOR game engine (10×10 toroidal board, auto‑eat, 2 PUT + 2 MOVE per turn)
- Built‑in bots (`random`, `greedy`)
- Uploadable custom bots (`.js` files)
- Interactive board visualization
- Step‑by‑step and auto‑play modes
- Clean ES‑module architecture
- Easy to extend: new bots, new runners, new visualizations

---

## 📁 Project Structure

index.html
core/
game.js
bots/
builtins.js
upload.js
visual/
boardView.js
tournament/
matchRunner.js

Code

### Directory Overview

| Directory | Purpose |
|----------|---------|
| **core/** | CTOR game engine (rules, moves, auto‑eat, scoring) |
| **bots/** | Built‑in bots + user bot upload logic |
| **visual/** | Board rendering and UI updates |
| **tournament/** | Match control (start, step, auto, stop) |
| **index.html** | UI layout + module wiring |

---

## 🧠 CTOR Game Rules (Summary)

- Board: **10×10**, toroidal (wrap‑around edges)
- Each turn a player may perform:
  - up to **2 PUT** actions
  - up to **2 MOVE** actions
- After every action, **auto‑eat** is applied:
  - if a piece is surrounded by ≥5 enemy neighbors in its 3×3 area, it flips
- A turn ends when both PUT and MOVE limits are reached
- The game ends when **both players have no legal moves**
- Winner = player with the most pieces

---

## 🤖 Adding Your Own Bot

You can upload a custom bot via the UI.  
The uploaded file must contain a function:

```javascript
function bot(board, player) {
  // board: 10×10 array
  // player: 'R' or 'B'
  return { type: "...", ... };
}
Example: simplest possible bot
javascript
function bot(board, player) {
  // always place on the first empty cell
  for (let i = 0; i < 10; i++)
    for (let j = 0; j < 10; j++)
      if (board[i][j] === '.')
        return { type: "put", i, j };
}
After uploading, the bot appears in:

the bot selection dropdowns (Bot R / Bot B)

the “Available Bots” table

🧩 Built‑In Bots
Located in bots/builtins.js.

random
Chooses a random legal move.

greedy
Simulates each legal move and chooses the one that maximizes the player's piece count.

🎮 Running a Match
In the UI:

Select bots for R and B

Click Start Match

Use:

Next Move — one bot action

Auto Play — continuous play

Stop — pause auto‑play

🛠 Extending the Platform
Add a new built‑in bot
Create:

Code
bots/myBot.js
Export your bot:

javascript
export function myBot(board, player) { ... }
Register it in builtins.js:

javascript
import { myBot } from "./myBot.js";
Bots.myBot = myBot;
botSources.myBot = "built-in";
Add a new tournament mode
Create a new runner:

Code
tournament/myRunner.js
Follow the structure of MatchRunner.

Customize visualization
Modify:

Code
visual/boardView.js
🧑‍💻 Developer Notes
Uses native ES modules (type="module")

No build tools required

Engine is UI‑agnostic and can run in Node.js  with small adjustments

Ideal for:

AI competitions

ML agent training

strategy research

teaching game AI

📜 License
MIT License — free to use, modify, and distribute.

✨ Credits
Modular architecture designed collaboratively by:

Vladimir (CTOR GAME Inc) — project lead, architecture, integration

Copilot — refactoring, modularization, documentation

Contributions are welcome!
