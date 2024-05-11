const express = require('express');
const TelegramBot = require('node-telegram-bot-api');

// Create an Express app
const app = express();

// Configure the Telegram bot token
const TOKEN = "6641998982:AAHVM_Gds40IaEaFIKuEXwsIwD53bz9-834"


// Create a new instance of the Telegram bot
const bot = new TelegramBot(TOKEN, { polling: true });

// Middleware to handle incoming Telegram messages
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Received your message: ' + msg.text);
});

// Define other routes and middleware for your Express app
app.get('/', (req, res) => {
    res.send('Hello from Express!');
});
app.get('/hello', (req, res) => {
    res.send('Hello from Express!');
});

// Start the Express server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Express server is running on port ${port}`);
});
