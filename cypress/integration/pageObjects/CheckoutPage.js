class CheckoutPage {

    checkoutButton() {
        return cy.get('.btn-success')
    }

    deliveryLocation() {
        return cy.get('#country')

    }

    termsCheckbox() {
        return cy.get('.checkbox-primary')

    }

    purchaseButton() {
        return cy.get('.btn-success')

    }

    successAlert(){

        return cy.get('.alert-success')
    }

    selectCountry(){

        return cy.get('.suggestions')
    }


}




export default CheckoutPage
