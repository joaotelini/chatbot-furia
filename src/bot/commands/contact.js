export function contactCommand(bot) {
  bot.onText(/\/contato/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(
      chatId,
      "Se quiser entrar em contato com o criador: \nTwitter/x: https://x.com/telinidev\nGitHub: https://github.com/joaotelini\nLinkedIn: https://www.linkedin.com/in/joaoptelini/\n\nSe quiser entrar em contato com a FURIA:\nTwitter/x: https://x.com/FURIA\nInstagram: https://www.instagram.com/furiagg"
    );
  });
}
