/// <reference types="cypress" />

describe('Automate Wishlist on Viola', () => {
    beforeEach(() => {
        cy.visit('https://voila.id/account/login')
        cy.fixture("validUser").then(user => {
            const email = user.email
            const password = user.password

            cy.login(email,password)
        }) 
    });

    //Test Case Add Item to Wishlist
    it('Should add item to whistlist', () => {
        cy.wait(8000)
        cy.get('#last-thing-viewed-27180 > ._1nvnchg4').click()
        cy.wait(5000)
        cy.get('p').contains('Try virtual try-on and see size on the app to see how the product fits you.').scrollIntoView()
        cy.get('[data-test-id="CT-PDP-Add-to-Wishlist"]').click()
        cy.get('._10z4js25 > ._15kd2we5s > #base').should('have.text', 'Product has been added to your wishlist.')
        cy.wait(2000)
        cy.get('[data-test-id="CT-wishlist-link"]').click()
        cy.get('._15r4f4dg9 > #base').should('have.text', 'Red Ami De Coeur T-Shirt Black')
    });

    //Test Case Remove item from wishlist
    it('Should Remove item from whistlist', () => {
        cy.wait(8000)
        cy.get('[data-test-id="CT-wishlist-link"]').click()
        cy.get('[data-test-id="CT-Wishlist-Edit"]').click()
        cy.get('[data-test-id="CT-Wishlist-List-Item-Wrapper"]').click()
        cy.get('[data-test-id="CT-Wishlist-Remove"]').click()
        cy.get('[data-test-id="CT_Component_ConfirmContent_Ok"]').click()
        cy.get('.j1jih78w > ._17zx15te8').should('have.text', 'Your wishlist is empty')

    });
});