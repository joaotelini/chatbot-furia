import { getPlayer } from "../services/apiFuria.js";

export async function playerCommand(bot) {
  bot.onText(/\/player/, async (msg) => {
    const chatId = msg.chat.id;
    await sendPlayerList(bot, chatId);
  });
}

export async function sendPlayerList(bot, chatId) {
  const players = ["KSCERATO", "FalleN", "yuurih", "YEKINDAR", "molodoy"];

  const message = "Escolha um jogador para ver os detalhes:";
  const keyboard = {
    inline_keyboard: [
      ...players.map((nick) => [
        {
          text: nick,
          callback_data: `player_${nick}`,
        },
      ]),
    ],
  };

  bot.sendMessage(chatId, message, {
    reply_markup: keyboard,
  });
}

export async function sendPlayer(bot, chatId, nick) {
  const playerData = await getPlayer(nick);

  if (!playerData || !Array.isArray(playerData) || playerData.length === 0) {
    console.log(
      `Erro: Nenhum jogador válido encontrado para nick ${nick}`,
      playerData
    );
    return bot.sendMessage(chatId, "Jogador não encontrado. 😕");
  }

  const player = playerData[0];

  const fallbackMessage = `
🎮 Nick: ${player.nick}
👤 Nome: ${player.fullName}
🎂 Idade: ${player.age} anos
🌍 País: ${player.nationality}
🔫 Função: ${player.role}

🏆 Prêmios Individuais:
${
  player.achievements.individualAwards
    ? player.achievements.individualAwards
        .map((achievement) => `🏅 ${achievement}`)
        .join("\n")
    : "Nenhum prêmio individual."
}

🌟 MVPs:
${
  player.achievements.mvps
    ? player.achievements.mvps.map((mvp) => `🌟 ${mvp}`).join("\n")
    : "Nenhum MVP."
}

🥇 Títulos:
${
  player.achievements.titles
    ? player.achievements.titles
        .map((title) => `🏆 ${title.name} (${String(title.year)})`)
        .join("\n")
    : "Nenhum título."
}

💰 Prêmios em Dinheiro: ${player.achievements.prizemoney}

🔗 Social:
${player.socials.instagram ? `- ${player.socials.instagram}` : ""}
${player.socials.steam ? `- ${player.socials.steam}` : ""}
${player.socials.twitter ? `- ${player.socials.twitter}` : ""}
`.trim();
  await bot.sendMessage(chatId, fallbackMessage);
}
