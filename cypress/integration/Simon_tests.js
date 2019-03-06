describe('Simon Louie\'s Tests', function() {

	var largeInput_100 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut volutpat risus, nec consectetur sapien. Curabitur suscipit quis velit vel consequat. Praesent est massa, lacinia sit amet nunc at, ullamcorper lobortis ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque vitae arcu id velit accumsan blandit. Fusce vulputate, felis quis feugiat tempus, arcu libero ornare ante, sed commodo nulla nisi congue nisl. Praesent tempor orci sed libero gravida, vel interdum nulla ultrices. Integer tempus augue ex, quis eleifend libero rutrum eget. Etiam fermentum malesuada eros sit amet commodo. Duis ornare, est fermentum finibus consectetur, tortor.'
	
	var largeInput_200 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel turpis quis sapien rhoncus malesuada. Donec nec varius massa, id pulvinar lorem. Proin mattis elit id condimentum blandit. Cras sed semper velit. Proin vehicula lacus eu odio blandit, at viverra diam sollicitudin. Morbi nibh sapien, auctor nec ullamcorper et, posuere ut dui. Curabitur laoreet sem id orci commodo, sit amet pulvinar turpis gravida. Donec sagittis nunc rhoncus, lacinia est nec, consectetur odio. Duis dignissim auctor tincidunt. Maecenas convallis mi dui, sit amet dapibus odio porta eu. Integer sit amet ultricies sem. Curabitur non ex vel ligula finibus ullamcorper nec a leo. Integer feugiat elementum lacinia. Nam in hendrerit mi. Ut eleifend tincidunt vulputate. Phasellus laoreet volutpat pellentesque. Cras id imperdiet ligula, non auctor mi. Donec sed tincidunt tellus. Nulla eget condimentum lorem, ac iaculis sem. Curabitur arcu leo, tempus eget magna in, viverra varius neque. Etiam facilisis pretium ante, non ullamcorper tortor placerat eget. In ac velit a enim consectetur cursus. Fusce hendrerit ipsum elementum libero finibus porta. Donec vitae molestie mauris. Donec vehicula orci quis erat porttitor eleifend. Proin ullamcorper consectetur molestie. Aenean non risus id mauris imperdiet convallis non ut dolor. Nam sed quam faucibus odio malesuada pulvinar.'
	
	var largeInput_400 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et tellus sed dolor aliquam lobortis. Sed commodo orci vitae magna convallis tristique. Fusce vitae convallis risus. Suspendisse eget ultrices sem. Vivamus cursus porttitor interdum. Sed fringilla, leo vel scelerisque feugiat, elit elit pellentesque massa, id placerat quam augue nec nunc. Etiam vehicula congue libero, at blandit tortor accumsan ac. Pellentesque dapibus mauris id semper malesuada. Suspendisse nec nulla ac ligula maximus commodo sed id odio. Nullam placerat purus ut augue hendrerit posuere. Duis nec bibendum mi, nec dapibus nunc. Suspendisse ipsum lorem, condimentum eu imperdiet pretium, pulvinar nec elit. Nam elementum congue est, in facilisis risus condimentum tempus. Vivamus quis eros tortor. Donec iaculis auctor arcu, sodales pretium ligula aliquet ut. Vestibulum sed pulvinar orci. Nulla consectetur sodales nulla, in condimentum nisl lacinia ac. Integer feugiat tristique ante eget malesuada. Nunc volutpat sapien vitae ipsum porta, id tempus massa consectetur. Aenean rhoncus auctor velit. Praesent dui mauris, elementum dictum tellus eu, aliquam rhoncus purus. Etiam at lorem consectetur, luctus turpis vitae, rutrum nunc. Phasellus porttitor fermentum est rutrum vestibulum. Suspendisse potenti. Maecenas volutpat orci quis suscipit pellentesque. Vivamus a velit laoreet nunc pulvinar lacinia id cursus diam. In sed consequat felis, et venenatis ante. Etiam vulputate nibh ac eros suscipit iaculis. Nam ut vulputate sem. Aenean quis nunc sit amet urna euismod blandit. Nullam nec bibendum magna. Vivamus volutpat egestas sapien, sit amet tincidunt est euismod sed. Praesent fringilla interdum urna a sagittis. Suspendisse in sapien nec eros tempus porta id at nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam et magna pulvinar, malesuada erat nec, venenatis risus. Pellentesque sem ante, accumsan nec nulla quis, consectetur vestibulum sapien. Integer purus risus, sagittis sit amet venenatis ac, condimentum a mauris. Sed interdum leo elit, at tincidunt erat vulputate ac. Aliquam et dictum ligula. Suspendisse feugiat tellus sed ultricies tristique. Donec tellus lectus, pretium non varius eu, accumsan sollicitudin nunc. In tristique nibh vel dolor molestie vulputate. Etiam sed massa id lacus aliquam luctus. Sed feugiat tempor nisi, ultricies hendrerit purus ullamcorper a. Nulla et odio tristique purus tempus viverra ut in lacus. Nulla at laoreet sapien. Donec eu libero mattis, suscipit libero sed, aliquet mauris. Vivamus in nunc hendrerit, tristique eros a, accumsan sem. Sed velit elit, eleifend id nisi eu, lobortis condimentum diam. Praesent iaculis sagittis orci, nec egestas arcu commodo sit amet.'


	it('[+] Load the web chatbot and verify that URL is correct', function () {
		
		cy.visit('https://botkit-send-help.herokuapp.com/chat.html')
		cy.url().should('include', '/chat.html')
		
		cy.wait(3000);
	
	})
	

    it('[+] Enter input containing keyword "test" as substring ("test123ABC") and verify output', function () {
		
        cy.get('input[id="messenger_input"]').type('test123ABC')
        cy.contains('Send').click()
		
		cy.wait(500);
		
		cy.get(' .message > p ').last().should('contain', 'I heard a test')

	})
	
	it('[+] Enter input containing keyword "test" as substring ("123testABC") and verify output', function () {
		
		cy.get('input[id="messenger_input"]').type('123testABC')
        cy.contains('Send').click()
		
		cy.wait(500);
		
		cy.get(' .message > p ').last().should('contain', 'I heard a test')
		
	})
	
	it('[+] Enter input containing keyword "test" as substring ("123ABCtest") and verify output', function () {
		
		cy.get('input[id="messenger_input"]').type('123ABCtest')
        cy.contains('Send').click()
		
		cy.wait(500);
		
		cy.get(' .message > p ').last().should('contain', 'I heard a test')
		
    })
	
	it('[+] Enter input containing keyword "help" as substring ("help123ABC") and verify output', function () {
	
        cy.get('input[id="messenger_input"]').type('help123ABC')
        cy.contains('Send').click()
		
		cy.wait(3000);
		
		cy.get(' .message > p ').last()
		  .should('contain', 'I can point you to resources, and connect you with experts who can help.')
		  
	 })

	it('[+] Enter input containing keyword "help" as substring ("123helpABC") and verify output', function () {
		
		cy.get('input[id="messenger_input"]').type('123helpABC')
        cy.contains('Send').click()
		
		cy.wait(3000);
		
		cy.get(' .message > p ').last()
		  .should('not.contain', 'I can point you to resources, and connect you with experts who can help.')
	
	})

	it('[+] Enter input containing keyword "help" as substring ("123ABChelp") and verify output', function () {
		
		cy.get('input[id="messenger_input"]').type('123ABChelp')
        cy.contains('Send').click()
		
		cy.wait(3000);
		
		cy.get(' .message > p ').last()
		  .should('contain', 'I can point you to resources, and connect you with experts who can help.')
		
    })

	
	it('[+] Enter large input (100 words) and verify that there is some kind of output', function () {

        cy.get('input[id="messenger_input"]').invoke('val', largeInput_100)
        cy.contains('Send').click()
		
		cy.wait(1000);
		
		cy.get(' .message > p ').last().should('exist')
	
	})
	
	it('[+] Enter large input (200 words) and verify that there is some kind of output', function () {
		
		cy.get('input[id="messenger_input"]').invoke('val', largeInput_200)
        cy.contains('Send').click()
		
		cy.wait(1000);
		
		cy.get(' .message > p ').last().should('exist')
		
	})
		
	it('[+] Enter large input (400 words) and verify that there is some kind of output', function () {
	
		cy.get('input[id="messenger_input"]').invoke('val', largeInput_400)
		cy.contains('Send').click()
		
		cy.wait(1000);
	
		cy.get(' .message > p ').last().should('exist')
				
    })

	
	it('[+] Quickly enter many large inputs and verify that there is some kind of output', function () {

		for (var i = 0; i < 50; i++) {
			
			cy.get('input[id="messenger_input"]').invoke('val', largeInput_400)
			cy.contains('Send').click()
			
		}
	   
		cy.get(' .message > p ').last().should('exist')
				
    })
	
})