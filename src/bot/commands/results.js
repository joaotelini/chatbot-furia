import { getResults } from "../services/apiFuria.js";

export async function resultsCommands(bot) {
  bot.onText(/\/resultados/, async (msg) => {
    const chatId = msg.chat.id;
    await sendResults(bot, chatId);
  });
}

export async function sendResults(bot, chatId) {
  const matchData = await getResults();

  if (!matchData || matchData.length === 0) {
    return bot.sendMessage(
      chatId,
      "Não foi possível obter os dados das partidas. 😕"
    );
  }

  const message = matchData
    .map((match, index) => {
      // Formata os mapas dentro de bo3
      const mapsFormatted = match.bo3[0].map
        .map((map) => {
          const resultEmoji = map.result === "win" ? "✅" : "❌";
          return `🗺️ ${map.name}: ${resultEmoji} ${map.score[0]}-${map.score[1]} [ 📊 Link do Mapa](${map.stats})`;
        })
        .join("\n");

      return (
        `🗓️ *Partida ${index + 1} - FURIA vs ${match.against}* 🐾\n` +
        `📅 Data: ${match.date}\n` +
        `🏆 Evento: ${match.event}\n` +
        `📜 Mapas:\n${mapsFormatted}`
      );
    })
    .join("\n\n");

  bot.sendMessage(chatId, message, { parse_mode: "Markdown" });
}
