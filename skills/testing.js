module.exports = function (controller) {
	controller.hears("urmomgay", "message_received", function (bot, message) {
		bot.startConversation(message, function (err, convo) {

			convo.ask({
				test: "no u",
				quick_replies: [{
						title: "Test message",
						payload: "ur moms a test topkek",
					},
					{
						title: "Help me pl0x",
						payload: "help",
					},
					{
						title: "I'm lonely af",
						payload: "convo",
					},
				]
			}, [{
					pattern: 'convo',
					callback: function (res, convo) {
						convo.gotoThread('convo');
						convo.next();
					}
				},
				{
					default: true,
					callback: function (res, convo) {
						convo.gotoThread('end');
					}
				}
			]);

			convo.addMessage({
				text: 'I do not know how to help with that... fuckwit...'
			}, 'end');

			convo.addMessage({
				text: "Ok... I guess I can talk for a bit."
			}, 'convo');

			convo.addMessage({
				text: "However, I hope you know this is all scripted you lonely piece of shit lmao"
			}, 'convo');
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
};