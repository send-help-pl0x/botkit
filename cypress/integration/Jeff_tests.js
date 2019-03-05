describe('Jeff test boi', function(){
    it('[+] Loads the web chatbot and verifies correct URL', function () {
		cy.visit('https://botkit-send-help.herokuapp.com/chat.html')

		cy.url().should('include', '/chat.html')
	})

    it('[+] Test \'*\' case', function(){

        cy.wait(2000)
        cy.get('input[id="messenger_input"]')
        .type('*')
        .should('have.value','*')
        
        cy.contains('Send').click()
        
        cy.get(':nth-child(4) > .message > p')
          .should('contain', 'I do not know how to respond to that message yet.')
    })


    it('[+] Test [] case', function(){
        cy.wait(2000)
        cy.get('input[id="messenger_input"]')
        .type('[]')
        .should('have.value','[]')
        
        cy.contains('Send').click()

        cy.get(':nth-child(6) > .message > p')
        .should('contain', 'I do not know how to respond to that message yet.')
    })

    
    it('[+] Test )()((^&%&%#$#$%^&*( case', function(){
        cy.wait(2000)
        cy.get('input[id="messenger_input"]')
        .type(')()((^&%&%#$#$%^&*(')
        .should('have.value',')()((^&%&%#$#$%^&*(')
        
        cy.contains('Send').click()

        cy.get(':nth-child(8) > .message > p')
        .should('contain', 'I do not know how to respond to that message yet.')
    })

    it('[+] Test *white space* case', function(){
        cy.wait(2000)
        cy.get('input[id="messenger_input"]')
        .type(' ')
        .should('have.value',' ')
        
        cy.contains('Send').click()

        cy.get(':nth-child(10) > .message > p')
        .should('contain', 'I do not know how to respond to that message yet.')
    })
    
})