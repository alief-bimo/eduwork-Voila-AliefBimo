/// <reference types="cypress"/>

describe('add item to cart Voila', () => {
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // Return false to prevent the test from failing
            return false;
          });

        cy.visit('https://voila.id/account/login')
        cy.fixture("validUser").then(user => {
            const email = user.email
            const password = user.password

            cy.login(email,password)
        })
    });

    //Test Case Add item to Cart
    it('Should add item to cart', () => {
        cy.wait(10000)
        cy.addToCart('#last-thing-viewed-46558')
        cy.get('.clamp-2').should('have.text','Signature B8U Oval Sunglasses Black')
        //cy.wait(10000)
    });

    // Test Case Remove Item from Cart
    it('Should remove item form cart', () => {
        cy.wait(10000)
        cy.addToCart('#last-thing-viewed-46558')
        cy.wait(10000)
        cy.get('[data-test-id="CT_Component_removeCart0"]').click({force: true})
        //cy.get('.j1jih78w > ._17zx15te8').should('have.text','Your shopping bag is empty')
    });

    
});