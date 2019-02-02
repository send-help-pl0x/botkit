module.exports = function (controller) {
	controller.hears("urmomgay", "message_received", function (bot, message) {
		bot.startConversation(message, function (err, convo) {
			convo.ask({
				test: "no u?",
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
						payload: "convoTest",
					},
				]
			}, [{
					pattern: 'convoTest',
					callback: function (res, convo) {
						convo.gotoThread('convoTest');
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
		});

		convo.addMessage({
			text: 'I do not know how to help with that... fuckwit...'
		}, 'end');

		convo.addMessage({
			text: "Ok... I guess I can talk for a bit."
		}, 'convoTest');

		convo.addMessage({
			text: "However, I hope you know this is all scripted you lonely piece of shit lmao"
		}, 'convoTest');

	});

	controller.hears(["lmao", "die"], "message_received", function (bot, message) {
		bot.reply(message, {
			text: "kysirlpl0x",
			typingDelay: 2500
		});
	});
};