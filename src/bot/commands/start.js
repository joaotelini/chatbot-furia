export const startCommand = (bot) => {
  bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(
      chatId,
      "Fala, torcedor da FURIA! 🐾\nDigite /menu para ver o que posso te mostrar!"
    );
  });
};
