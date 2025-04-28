import { getRoster } from "../services/apiFuria.js";

export function rosterCommand(bot) {
  bot.onText(/\/roster/, async (msg) => {
    const chatId = msg.chat.id;
    await sendRoster(bot, chatId);
  });
}

export async function sendRoster(bot, chatId) {
  const rosterData = await getRoster();

  if (!rosterData || rosterData.length === 0) {
    return bot.sendMessage(chatId, "Erro ao receber os dados da API. 😕");
  }

  const message = rosterData
    .map((player, index) => {
      return `
👤 *Jogador: ${player.player}*
🎂 Idade: ${player.age} anos
🌍 País: ${player.country}
`;
    })
    .join("\n");

  const keyboard = {
    inline_keyboard: rosterData.map((player) => [
      {
        text: player.player,
        callback_data: `player_${player.player}`,
      },
    ]),
  };

  bot.sendMessage(chatId, message, {
    parse_mode: "Markdown",
    reply_markup: keyboard,
  });
}
