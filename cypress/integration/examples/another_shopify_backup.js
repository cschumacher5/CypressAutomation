import ShopifyCart from '../pageObjects/ShopifyCart'
import ShopifyHome from '../pageObjects/ShopifyHomePage'
import ShopifyProduct from '../pageObjects/ShopifyProductPage'


describe('Create order', function () {

  before(() => {
    cy.fixture('shopify_ex').then(function (data) {
      this.data = data

    })
  })

  it('Should create an order with gift option', function () {

    const shopCartPage = new ShopifyCart()
    const shopHomePage = new ShopifyHome()
    const shopProductPage = new ShopifyProduct()

    cy.visit('https://markys-store.myshopify.com/')

    shopHomePage.getHamburgerIcon().click()
    cy.contains('Search').click()
    cy.get('input[type=search').type("the room")
    cy.get('.btn').eq(0).click()
    cy.contains('The Room DVD').click()
    //cy.get('#addToCart').click()
    shopProductPage.getAddToCart().click()
    shopProductPage.getCheckout().click()

    //verify contents in cart
    shopCartPage.getProduct2().should('have.text', this.data.product2)

    //Shipping Info
    shopCartPage.getEmailAddress().type(this.data.emailAddress)
    shopCartPage.getFirstName().type(this.data.firstName)
    shopCartPage.getLastName().type(this.data.lastName)
    shopCartPage.getAddress().type(this.data.address1)
    shopCartPage.getCity().type(this.data.city, { force: true })
    shopCartPage.getState().type(this.data.state)
    shopCartPage.getZipCode().type(this.data.zipCode)

    //change to Pay on Delivery
    shopCartPage.getPayOnDelivery().click()

    //set billing address to same as shipping 
    shopCartPage.getBillingAddress().click()

    //Complete Order
    shopCartPage.getCompleteOrder().click()
    shopCartPage.getOrderConfirmation().should('have.text', this.data.orderConfirm)

    //shopProductPage.getNavPage().contains(this.data.searchProduct).click()
  })

})