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

    it('[+] From "help" conversation, type \'test\'', function(){
        cy.wait(2000)
        
        cy.get('input[id="messenger_input"]')
          .type('help')
          .should('have.value', 'help')

        cy.contains('Send').click()

        cy.wait(2000)
        
        cy.get('input[id="messenger_input"]')
          .type('test')
          .should('have.value', 'test')

        cy.contains('Send').click()

        cy.get(':nth-child(12) > .message > p')
          .should('contain', 'I heard a test')
    })

    it('[+] After "help" conversation, type \'test\'', function(){
        cy.wait(2000)
        
        cy.get('input[id="messenger_input"]')
          .type('help')
          .should('have.value', 'help')

        cy.contains('Send').click()

        cy.wait(2000)
        
        cy.get('input[id="messenger_input"]')
          .type('test')
          .should('have.value', 'test')

        cy.contains('Send').click()

        cy.wait(2000)
        cy.get('input[id="messenger_input"]')
          .type('test')
          .should('have.value', 'test')

        cy.contains('Send').click()

        cy.get(':nth-child(20) > .message > p')
          .should('contain', 'I heard a test')
    })

    it('[+] After quick response, type \'test\'', function(){
        cy.wait(2000)
        
        cy.get('input[id="messenger_input"]')
          .type('urmomgay')
          .should('have.value', 'urmomgay')

        cy.contains('Send').click()
        
        cy.get('input[id="messenger_input"]')
          .type('test')
          .should('have.value', 'test')

        cy.contains('Send').click()

        cy.get(':nth-child(23) > .message > p')
          .should('contain', 'I heard a test')
    })
    
})