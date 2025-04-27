import { getNextMatch } from "../services/apiFuria.js";

export async function nextMatchCommand(bot) {
  bot.onText(/\/proximojogo/, async (msg) => {
    const chatId = msg.chat.id;
    await sendNextMatch(bot, chatId);
  });
}

export async function sendNextMatch(bot, chatId) {
  const matchData = await getNextMatch();

  if (!matchData || matchData.length === 0) {
    return bot.sendMessage(
      chatId,
      "Não foi possível obter os dados do próximo jogo. 😕"
    );
  }

  const message = matchData
    .map((match) => {
      // Se nao houver jogos
      if (match.info) {
        return `🗓️ *Próximo Jogo da FURIA* 🐾\n${match.info}`;
      }
      // Caso a API passe a retornar jogos no futuro, você pode adicionar formatação aqui
      return;
      `🗓️ *Próximo Jogo da FURIA* 🐾\n` +
        `🆚 ${match.team1} vs ${match.team2}\n` +
        `📅 Data: ${match.date}\n` +
        `⏱️ Hora: ${match.time}\n` +
        `🏆 Campeonato: ${match.camp}`;
    })
    .join("\n\n");

  bot.sendMessage(chatId, message, { parse_mode: "Markdown" });
}
