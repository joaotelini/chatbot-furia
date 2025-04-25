export function newsCommand(bot) {
  bot.onText(/\/noticias/, (msg) => {
    const chatId = msg.chat.id;
    sendNews(bot, chatId);
  });
}

export function sendNews(bot, chatId) {
  const message = `
"📰 *FURIA confirma adição de YEKINDAR!*"

A *FURIA* anunciou nesta terça-feira (22) a chegada de *Mareks "YEKINDAR" Gaļinskis*! 🇱🇻🔥

O experiente atleta de *25 anos* se junta ao time como *stand-in* até o fim da primeira metade da temporada. Ele participará dos seguintes campeonatos:

🏆 *PGL Astana 2025*  
🏆 *IEM Dallas 2025*  
🏆 *BLAST.tv Austin Major 2025*

💬 *Sobre YEKINDAR:*  
Revelado pela *Virtus.pro* ao lado de *Jame*, o jogador estava no banco da *Team Liquid* desde dezembro de 2024, após a chegada de *Guy "Nertz" Iluz*.

Ele substituirá *Felipe "skullz" Medeiros*, movido ao banco no mesmo dia, reforçando a internacionalização do time brasileiro.

👥 *Lineup Atualizada da FURIA:*

- 🇧🇷 Gabriel "FalleN" Toledo  
- 🇧🇷 Kayke "KSCERATO" Cerato  
- 🇧🇷 Yuri "yuurih" Santos  
- 🇱🇻 Mareks "YEKINDAR" Gaļinskis  
- 🇷🇺 Danil "molodoy" Golubenko

🎯 *Coach:* Sidnei "sidde" Macedo
`;

  bot.sendMessage(chatId, message, { parse_mode: "Markdown" });
}
