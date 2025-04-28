import "dotenv/config";
import TelegramBot from "node-telegram-bot-api";

import { menuCommand } from "./bot/commands/menu.js";
import { contactCommand } from "./bot/commands/contact.js";
import { newsCommand } from "./bot/commands/news.js";
import { rankingCommand } from "./bot/commands/ranking.js";
import { startCommand } from "./bot/commands/start.js";
import { callbackHandler } from "./bot/handlers/callbackHandler.js";
import { helpCommand } from "./bot/commands/help.js";
import { historyCommand } from "./bot/commands/history.js";
import { nextMatchCommand } from "./bot/commands/nextmatch.js";
import { resultsCommands } from "./bot/commands/results.js";
import { rosterCommand } from "./bot/commands/roster.js";
import { playerCommand } from "./bot/commands/player.js";

const startBot = () => {
  const token = process.env.TELEGRAM_TOKEN;
  const bot = new TelegramBot(token, { polling: true });

  helpCommand(bot);
  rosterCommand(bot);
  nextMatchCommand(bot);
  resultsCommands(bot);
  playerCommand(bot);
  contactCommand(bot);
  menuCommand(bot);
  startCommand(bot);
  rankingCommand(bot);
  historyCommand(bot);
  newsCommand(bot);
  callbackHandler(bot);

  console.log("Bot da FURIA iniciado! 🐾");
};

startBot();
