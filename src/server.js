import "dotenv/config";
import TelegramBot from "node-telegram-bot-api";

import { menuCommand } from "./bot/commands/menu.js";
import { contactCommand } from "./bot/commands/contact.js";
import { newsCommand } from "./bot/commands/news.js";
import { callbackHandler } from "./bot/handlers/callbackHandler.js";

const startBot = () => {
  const token = process.env.TELEGRAM_TOKEN;
  const bot = new TelegramBot(token, { polling: true });

  menuCommand(bot);
  contactCommand(bot);
  newsCommand(bot);
  callbackHandler(bot);

  console.log("Bot da FURIA iniciado! 🐾");
};

startBot();
