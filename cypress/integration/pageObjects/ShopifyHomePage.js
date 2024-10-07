class ShopifyHome
{
    getHamburgerIcon()
    {
        return cy.get('.icon-hamburger')   
    }

    getProductSearch()
    {
        return cy.get('input[type=search')
    }

    getProductName()
    {
        return cy.get('.h3 a')
    }

    getSearchButton()
    {
        cy.get('span[class="icon icon-search"]')
    }

}

export default ShopifyHome