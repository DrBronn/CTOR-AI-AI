Example Bots for CTOR GAME — Student Starter Kit
This folder contains several example bots that demonstrate different levels of strategy for CTOR GAME.
Students can use these bots to:

understand how CTOR bots work

test their own bots against simple opponents

learn basic AI decision‑making patterns

explore different strategic approaches

Each bot is self‑contained and ready to upload into the CTOR GAME platform.

📁 Included Example Bots
1. myBot_template.js
🟦 Beginner-friendly template with full comments

This is the recommended starting point for students.
It includes:

a complete explanation of the bot API

detailed comments

a simple baseline strategy

instructions on where to add your own logic

suggestions for possible strategies

Use this file when writing your first custom bot.

2. randomBot.js
🎲 Chooses a random legal move

This bot:

collects all empty cells

selects one at random

plays unpredictably

Useful for:

testing stability of your bot

ensuring your bot handles unexpected moves

comparing against a non-deterministic opponent

3. greedyBot.js
🧮 Chooses the move with the highest capture score

This bot evaluates every legal move and selects the one that:

captures the most opponent pieces

maximizes immediate gain

It demonstrates:

simple evaluation functions

greedy heuristics

how to score moves

Note:
If your platform includes a helper function like evaluateMove, this bot will use it.
Otherwise, students can implement their own scoring logic.

🎓 How to Use These Bots
Open the CTOR GAME platform in your browser.

Go to Upload Custom Bot.

Select any .js file from this folder.

The bot will appear in the Available Bots list.

Choose it as Bot R or Bot B.

Start a match and observe how it plays.

🛠 How to Create Your Own Bot
The recommended workflow:

Copy myBot_template.js.

Rename it (e.g., studentBot.js).

Replace the strategy section with your own logic.

Upload your bot to the platform.

Test it against:

built‑in bots

randomBot

greedyBot

other students’ bots

🧠 Suggested Strategies for Students
Random strategy — baseline behavior

Greedy strategy — maximize immediate gain

Defensive strategy — block opponent threats

Positional heuristics — prefer strong board positions

Pattern recognition — detect tactical shapes

Minimax search — advanced AI decision-making

Hybrid strategies — combine multiple heuristics

✔ Purpose of This Folder
The examples/ directory is designed to:

help students get started quickly

provide reference implementations

demonstrate different AI styles

support classroom teaching and competitions

encourage experimentation and creativity
