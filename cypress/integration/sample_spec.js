describe('Timothy Bui\'s Tests', function () {
	it('== Loads the web chatbot and verifies correct URL', function () {
		cy.visit('https://botkit-send-help.herokuapp.com/chat.html')

		cy.url().should('include', '/chat.html')
	})

	it('== Sends "urmomgay"', function () {

		cy.get('input[id="messenger_input"]')
			.type('urmomgay')
			.should('have.value', 'urmomgay') // Verifies input

		cy.contains('Send').click()
	})

	it('== Clicks quick response "Help me pl0x"', function () {

		cy.contains('Help me pl0x').should('exist').click()
		cy.contains('I can point you to resources')
			.should('exist')

	})

	it('== Checks if help links exists (Clicking automation not working)', function () {

		cy.contains('Read the Docs').should('exist').click()

		cy.contains('Botkit Anywhere README')
			.should('exist')

		cy.contains('Botkit Studio Help Desk')
			.should('exist')

		cy.contains('Botkit Developer Guide')
			.should('exist')

	})
})