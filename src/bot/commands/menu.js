export function menuCommand(bot) {
  bot.onText(/\/menu/, async (msg) => {
    const chatId = msg.chat.id;
    await bot.sendMessage(chatId, "Aqui estão os comandos disponíveis:");
    await bot.sendMessage(
      chatId,
      "/start - Iniciar o bot\n/menu - Ver os comandos disponíveis\n/jogos - Ver os resultado de próximos jogos da Pantera\n/noticias - Ver as ultimas noticías\n/historia - Ver e conhecer de perto a história da organização\n/ranking - Ver a posição da FURIA no ranking da HLTV\n/ajuda - Ver ajuda sobre o bot\n/contato - Falar com o desenvolvedor"
    );
  });
}
