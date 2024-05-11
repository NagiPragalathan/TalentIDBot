const express = require("express");
const app = express();
const product = require("./api/product");
const TelegramBot = require('node-telegram-bot-api');


const TOKEN = "6641998982:AAHVM_Gds40IaEaFIKuEXwsIwD53bz9-834"
const bot = new TelegramBot(TOKEN, { polling: true });
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Received your message: ' + msg.text);
});

app.use(express.json({ extended: false }));

app.use("/api/product", product);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
