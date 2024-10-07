//cypress - Spec

/// <reference types="Cypress" />

describe('My third Test Suite', function() 
{

    it('My third test case!', function() {

       //first test - going to the URL
       cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

       //checkboxes
       cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
       cy.wait(2000)
       cy.get('input[type="checkbox"]').check(['option2', 'option3'])

       //static dropdown
       cy.get('select').select('option2').should('have.value', 'option2')

       //dynamic dropdown
       cy.get('#autocomplete').type('ind')

       cy.get('.ui-menu-item div').each(($el, index, $list) => {
            if($el.text()==="India")
            {
                $el.click()
            }
        })

        cy.get('#autocomplete').should('have.value', 'India')

        cy.get('#displayed-text').should('be.visible')

        //click the hide box to hide the text field
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')

        //radio buttons
        cy.get('[value="radio2"]').check().should('be.checked')

    })
})
