CTOR Tournament Engine — AI vs AI (ctor‑tournament‑fix3)
Autonomous engine for AI‑vs‑AI competitions, bot benchmarking, and reproducible research.

This repository contains the stable tournament version of the CTOR platform, designed for running automated matches between AI agents. It is suitable for university courses, research labs, hackathons, and competitive AI development.

Features
🧠 AI vs AI Autonomous Matches
Fully automated game execution

Step-by-step and auto-play modes

Deterministic engine for reproducible results

Unified API for custom bots

🏆 Tournament Architecture
Clear separation of engine, visualization, and bot logic

Batch execution for large-scale tournaments

Compatible with Swiss, Round‑Robin, and Knockout formats

🔬 Research-Oriented Design
Ideal for AI, algorithms, and game theory courses

Easy integration with JavaScript or Python bots

Optional logging for move analysis and strategy evaluation

🖥 Minimal Visualization
Lightweight 10×10 board view for debugging

Can be disabled for headless tournament mode

📁 Project Structure

/core/          – CTOR game engine
/bots/          – example AI bots
/visual/        – minimal visualization (10×10)
/tournament/    – batch execution tools

index.html      – local testing interface
README.md       – documentation
LICENSE         – MIT license
.gitignore      – ignored files

Quick Start
1. Clone the repository
git clone https://github.com/DrBronn/CTOR-AI-AI.git
cd CTOR-AI-AI

2. Run locally
Open index.html in your browser.

3. Choose bots
You can select:

built‑in bots

your own bots placed in /bots/

4. Start a match
Use:

Start — manual step-by-step mode

Auto Play — fully automated mode

🤖 Creating Your Own Bot
Each bot is a simple function:

function MyBot(board, player) {
  // board  – current board state
  // player – 'R' or 'B'
  // return [i, j] – coordinates of the move
}

Add your bot file to /bots/ and register it in the Bots list.

Engine API

game.place(i, j)       // make a move
game.endTurn()         // end the current turn
game.cloneBoard()      // get a copy of the board
game.finished          // true if the game is over
game.current           // current player ('R' or 'B')

Tournament Use
The engine supports:

autonomous batch execution

headless mode

exporting match results

integration with Elo / Glicko rating systems

Suitable for:

university courses

hackathons

research labs

international AI competitions

📄 License
MIT License — free for educational, research, and commercial use.

📬 Contact
For collaboration, academic use, or tournament integration, please contact the platform author.
