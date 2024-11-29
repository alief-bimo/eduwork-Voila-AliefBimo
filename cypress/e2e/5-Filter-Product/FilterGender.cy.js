/// <reference types="cypress" />

describe('Automate Filter based on gender Viola', () => {
    beforeEach(() => {
        cy.visit('https://voila.id/account/login')
        cy.fixture("validUser").then(user => {
            const email = user.email
            const password = user.password

            cy.login(email,password)
        }) 
    });

    //Test Case Filter search result for women
    it('Should filter the search result for women', () => {
        cy.searchItem('nike{enter}')
        cy.wait(5000)
        cy.get('[data-test-id="CT-filter-checkbox"]').eq(0).click()
        cy.get('#search-result-product-list-36140 > ._1nvnchg4 > ._15r4f4dg9 > #base').should('contain.text','Women')
    });

    //Test Case Filter search result for women
    it('Should filter the search result for men', () => {
        cy.searchItem('nike{enter}')
        cy.wait(5000)
        cy.get('[data-test-id="CT-filter-checkbox"]').eq(1).click()
        cy.get('#search-result-product-list-43056 > ._1nvnchg4 > ._15r4f4dg9 > #base').should('contain.text','Men')
    });

    //Test Case Filter search result for women
    it('Should filter the search result for kids', () => {
        cy.searchItem('nike{enter}')
        cy.wait(5000)
        cy.get('[data-test-id="CT-filter-checkbox"]').eq(2).click()
        cy.get('._15r4f4dg9 > #base').should('contain.text','Kids')
    });

});