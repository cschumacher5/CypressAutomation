/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />


import 'cypress-iframe'


describe('iFrame test', function () {

     it('should work with iFrames', function () {

          cy.visit('https://rahulshettyacademy.com/AutomationPractice')
          cy.frameLoaded('#courses-iframe')

          cy.iframe().find("a[href*='mentorship']").eq(0).click()
          cy.wait(3000)

          cy.iframe().find("h1[class*='pricing-title']").should('have.length', 2)




     })




})
