const TelegramBot = require('node-telegram-bot-api'),
      token = '1814764081:AAE1uzsn-dyrWIPxcFxksjK-Y0q7oiBx6W0',
      bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Здравствуйте, чем я могу вам помочь?');
});

bot.onText(/\/echo (салоны)/i, (msg) => {
    const chatId = msg.chat.id;
    const resp = 'https://zoloto55.ru/shops/omsk';
    bot.sendMessage(chatId, resp);
});

bot.onText(/\/echo (кот)/i, (msg) => {
    const chatId = msg.chat.id;
    bot.sendPhoto(chatId, 'cat.jpg');
});

// клавиатура
const keyboard = [
    [
        {
            text: 'Поймать кота',
            callback_data: 'catchedCat'
        }
    ],
    [
        {
            text: 'Не ловить кота',
            callback_data: 'feltedCat'
        }
    ]
];

// обработчик на клавиатуру
bot.on('callback_query', (query) => {
    const chatId = query.message.chat.id;

    let img = '';

    if (query.data === 'catchedCat') {
        img = ''
    }
});