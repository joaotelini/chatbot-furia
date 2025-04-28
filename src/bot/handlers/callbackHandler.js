import { sendNews } from "../commands/news.js";
import { sendRanking } from "../commands/ranking.js";
import { sendMenu } from "../commands/menu.js";
import { sendBackButton } from "../utils/sendBackButton.js";
import { sendHelp } from "../commands/help.js";
import { sendHistory } from "../commands/history.js";
import { sendContact } from "../commands/contact.js";
import { sendNextMatch } from "../commands/nextmatch.js";
import { sendResults } from "../commands/results.js";
import { sendRoster } from "../commands/roster.js";
import { sendPlayer, sendPlayerList } from "../commands/player.js";

export function callbackHandler(bot) {
  bot.on("callback_query", async (callbackQuery) => {
    const chatId = callbackQuery.message.chat.id;
    const callbackData = callbackQuery.data;

    console.log(`Callback recebido: ${callbackData}`);

    // Tratar callbacks de jogadores
    if (callbackData.startsWith("player_")) {
      const nick = callbackData.replace("player_", "");
      await bot.sendMessage(chatId, "Buscando detalhes do jogador...");
      await sendPlayer(bot, chatId, nick);
      sendBackButton(bot, chatId);
      return;
    }

    switch (callbackData) {
      case "voltar_menu":
        await bot.sendMessage(chatId, "Voltando ao menu...");
        await sendMenu(bot, chatId);
        break;

      case "jogos":
        await bot.sendMessage(
          chatId,
          "Aqui estão os próximos jogos da FURIA..."
        );
        await sendNextMatch(bot, chatId);
        sendBackButton(bot, chatId);
        break;

      case "resultados":
        bot.sendMessage(
          chatId,
          "Aqui estão os resultados recentes da FURIA..."
        );
        await sendResults(bot, chatId);
        sendBackButton(bot, chatId);
        break;

      case "roster":
        await bot.sendMessage(chatId, "Aqui está a lineup atual da FURIA...");
        await sendRoster(bot, chatId);
        sendBackButton(bot, chatId);
        break;

      case "players":
        await bot.sendMessage(
          chatId,
          "Aqui está a lista dos jogadores da FURIA..."
        );
        await sendPlayerList(bot, chatId);
        sendBackButton(bot, chatId);
        break;

      case "noticias":
        await bot.sendMessage(
          chatId,
          "Aqui estão as últimas notícias da FURIA..."
        );
        await sendNews(bot, chatId);
        sendBackButton(bot, chatId);
        break;

      case "historia":
        await bot.sendMessage(chatId, "Aqui está a história da FURIA...");
        await sendHistory(bot, chatId);
        sendBackButton(bot, chatId);
        break;

      case "ranking":
        await bot.sendMessage(
          chatId,
          "Aqui está o ranking atual da FURIA na HLTV..."
        );
        await sendRanking(bot, chatId);
        sendBackButton(bot, chatId);
        break;

      case "ajuda":
        await bot.sendMessage(chatId, "Aqui está como usar o bot...");
        await sendHelp(bot, chatId);
        sendBackButton(bot, chatId);
        break;

      case "contato":
        await bot.sendMessage(
          chatId,
          "Aqui estão as informações de contato..."
        );
        await sendContact(bot, chatId);
        sendBackButton(bot, chatId);
        break;

      default:
        await bot.sendMessage(chatId, "Escolha uma opção válida.");
        break;
    }
  });
}
