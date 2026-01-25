/* ============================================================
   MATCH RUNNER MODULE
   Управляет:
   - start
   - step
   - auto-play
   - stop
   ============================================================ */

import { CTORGame } from "../core/game.js";
import { Bots } from "../bots/builtins.js";
import { createBoardTable, updateBoardView } from "../visual/boardView.js";

class MatchRunner {
  constructor() {
    this.game = new CTORGame();
    this.autoTimer = null;
  }

  /**
   * Запуск новой игры
   */
  start() {
    this.game = new CTORGame();
    createBoardTable(this.game);
    updateBoardView(this.game);
  }

  /**
   * Один шаг игры (один ход бота)
   */
  step() {
    if (this.game.finished) {
      this.stop();
      updateBoardView(this.game);
      return;
    }

    const player = this.game.current;

    const botName = (player === "R")
      ? document.getElementById("botR").value
      : document.getElementById("botB").value;

    const move = Bots[botName](this.game.cloneBoard(), player);

    if (!move) {
      this.game.endTurn();
      updateBoardView(this.game);
      return;
    }

    this.game.applyMove(move);
    updateBoardView(this.game);
  }

  /**
   * Автоматическая игра с задержкой
   */
  autoPlay() {
    if (this.autoTimer) return;

    const delay = parseFloat(document.getElementById("delayInput").value) * 1000;
    const ms = isNaN(delay) ? 500 : delay;

    this.autoTimer = setInterval(() => this.step(), ms);
  }

  /**
   * Остановка авто-игры
   */
  stop() {
    clearInterval(this.autoTimer);
    this.autoTimer = null;
  }
}

export { MatchRunner };
