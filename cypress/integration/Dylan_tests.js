describe('Dylan Albertazzi\'s Tests', function () {
	it('[+] Loads the web chatbot and verifies correct URL', function () {
		cy.visit('https://botkit-send-help.herokuapp.com/chat.html')

		cy.url().should('include', '/chat.html')
	})
    
    it('[+] Handles barrage input', function() {
        cy.wait(1500)

        cy.get('input[id="messenger_input')
            .type('the brown cow jumped over the lazy fox')
            .should('have.value', 'the brown cow jumped over the lazy fox')
        cy.contains('Send').click()    
            
        cy.get('input[id="messenger_input')
            .type('Horses are pretty cool')
            .should('have.value', 'Horses are pretty cool')  
        cy.contains('Send').click()

        cy.get('input[id="messenger_input')
            .type('So are hippos')
            .should('have.value', 'So are hippos')     
        cy.contains('Send').click()    
    })


    it('[+] Handles number barrage input', function() {
        
        cy.get('input[id="messenger_input')
            .type('46345236455243')
            .should('have.value', '46345236455243') 
        cy.contains('Send').click()

        cy.get('input[id="messenger_input')
            .type('4.6345236455243')
            .should('have.value', '4.6345236455243') 
        cy.contains('Send').click()

        cy.get('input[id="messenger_input')
            .type('6')
            .should('have.value', '6') 
        cy.contains('Send').click()

        cy.get('input[id="messenger_input')
            .type('4598')
            .should('have.value', '4598') 
        cy.contains('Send').click()

        cy.get('input[id="messenger_input')
            .type('5903948290834904.994443383948091390483384903284093280571')
            .should('have.value', '5903948290834904.994443383948091390483384903284093280571') 
        cy.contains('Send').click()

        cy.get('input[id="messenger_input')
            .type('-14')
            .should('have.value', '-14') 
        cy.contains('Send').click()
    })


   
	

	it('[+] Handles barrage input with known answers', function () {

		cy.get('input[id="messenger_input')
            .type('Test, test, test')
            .should('have.value', 'Test, test, test') 
        cy.contains('Send').click()
        
       /*  cy.get(' :nth-child(17) > .message > p')
            .should('contain', 'I heard a test') */
        cy.contains('I heard a test')
        
        cy.get('input[id="messenger_input')
            .type('Help, help, help')
            .should('have.value', 'Help, help, help') 
        cy.contains('Send').click()

        cy.get(' :nth-child(24) > .message > p')
            .should('contain', 'I can point you to resources, and connect you with experts who can help.')

        cy.get('input[id="messenger_input')
            .type('Help, test, test, help')
            .should('have.value', 'Help, test, test, help') 
        cy.contains('Send').click()

        cy.get(' :nth-child(26) > .message > p')
            .should('contain', 'I do not know how to help with that. Say help at any time to access this menu.') 
  

    })
    

    it('[+] Handles multiple known inputs together', function () {

		cy.get('input[id="messenger_input')
            .type('Test help')
            .should('have.value', 'Test help') 
        cy.contains('Send').click()

      
        
        cy.wait(1000)
        cy.get('input[id="messenger_input')
            .type('help test')
            .should('have.value', 'help test') 
        cy.contains('Send').click()

        cy.get(' :nth-child(29) > .message > p')
            .should('contain', 'I can point you to resources, and connect you with experts who can help.')

        cy.wait(1000)
        cy.get('input[id="messenger_input')
            .type('testhelp')
            .should('have.value', 'testhelp') 
        cy.contains('Send').click()

        
  
        cy.wait(1000)
        cy.get('input[id="messenger_input')
            .type('helptest')
            .should('have.value', 'helptest') 
        cy.contains('Send').click()

        cy.contains('I do not know how to help with that. Say help at any time to access this menu.')
       /*  cy.get(' :nth-child(32) > .message > p')
            .should('contain', 'I do not know how to help with that. Say help at any time to access this menu.') 
 */
        cy.get('input[id="messenger_input')
            .type('testTestTESThelp')
            .should('have.value', 'testTestTESThelp') 
        cy.contains('Send').click()

        cy.get(' :nth-child(34) > .message > p')
            .should('contain', 'I can point you to resources, and connect you with experts who can help.') 

    })

	

})



