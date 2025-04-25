export function menuCommand(bot) {
  bot.onText(/\/menu/, async (msg) => {
    const chatId = msg.chat.id;
    sendMenu(bot, chatId);
  });
}

export function sendMenu(bot, chatId) {
  const menuMessage = `
      🔥 *Bem-vindo ao menu da Pantera!* 🔥
      Escolha uma das opções abaixo para explorar tudo sobre a FURIA Esports:
    `;

  const keyboard = {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "📅 Próximos Jogos", callback_data: "jogos" },
          { text: "📊 Resultados Recentes", callback_data: "resultados" },
        ],
        [
          { text: "👥 Lineup Atual", callback_data: "roster" },
          { text: "🎯 Jogadores", callback_data: "players" },
        ],
        [
          { text: "📰 Últimas Notícias", callback_data: "noticias" },
          { text: "📖 História da FURIA", callback_data: "historia" },
        ],
        [{ text: "🏆 Ranking HLTV", callback_data: "ranking" }],
        [
          { text: "❓ Ajuda", callback_data: "ajuda" },
          { text: "📨 Contato", callback_data: "contato" },
        ],
      ],
    },
    parse_mode: "Markdown",
  };

  bot.sendMessage(chatId, menuMessage, keyboard);
}
