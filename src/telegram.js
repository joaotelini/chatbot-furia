import "dotenv/config";
import TelegramBot from "node-telegram-bot-api";

const token = process.env.TELEGRAM_TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    "Fala, torcedor da FURIA! 🐾\nDigite /menu para ver o que posso te mostrar!"
  );
});

bot.onText(/\/menu/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    "Aqui estão as opções disponíveis:\n\n1️⃣ /noticias - Últimas notícias da FURIA\n2️⃣ /jogos - Próximos jogos da FURIA\n3️⃣ /ranking - Ranking atual da FURIA\n4️⃣ /historia - História da FURIA\n5️⃣ /curiosidades - Curiosidades sobre a FURIA"
  );
});
