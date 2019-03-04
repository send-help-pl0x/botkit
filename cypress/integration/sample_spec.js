describe('My First Test', function () {
	it('== Loads the web chatbot', function () {
		cy.visit('https://botkit-send-help.herokuapp.com/chat.html')

		cy.wait(2500)

		cy.get('input[id="messenger_input"]')
			.type('urmomgay')
			.should('have.value', 'urmomgay')

		cy.contains('Send').click()
	})
})