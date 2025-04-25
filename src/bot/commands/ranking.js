export function rankingCommand(bot) {
  bot.onText(/\/ranking/, (msg) => {
    const chatId = msg.chat.id;
    sendRanking(bot, chatId);
  });
}

export function sendRanking(bot, chatId) {
  const message = `
  🔥 *FURIA em Busca do Topo do Ranking!* 🔥
  
  🏆 *Posição Atual*: #16
  
  Ranking atualizado em 21/04/2025
  
  Fique ligado para mais atualizações no ranking! 🔥
  `;

  bot.sendMessage(chatId, message, { parse_mode: "Markdown" });
}
