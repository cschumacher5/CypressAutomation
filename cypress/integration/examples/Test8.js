//cypress - Spec

/// <reference types="Cypress" />

describe('Handling info from Tables', function () {

     it('should handle searching tables', function () {

          cy.visit('https://rahulshettyacademy.com/AutomationPractice')

          cy.get('#opentab').then(function(el)
          {
               const url=el.prop()
               cy.visit(url)
               cy.origin(url, () => {

                    cy.get("div.sub-menu-bar a[href*='about']").click()

               })

          })


     })




})
