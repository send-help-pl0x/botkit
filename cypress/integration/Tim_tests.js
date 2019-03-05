describe('Timothy Bui\'s Tests', function () {
	it('[+] Loads the web chatbot and verifies correct URL', function () {
		cy.visit('https://botkit-send-help.herokuapp.com/chat.html')

		cy.url().should('include', '/chat.html')
	})

	it('[+] Sends known string commang', function () {

		cy.wait(1500)

		cy.get('input[id="messenger_input"]')
			.type('urmomgay')
			.should('have.value', 'urmomgay') // Verifies input

		cy.contains('Send').click()
	})

	it('[+] Clicks quick response "Help me pl0x"', function () {

		cy.contains('Help me pl0x').should('exist').click()
		cy.contains('I can point you to resources')
			.should('exist')

	})

	it('[+] Checks if help links exists and are correct', function () {

		cy.contains('Read the Docs').should('exist').click()

		cy.contains('Botkit Anywhere README')
			.should('exist')
			.should('contain', 'Botkit Anywhere README')

		cy.contains('Botkit Studio Help Desk')
			.should('exist')
			.should('contain', 'Botkit Studio Help Desk')

		cy.contains('Botkit Developer Guide')
			.should('exist')
			.should('contain', 'Botkit Developer Guide')

	})

	it('[+] Checks if help links are valid', function () {

		cy.get('.message > :nth-child(2) > a')
			.should('have.attr', 'href')
			.and('equal', 'https://botkit.groovehq.com/help_center')

		cy.get('.message > :nth-child(3) > a')
			.should('have.attr', 'href')
			.and('equal', 'https://github.com/howdyai/botkit-starter-web/blob/master/readme.md#botkit-anywhere')

		cy.get('.message > :nth-child(4) > a')
			.should('have.attr', 'href')
			.and('equal', 'https://github.com/howdyai/botkit/blob/master/readme.md#build-your-bot')
	})

	it('[+] Checks Invalid Input', function () {

		cy.wait(1500)

		cy.get('input[id="messenger_input"]')
			.type('This is some sort of invalid input topkek')
			.should('have.value', 'This is some sort of invalid input topkek') // Verifies input

		cy.contains('Send').click()

		cy.get(':nth-child(11) > .message > p')
			.should('contain', 'I do not know how to help with that. Say help at any time to access this menu.')
	})

	it('[+] Checks 100 Char Edge Case Input', function () {

		cy.wait(1500)

		cy.get('input[id="messenger_input"]')
			.type('thisis100charsthisis100charsthisis100charsthisis100charsthisis100charsthisis100charsthisis100charst')
			.should('have.value', 'thisis100charsthisis100charsthisis100charsthisis100charsthisis100charsthisis100charsthisis100charst') // Verifies input

		cy.contains('Send').click()

		cy.get(':nth-child(11) > .message > p')
			.should('contain', 'I do not know how to help with that. Say help at any time to access this menu.')
	})

	it('[+] Verify that help exists after invalid input', function () {

		cy.get('li > a')
			.should('contain', 'Help')
	})

	it('[+] Click help and verify correct output', function () {

		cy.get('li > a').click()

		cy.get(':nth-child(15) > .message > p')
			.should('contain', 'I can point you to resources, and connect you with experts who can help.')

		cy.get('ul > :nth-child(1) > a')
			.should('contain', 'Read the Docs')

		cy.get('ul > :nth-child(2) > a')
			.should('contain', 'Join the Community')

		cy.get('ul > :nth-child(3) > a')
			.should('contain', 'Expert Help')
	})

	it('[+] Verify successful page reset', function () {

		cy.visit('https://botkit-send-help.herokuapp.com/chat.html')

		cy.url().should('include', '/chat.html')

		cy.get('p')
			.should('contain', 'Hello scum! I am your robot overload, ready to fucking incinerate you! Would you like help or do you just want to send it?')

		cy.get('input[id="messenger_input"]')
			.should('have.value', '') // Verifies empty input

		cy.get('ul > :nth-child(1) > a')
			.should('contain', 'Help')

		cy.get('ul > :nth-child(2) > a')
			.should('contain', 'send it.')

		cy.get('ul > :nth-child(3) > a')
			.should('contain', 'Print a test message')
	})
})