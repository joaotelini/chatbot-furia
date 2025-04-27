export async function helpCommand(bot) {
  bot.onText(/\/ajuda/, (msg) => {
    const chatId = msg.chat.id;
    sendHelp(bot, chatId);
  });
}

export async function sendHelp(bot, chatId) {
  const helpMessage = `
  🔥 *Ajuda do Bot da FURIA!* 🔥
  
  Olá! Aqui estão algumas dicas para você aproveitar ao máximo o bot da FURIA:
  
  1️⃣ *Menu Principal*: Use o comando /menu para acessar o menu principal e explorar todas as opções disponíveis.
  
  2️⃣ *Notícias*: Fique por dentro das últimas novidades sobre a FURIA com o comando /noticias.
  
  3️⃣ *Jogos e Resultados*: Consulte os próximos jogos e resultados recentes usando os comandos /jogos e /resultados.
  
  4️⃣ *Lineup Atual*: Conheça a lineup atual da FURIA com o comando /roster.
  
  5️⃣ *Ranking HLTV*: Confira a posição atual da FURIA no ranking HLTV com o comando /ranking.
  
  Se precisar de mais ajuda, entre em contato com nossa equipe de suporte! Estamos aqui para ajudar! 💪
  
  Boa sorte e divirta-se! 🔥
`;

  const keyboard = {
    reply_markup: {
      inline_keyboard: [
        [{ text: "🔙 Voltar ao Menu", callback_data: "voltar_menu" }],
      ],
    },
    parse_mode: "Markdown",
  };

  bot.sendMessage(chatId, helpMessage, keyboard);
}
