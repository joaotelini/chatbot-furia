export function startCommand(bot) {
  bot.onText(/\/start/, async (msg) => {
    const chatId = msg.chat.id;
    await bot.sendMessage(
      chatId,
      "Fala, torcedor da FURIA! 🐾\nDigite /menu para ver o que posso te mostrar!"
    );
    await bot.sendMessage(
      chatId,
      "Este bot foi desenvolvido por x.com/telinidev para o teste técnico da FURIA 😉."
    );
  });
}
