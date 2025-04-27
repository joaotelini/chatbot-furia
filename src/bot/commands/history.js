export async function historyCommand(bot) {
  bot.onText(/\/historia/, (msg) => {
    const chatId = msg.chat.id;
    sendHistory(bot, chatId);
  });
}

export async function sendHistory(bot, chatId) {
  const message = `
🐾 FURIA: Uma História de Sucesso nos Esports e Além! ⚡

Fundada em agosto de 2017 em Uberlândia, Minas Gerais, a FURIA nasceu da visão do empresário Jaime Pádua, junto com os craques André Akkari (pôquer pro! ♠️) e Cris Guedes. Juntos, eles criaram um projeto épico para dominar os esports! 🚀 A FURIA cresceu e conquistou marcas históricas entre times brasileiros no cenário mundial. 🌎🏆

🏢 A organização já tinha bases em São Paulo e nos EUA, mas em 2020 subiu de nível com uma megaestrutura na capital paulista para abrigar seus times e staff. 💪 Em 2023, abriu uma sede em Mellieħa, Malta, para arrasar nos torneios europeus! 🇲🇹🎮

⚽ Em 2024, a FURIA entrou de cabeça no futebol 7, estreando na Kings World Cup, liga criada por Gerard Piqué e Ibai Llanos. 🥅🔥

🏎️🚗 Já em 2025, veio com tudo: anunciou um time oficial de futebol 7, com Cris Guedes e Neymar na liderança, e ainda marcou presença na Porsche Cup Brasil, com a equipe RedRam e os pilotos Caio Castro e Matheus Comparatto acelerando! 🏁✨

FURIA: do esports ao esporte tradicional, sempre representando! 🐾🔥
  `;

  bot.sendMessage(chatId, message);
}
