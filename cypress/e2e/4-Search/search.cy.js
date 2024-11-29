/// <reference types="cypress" />

describe('Automate Search on Viola', () => {
    beforeEach(() => {
        cy.visit('https://voila.id/account/login')
        cy.fixture("validUser").then(user => {
            const email = user.email
            const password = user.password

            cy.login(email,password)
        }) 
    });

    //Test Case Search Item Using Valid Keywords
    it('Should search for item using valid keywords', () => {
        cy.searchItem('nike{enter}')
        cy.wait(5000)
        cy.get('#search-result-product-list-43056 > ._1nvnchg4 > .j1jih7ap > ._17zx15te8 > #base').should('have.text','Nike')
    });

    //Test Case Search Item Using Invalid Keywords
    it('Should search for item using invalid keywords', () => {
        cy.searchItem('123asd{enter}')
        cy.wait(5000)
        cy.get('.j1jih78w > ._17zx15te8').should('have.text','Product not found')
        //cy.get('#search-result-product-list-43056 > ._1nvnchg4 > .j1jih7ap > ._17zx15te8 > #base').should('have.text','Nike')
    });
});