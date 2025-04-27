import { sendNews } from "../commands/news.js";
import { sendRanking } from "../commands/ranking.js";
import { sendMenu } from "../commands/menu.js";
import { sendBackButton } from "../utils/sendBackButton.js";
import { sendHelp } from "../commands/help.js";
import { sendHistory } from "../commands/history.js";
import { sendContact } from "../commands/contact.js";
import { sendNextMatch } from "../commands/nextmatch.js";

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
        sendNextMatch(bot, chatId);
        sendBackButton(bot, chatId);
        break;

      case "resultados":
        await bot.sendMessage(
          chatId,
          "Aqui estão os resultados recentes da FURIA..."
        );

        sendBackButton(bot, chatId);
        break;

      case "roster":
        await bot.sendMessage(chatId, "Aqui está a lineup atual da FURIA...");

        sendBackButton(bot, chatId);
        break;

      case "players":
        await bot.sendMessage(
          chatId,
          "Aqui está a lista dos jogadores da FURIA..."
        );

        sendBackButton(bot, chatId);
        break;

      case "noticias":
        await bot.sendMessage(
          chatId,
          "Aqui estão as últimas notícias da FURIA..."
        );
        sendNews(bot, chatId);

        sendBackButton(bot, chatId);

        break;

      case "historia":
        await bot.sendMessage(chatId, "Aqui está a história da FURIA...");

        sendHistory(bot, chatId);

        sendBackButton(bot, chatId);

        break;

      case "ranking":
        await bot.sendMessage(
          chatId,
          "Aqui está o ranking atual da FURIA na HLTV..."
        );
        sendRanking(bot, chatId);

        sendBackButton(bot, chatId);

        break;

      case "ajuda":
        await bot.sendMessage(chatId, "Aqui está como usar o bot...");
        sendHelp(bot, chatId);

        sendBackButton(bot, chatId);

        break;

      case "contato":
        await bot.sendMessage(
          chatId,
          "Aqui estão as informações de contato..."
        );
        sendContact(bot, chatId);

        sendBackButton(bot, chatId);

        break;

      default:
        await bot.sendMessage(chatId, "Escolha uma opção válida.");
    }

    // Acknowledge the callback query (fechar o 'loading' do botão)
    await bot.answerCallbackQuery(callbackQuery.id);
  });
}
