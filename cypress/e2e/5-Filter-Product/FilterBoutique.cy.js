/// <reference types="cypress" />

describe('Automate Filter based on Boutique Availability Viola', () => {
    beforeEach(() => {
        cy.visit('https://voila.id/')
        // cy.fixture("validUser").then(user => {
        //     const email = user.email
        //     const password = user.password

        //     cy.login(email,password)
        // }) 
    });

    //Test Case filter the search result based on item available on Jakarta - Mall of Indonesia Boutique
    it('Should filter the search result based on item available on Jakarta - Mall of Indonesia Boutique', () => {
        cy.searchItem('nike{enter}')
        cy.wait(6000)
        cy.get('[data-test-id="CT-filter-checkbox"]').eq(4).click({force: true})
       
        cy.get('#search-result-product-list-47849').click({force: true})
        cy.wait(7000)
        cy.get('.j1jih78w > .j1jih72x > ._1ccbe2wb').should('have.text', 'Jakarta - Mall of Indonesia Boutique')
        //cy.get('#search-result-product-list-36140 > ._1nvnchg4 > ._15r4f4dg9 > #base').should('contain.text','Women')
    });

    //Test Case filter the search result based on item available on Jakarta - Pantai Indah Kapuk Boutique
    it('Should filter the search result based on item available on Jakarta - Pantai Indah Kapuk Boutique', () => {
        cy.searchItem('nike{enter}')
        cy.wait(6000)
        cy.get('[data-test-id="CT-filter-checkbox"]').eq(5).click({force: true})
        cy.get('p').contains('1 Low SE Phantom Repaired Denim Swoosh Men').click({force: true})
        cy.wait(7000)
        cy.get('.j1jih78w > .j1jih72x > ._1ccbe2wb').should('have.text', 'Jakarta - Pantai Indah Kapuk Boutique')
        //cy.get('#search-result-product-list-36140 > ._1nvnchg4 > ._15r4f4dg9 > #base').should('contain.text','Women')
    });

    // //Test Case filter the search result based on item available on Jakarta - Pondok Indah Boutique
    it('Should filter the search result based on item available on Jakarta - Pondok Indah Boutique', () => {
        cy.searchItem('nike{enter}')
        cy.wait(6000)
        cy.get('[data-test-id="CT-filter-checkbox"]').eq(6).click({force: true})
        cy.get('#search-result-product-list-43056 > ._1nvnchg4').click({force: true})
        cy.wait(7000)
        cy.get('.j1jih78w > .j1jih72x > ._1ccbe2wb').should('have.text', 'Jakarta - Pondok Indah Boutique')
        //cy.get('#search-result-product-list-36140 > ._1nvnchg4 > ._15r4f4dg9 > #base').should('contain.text','Women')
    });

    // //Test Case filter the search result based on item available on Surabaya - Bukit Darmo Golf Boutique
    it('Should filter the search result based on item available on Surabaya - Bukit Darmo Golf Boutique', () => {
        cy.searchItem('nike{enter}')
        cy.wait(6000)
        cy.get('[data-test-id="CT-filter-checkbox"]').eq(7).click({force: true})
        cy.get('#search-result-product-list-2760 > ._1nvnchg4').click({force: true})
        cy.wait(7000)
        cy.get('.j1jih78w > .j1jih72x > ._1ccbe2wb').should('have.text', 'Surabaya - Bukit Darmo Golf Boutique')
        //cy.get('#search-result-product-list-36140 > ._1nvnchg4 > ._15r4f4dg9 > #base').should('contain.text','Women')
    });

});