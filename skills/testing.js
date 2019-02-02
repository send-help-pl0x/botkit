module.exports = function (controller) {
	controller.hears(["urmomgay"], "message_received", function (bot, message) {
		bot.reply(message, {
			text: "no u?",
			typingDelay: 2000,
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
					payload: "Talk sexy to me",
				},
			]
		});
	});

	controller.hears(["lmao", "die"], "message_received", function (bot, message) {
		bot.reply(message, {
			text: "kysirlpl0x",
			typingDelay: 2500
		});
	});

	controller.hears(["sexy"], "message_received", function (bot, message) {

		bot.startConversation(message, function (err, convo) {

			convo.addQuestion('How are you?', function (response, convo) {

				convo.say('Cool, you said: ' + response.text);
				convo.say({
					text: "I'm " + response.text + " as well!",
					delay: 2500
				});
				convo.say({
					text: "Next prompt...",
					delay: 1500
				});
				convo.next();
			}, {}, 'default');

		})
		// bot.reply(message, {
		// 	text: "Ok... I guess I can talk for a bit.",
		// 	typingDelay: 2500
		// });
		// bot.add(message, {
		// 	text: "However, I hope you know this is all scripted you lonely piece of shit lmao",
		// 	typingDelay: 2500
		// });
	});
};