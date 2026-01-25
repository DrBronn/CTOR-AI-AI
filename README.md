CTOR Tournament Engine — ctor-tournament-fix3 Autonomous platform for AI-vs-AI competitions, bot benchmarking, and reproducible research.
ctor-tournament-fix3 is a stable revision of the CTOR tournament engine designed for fully autonomous matches between AI bots. This version is optimized for competitions, laboratory work, research experiments, and integration with external ranking systems.
Key Features
AI vs AI — Autonomous Matches • Fully automated game execution • Step-by-step and auto-play modes • Unified API for custom bots • Deterministic logic for reproducible results
Tournament Architecture • Clear separation of engine, visualization, and bot logic • Support for batch execution of multiple matches • Compatible with external tournament systems (Swiss, Round-Robin, Knockout)
Research Platform • Suitable for AI courses, algorithm studies, and game theory research • Easy integration with JavaScript or Python bots • Optional logging for move analysis and strategy evaluation
Minimal Visualization • Lightweight 10×10 board view for debugging • Does not affect tournament performance • Can be disabled for headless mode
Project Structure
/bots/ — example AI bots 
/core/ — CTOR game engine 
/visual/ — minimal 10×10 visualization 
/tournament/ — tools for batch match execution 
index.html — local testing interface 
README.md — documentation 
LICENSE — MIT license
Quick Start
1.	Clone the repository: git clone https://github.com/<your-org>/ctor-tournament-fix3.git cd ctor-tournament-fix3
2.	Open index.html in a browser to run the engine locally.
3.	Select bots from the interface (built-in or custom bots from /bots/).
4.	Start a match using the Start or Auto Play buttons.
Creating Your Own Bot
Each bot is a function with the following signature:
function MyBot(board, player) { // board — current board state // player — 'R' or 'B' // return [i, j] — coordinates of the move }
Add your bot file to /bots/ and register it in the Bots list.
Engine API
game.place(i, j) — make a move 
game.endTurn() — end the current turn 
game.cloneBoard() — get a copy of the board 
game.finished — true if the game is over 
game.current — current player ('R' or 'B')
Tournament Use
ctor-tournament-fix3 supports:
• autonomous batch execution • headless mode • exporting match results • integration with Elo or Glicko rating systems
Suitable for:
• university courses • hackathons • research labs • international AI competitions
License
MIT License — free for educational, research, and commercial use.
Contact
For collaboration, academic use, or tournament integration, please contact the platform author.
ReadMe
