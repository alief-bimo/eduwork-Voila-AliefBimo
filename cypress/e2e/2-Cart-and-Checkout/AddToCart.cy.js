/// <reference types="cypress"/>

describe('add item to cart Voila', () => {
    beforeEach(() => {
        cy.visit('https://voila.id/account/login')
        cy.fixture("validUser").then(user => {
            const email = user.email
            const password = user.password

            cy.login(email,password)
        })
    });

    it('Should add item to cart', () => {
        cy.wait(10000)
        cy.addToCart('#last-thing-viewed-39638 > ._1nvnchg4')
        cy.wait(10000)
    });

    it('Should remove item form cart', () => {
        cy.wait(10000)
        cy.addToCart('#last-thing-viewed-44453 > ._1nvnchg4')
        cy.wait(10000)
        cy.get('[data-test-id="CT_Component_removeCart0"]').click()
    });

    
});