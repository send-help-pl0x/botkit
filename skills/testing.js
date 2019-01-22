module.exports = function (controller) {
    controller.hears("urmomgay", "message_received", function (bot, message) {
        bot.reply(message, {
            text: "no u",
            typingDelay: 2500,
            quick_replies: [{
                title: "LMAO",
                payload: "lmao"
            },
            {
                title: "I wanna die lmao",
                payload: "die"
            }
            ]
        });
    });

    controller.hears("lmao", "message_received", function (bot, message) {
        bot.reply(message, {
            text: "no u",
            typingDelay: 2500
        });
    });

    controller.hears("die", "message_received", function (bot, message) {
        bot.reply(message, {
            text: "no u",
            typingDelay: 2500
        });
    });

    controller.hears("typing", "message_received", function (bot, message) {
        bot.reply(
            message, {
                text: "This message used the automatic typing delay",
                typing: true
            },
            function () {
                bot.reply(message, {
                    text: "This message specified a 5000ms typing delay",
                    typingDelay: 5000
                });
            }
        );
    });

    controller.hears("want muffin", "message_received", function (bot, message) {
        bot.reply(
            message, {
                text: "Would you like it hot or cold?",
                typing: true,

            },
            function () {
                bot.reply(message, {
                    text: "This message specified a 5000ms typing delay",
                    typingDelay: 5000,
                    title: "Hot",
                    payload: "hot",
                    title: "Cold",
                    payload: "cold"
                });
            }
        );
    });
};
