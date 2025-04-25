import { sendNews } from "../commands/news.js";
import { sendRanking } from "../commands/ranking.js";
import { menuCommand, sendMenu } from "../commands/menu.js";

export function callbackHandler(bot) {
  bot.on("callback_query", async (callbackQuery) => {
    const chatId = callbackQuery.message.chat.id;
    const callbackData = callbackQuery.data;

    // Responder conforme a escolha do usuário
    switch (callbackData) {
      case "voltar_menu":
        await bot.sendMessage(chatId, "Voltando ao menu...");
        sendMenu(bot, chatId);
        break;
      case "jogos":
        await bot.sendMessage(
          chatId,
          "Aqui estão os próximos jogos da FURIA..."
        );
        break;
      case "resultados":
        await bot.sendMessage(
          chatId,
          "Aqui estão os resultados recentes da FURIA..."
        );
        break;
      case "roster":
        await bot.sendMessage(chatId, "Aqui está a lineup atual da FURIA...");
        break;
      case "players":
        await bot.sendMessage(
          chatId,
          "Aqui está a lista dos jogadores da FURIA..."
        );
        break;
      case "noticias":
        await bot.sendMessage(
          chatId,
          "Aqui estão as últimas notícias da FURIA..."
        );
        sendNews(bot, chatId);

        const backButton = {
          reply_markup: {
            inline_keyboard: [
              [{ text: "🔙 Voltar ao Menu", callback_data: "voltar_menu" }],
            ],
          },
          parse_mode: "Markdown",
        };

        await bot.sendMessage(
          chatId,
          "Clique no botão abaixo para voltar ao menu:",
          backButton
        );
        break;
      case "historia":
        await bot.sendMessage(chatId, "Aqui está a história da FURIA...");
        break;
      case "ranking":
        await bot.sendMessage(
          chatId,
          "Aqui está o ranking atual da FURIA na HLTV..."
        );
        sendRanking(bot, chatId);
        break;
      case "ajuda":
        await bot.sendMessage(chatId, "Aqui está como usar o bot...");
        break;
      case "contato":
        await bot.sendMessage(
          chatId,
          "Aqui estão as informações de contato..."
        );
        break;
      default:
        await bot.sendMessage(chatId, "Escolha uma opção válida.");
    }

    // Acknowledge the callback query (fechar o 'loading' do botão)
    await bot.answerCallbackQuery(callbackQuery.id);
  });
}
