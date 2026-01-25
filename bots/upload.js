/* ============================================================
   USER BOT UPLOAD MODULE
   ============================================================ */

import { Bots, botSources } from "./builtins.js";

/**
 * Загружает пользовательского бота из .js файла.
 * Ожидается, что файл содержит функцию:
 * 
 *   function bot(board, player) { ... }
 */
function setupBotUpload(addBotToSelect, refreshBotTable) {
  const uploadBtn = document.getElementById("uploadBtn");
  const fileInput = document.getElementById("botUpload");

  uploadBtn.onclick = () => {
    const file = fileInput.files[0];
    if (!file) return;

    const name = file.name.replace(".js", "");

    const reader = new FileReader();
    reader.onload = (e) => {
      const code = e.target.result;

      // Создаём функцию-бота
      Bots[name] = new Function(
        "board", "player",
        code + "; return bot(board, player);"
      );

      botSources[name] = "uploaded (" + new Date().toLocaleTimeString() + ")";

      addBotToSelect(name);
      refreshBotTable();
    };

    reader.readAsText(file);
  };
}

export { setupBotUpload };
