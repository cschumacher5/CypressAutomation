//cypress - Spec

/// <reference types="Cypress" />

describe('My second Test Suite', function() 
{

    it('My second test case!', function() {

       //first test - going to the URL
       cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
       cy.get('.search-keyword').type('ca')
       cy.wait(2000)

       //cy.get('.product:visible').should('have.length', 4)
       cy.get('.products').as('productLocator')

       cy.get('@productLocator').find('.product').each(($el, index, $list) => {

       const textVeg = $el.find('h4.product-name').text()
       
       if(textVeg.includes('Cashews'))
       {
        //$e1.contains('ADD TO CART').click()
        cy.wrap($el).find('button').click()

       }
})

        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()


    })
})
