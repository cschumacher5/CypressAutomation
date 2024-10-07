//cypress - Spec

/// <reference types="Cypress" />

describe('Handling info from Tables', function () {

     it('should handle searching tables', function () {

          cy.visit('https://rahulshettyacademy.com/AutomationPractice')

          //cy.get('.mouse-hover-content').invoke('show')
          cy.contains('Top').click({force: true})
          cy.url().should('include', 'top')

     })




})
