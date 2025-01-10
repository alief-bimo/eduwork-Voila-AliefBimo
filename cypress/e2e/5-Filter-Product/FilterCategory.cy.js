/// <reference types="cypress" />

describe('Automate Filter based on gender Viola', () => {
    beforeEach(() => {
        cy.visit('https://voila.id/')
    });

    //Test Case Filter search result based on shoes category
    it('Should filter the search result based on shoes category', () => {
        cy.searchItem('nike{enter}')
        cy.wait(5000)
        cy.get('[data-test-id="CT-filter-checkbox"]').eq(8).click({force: true})
        cy.get('._10le3lp0').should('have.text','Shoes')
        //cy.get('#search-result-product-list-36140 > ._1nvnchg4 > ._15r4f4dg9 > #base').should('contain.text','Women')
    });

    //Test Case Filter search result based on watches category
    it('Should filter result based on watches category', () => {
        cy.searchItem('nike{enter}')
        cy.wait(5000)
        cy.get('[data-test-id="CT-filter-checkbox"]').eq(9).click({force: true})
        cy.get('._10le3lp0').should('have.text','Watches')
        //cy.get('#search-result-product-list-43056 > ._1nvnchg4 > ._15r4f4dg9 > #base').should('contain.text','Men')
    });

    //Test Case Filter search result based on clothes category
    it('Should filter result based on clothes category', () => {
        cy.searchItem('nike{enter}')
        cy.wait(5000)
        cy.get('[data-test-id="CT-filter-checkbox"]').eq(10).click({force: true})
        cy.get('._10le3lp0').should('have.text','Clothes')
        //cy.get('#search-result-product-list-43056 > ._1nvnchg4 > ._15r4f4dg9 > #base').should('contain.text','Men')
    });

    //Test Case Filter search result based on bags category
    it('Should filter result based on bags category', () => {
        cy.searchItem('nike{enter}')
        cy.wait(5000)
        cy.get('[data-test-id="CT-filter-checkbox"]').eq(11).click({force: true})
        cy.get('._10le3lp0').should('have.text','Bags')
        //cy.get('#search-result-product-list-43056 > ._1nvnchg4 > ._15r4f4dg9 > #base').should('contain.text','Men')
    });

});