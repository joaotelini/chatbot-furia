export function contactCommand(bot) {
  bot.onText(/\/contato/, (msg) => {
    const chatId = msg.chat.id;
    sendContact(bot, chatId);
  });
}

export function sendContact(bot, chatId) {
  const contactMessage = `
  Se quiser entrar em contato com o criador: 
  Twitter/x: https://x.com/telinidev
  GitHub: https://github.com/joaotelini
  LinkedIn: https://www.linkedin.com/in/joaoptelini/
  
  Se quiser entrar em contato com a FURIA:
  Twitter/x: https://x.com/FURIA
  Instagram: https://www.instagram.com/furiagg
  `;

  bot.sendMessage(chatId, contactMessage, { parse_mode: "Markdown" });
}
