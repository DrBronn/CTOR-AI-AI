CTOR GAME — Student Assignment Guide
Instructions for Completing All Three Tasks
This document describes the three required assignments for working with the CTOR GAME AI vs AI Platform.
Each student must complete all three tasks and submit the required files.

📘 Overview of the Three Tasks
Task	Description	Deliverable
1	Download and test the CTOR GAME platform locally	Bug report (if bugs found)
2	Design a heuristic algorithm and generate an AI‑written bot	Bot file named using the required format
3	Implement your own bot manually in JavaScript	Bot file named using the required format
🧩 Task 1 — Download and Test the Platform
✔ What you must do
Go to the CTOR GAME GitHub repository.

Download the platform (the entire repository or just index.html).

Run it locally on your computer:

open index.html in any modern browser

test built‑in bots

test uploading example bots

verify that the board, buttons, and match runner work correctly

✔ If you find bugs
Prepare a bug report that includes:

a clear description of the issue

steps to reproduce

screenshots (optional but helpful)

your browser and OS

any error messages from the browser console

Send the report to the instructors.

If no bugs are found, simply state:
“No bugs detected during testing.”

🤖 Task 2 — Create an AI‑Generated Bot Using a Prompt
In this task, you must:

Design your own heuristic algorithm for playing CTOR GAME.

Describe this algorithm as a prompt for an AI system (e.g., “Write a CTOR bot that…”)

Use the prompt to generate a bot in JavaScript.

Ensure the bot follows the CTOR GAME API format.

Test the bot locally using the platform.

✔ Naming requirements
Your bot file must follow this format:

Code
LastName_FirstName_AlgorithmName_Version_AI.js
Where:

AI at the end means the bot was generated using an AI prompt

Version example: v1, v2, v1.1

✔ Example filename
Code
Ivanov_Petr_GreedyHeuristic_v1_AI.js
✔ What to submit
The AI‑generated bot file

The prompt you used to generate it

Both must be sent to the instructors.

🛠 Task 3 — Implement Your Own Bot Manually (No AI Tools)
In this task, you must:

Implement your own heuristic or algorithmic strategy by writing JavaScript manually.

Follow the CTOR GAME bot API exactly.

Test your bot locally using the platform.

✔ Naming requirements
Your bot file must follow this format:

Code
LastName_FirstName_AlgorithmName_Version_P.js
Where:

P at the end means “Programmed manually” (no AI assistance)

✔ Example filename
Code
Ivanov_Petr_BlockingStrategy_v2_P.js
✔ What to submit
The manually written bot file

A short description of your algorithm (3–10 sentences)

📤 Submission Requirements
Each student must submit:

✔ From Task 1:
Bug report (if bugs found)

✔ From Task 2:
AI‑generated bot file

The prompt used to generate it

✔ From Task 3:
Manually written bot file

Short algorithm description

Send all files to the instructors.
After review, your bots will be added to the official CTOR GAME repository.

🧠 Tips for Success
Test your bots against built‑in bots and example bots.

Start with simple heuristics and improve them iteratively.

Make sure your bot always returns a legal move.

Use the myBot_template.js file as a reference.

Keep your code clean and readable.
