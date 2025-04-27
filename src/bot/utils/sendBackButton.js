export function sendBackButton(bot, chatId) {
  const backButton = {
    reply_markup: {
      inline_keyboard: [
        [{ text: "🔙 Voltar ao Menu", callback_data: "voltar_menu" }],
      ],
    },
    parse_mode: "Markdown",
  };

  bot.sendMessage(
    chatId,
    "Clique no botão abaixo para voltar ao menu:",
    backButton
  );
}