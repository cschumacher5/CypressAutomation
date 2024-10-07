import ShopifyCart from '../pageObjects/ShopifyCart'
import ShopifyHome from '../pageObjects/ShopifyHomePage'
import ShopifyProduct from '../pageObjects/ShopifyProductPage'


describe('Create order', function () {

  before(() => {
    cy.fixture('shopify_ex').then(function (data) {
      this.data = data

    })
  })

  // it('Should create an order', function () {

  //   const shopCartPage = new ShopifyCart()
  //   const shopHomePage = new ShopifyHome()
  //   const shopProductPage = new ShopifyProduct()

  //   cy.visit('https://markys-store.myshopify.com/')

  //   //click hamburger icon
  //   shopHomePage.getHamburgerIcon().click()
  //   //cy.get('.nav-mobile').contains('All Collections').click()
  //   shopProductPage.getNavPage().contains(this.data.collectionPage).click()

  //   //verify URL is correct
  //   cy.url().should('include', '/collections')

  //   //purchase clothing from collections
  //   shopProductPage.getCollection().contains(this.data.collection).click()

  //   cy.get('.product__title').contains('Basic Tee').click()
  //   cy.get('.single-option-selector').eq(0).select('Small').should('have.value', 'Small')
  //   shopProductPage.getAddToCart().click()
  //   shopProductPage.getCheckout().click()

  //   //verify contents in cart
  //   shopCartPage.getProduct().should('have.text', this.data.product1)

  //   //Shipping Info
  //   cy.customerShipping('Baby Billy Freeman')

  //   shopCartPage.getEmailAddress().type(this.data.emailAddress)
  //   shopCartPage.getFirstName().type(this.data.firstName)
  //   shopCartPage.getLastName().type(this.data.lastName)
  //   shopCartPage.getAddress().type(this.data.address1)
  //   shopCartPage.getCity().type(this.data.city, { force: true })
  //   shopCartPage.getState().type(this.data.state)
  //   shopCartPage.getZipCode().type(this.data.zipCode)

  //   //change to Pay on Delivery
  //   shopCartPage.getPayOnDelivery().click()

  //   //set billing address to same as shipping 
  //   shopCartPage.getBillingAddress().click()

  //   //Complete Order
  //   shopCartPage.getCompleteOrder().click()
  //   shopCartPage.getOrderConfirmation().should('have.text', this.data.orderConfirm)

  // })

  it('Should create an order with gift option', function () {

    const shopCartPage = new ShopifyCart()
    const shopHomePage = new ShopifyHome()
    const shopProductPage = new ShopifyProduct()

    cy.visit('https://markys-store.myshopify.com/')

    shopHomePage.getHamburgerIcon().click()
    cy.contains('Search').click()
    shopHomePage.getProductSearch().type(this.data.product2)
    cy.get('span[class="icon icon-search"]').click()
    //shopHomePage.getSearchButton().click() no idea why this doesn't work but the line above does
    
    //cy.get('.btn').eq(0).click()
    shopHomePage.getProductName().click()
    //cy.get('#addToCart').click()
    shopProductPage.getAddToCart().click()

    //verify contents in cart
    shopCartPage.getProduct2().should('include.text', this.data.product2)

    //cy.url().should('include', '/cart')
    
    shopCartPage.getGiftMessage().type('Hope you enjoy your gift!')
    shopCartPage.getGiftCheckbox().click().should('be.checked')
    //cy.get('#cartSpecialInstructions').should('have.text', 'Hope')

    shopProductPage.getCheckout().click({force: true})

    //Shipping Info
    cy.customerShipping('Baby Billy Freeman')
  
    //change to Pay on Delivery
    shopCartPage.getPayOnDelivery().click()

    //set billing address to same as shipping 
    shopCartPage.getBillingAddress().click()

    //Complete Order
    shopCartPage.getCompleteOrder().click()
    shopCartPage.getOrderConfirmation().should('have.text', this.data.orderConfirm)

    //shopProductPage.getNavPage().contains(this.data.searchProduct).click()
  })

  it('Should create another order with gift option', function () {

    const shopCartPage = new ShopifyCart()
    const shopHomePage = new ShopifyHome()
    const shopProductPage = new ShopifyProduct()

    cy.visit('https://markys-store.myshopify.com/')

    shopHomePage.getHamburgerIcon().click()
    cy.contains('Search').click()
    shopHomePage.getProductSearch().type(this.data.product2)
    cy.get('span[class="icon icon-search"]').click()
    //shopHomePage.getSearchButton().click() no idea why this doesn't work but the line above does
    
    //cy.get('.btn').eq(0).click()
    shopHomePage.getProductName().click()
    //cy.get('#addToCart').click()
    shopProductPage.getAddToCart().click()

    //verify contents in cart
    shopCartPage.getProduct2().should('include.text', this.data.product2)

    //cy.url().should('include', '/cart')
    
    shopCartPage.getGiftMessage().type('Hope you enjoy your gift!')
    shopCartPage.getGiftCheckbox().click().should('be.checked')
    //cy.get('#cartSpecialInstructions').should('have.text', 'Hope')

    shopProductPage.getCheckout().click({force: true})

    //Shipping Info
    cy.customerShipping('Baby Billy Freeman')
  
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
