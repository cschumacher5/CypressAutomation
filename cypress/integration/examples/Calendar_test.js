//cypress - Spec

/// <reference types="Cypress" />

describe('Handling info calendar', function () {

     it('should grab future date from calendar', function () {

          cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers')

          cy.get('.react-date-picker').click()
          cy.get('.react-calendar__navigation__label__labelText').click()

          Cypress._.times(3, () => {
               cy.get('.react-calendar__navigation__arrow').eq(2).click()
          })

          cy.contains('June').click()
          cy.get('.react-calendar__month-view__days__day').each(($e1, index, $list) => {

               const date = $e1.text()
               if (date === "15") {
                    cy.get(':nth-child(16)').click()
                    cy.get('.react-date-picker').should('include', '6')
               }
          })



     })


})





