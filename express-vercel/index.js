const express = require("express");
const app = express();
const product = require("./api/product");
const TelegramBot = require('node-telegram-bot-api');


const TOKEN = "6641998982:AAHVM_Gds40IaEaFIKuEXwsIwD53bz9-834"
const bot = new TelegramBot(TOKEN, { polling: true });

function sample(){
    bot.on('message', (msg) => {
        const chatId = msg.chat.id;
        bot.sendMessage(chatId, 'Received your message: ' + msg.text);
    });
}

app.use(express.json({ extended: false }));

app.use("/api/product", product);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));

function pollUpdates() {
    bot.getUpdates().then((updates) => {
        updates.forEach((update) => {
            const chatId = update.message.chat.id;
            bot.sendMessage(chatId, 'Received your message: ' + update.message.text);
        });
    }).catch((error) => {
        console.error('Error polling updates:', error);
    });
}

// Poll for updates every 20 seconds
setInterval(pollUpdates, 20000);
setInterval(sample, 20000);