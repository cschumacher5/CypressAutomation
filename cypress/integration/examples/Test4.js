//cypress - Spec

/// <reference types="Cypress" />

describe('My third Test Suite', function() 
{

    it('My third test case!', function() {

       //first test - going to the URL
       cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

       //checkboxes
       cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')

       cy.get('#alertbtn').click()
       cy.get('#confirmbtn').click()

       //window:alert
       cy.on('window:alert', (str)=>
       {
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
       })

       //confirm:alert
       cy.on('window:confirm', (str)=>
       {
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
       })
    
   

    })
})
