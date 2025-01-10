/// <reference types="cypress"/>

describe('Validate the function of buttons on navbar', () => {
    beforeEach(() => {
        cy.visit('https://voila.id/')
        
    });

    //Test Case Preloved Button
    it('Should verify preloved button', () => {
        cy.wait(8000)
        cy.get('[data-test-id="CT_home_navbar_second-tier-button-16"]').click({force: true})
        cy.url().should('include','/collections/women-s-preloved-713')
    });

    //Test Case PreOrder Button
    it('Should verify preorder button', () => {
        cy.wait(8000)
        cy.get('[data-test-id="CT_home_navbar_second-tier-button-15"]').click({force: true})
        cy.url().should('include','/collections/women-s-preorder-712')
        cy.get('#plp-product-list-48270').should('contain.text','Preorder')
    });

    //Test Case Watches Button
    it('Should verify watches button', () => {
        cy.wait(8000)
        cy.get('[data-test-id="CT_home_navbar_second-tier-button-14"]').click({force: true})
        cy.url().should('include','/gender/women-s-watches-591')
        cy.get('h1').should('have.text', "Women's Watches")
        //cy.get('#plp-product-list-48270').should('contain.text','Preorder')
    });

    //Test Case Hermes Button
    it('Should verify Hermès button', () => {
        cy.wait(8000)
        cy.get('[data-test-id="CT_home_navbar_second-tier-button-13"]').click({force: true})
        cy.url().should('include','/collections/women-s-hermes-collection-762')
        cy.get('[data-test-id="collection-page-desktop"] > :nth-child(1) > ._15r4f4df').should('contain.text','Hermès')
    });

    //Test Case Accessories Button
    it('Should verify Accessories button', () => {
        cy.wait(8000)
        cy.get('[data-test-id="CT_home_navbar_second-tier-button-12"]').click({force: true})
        cy.url().should('include','/gender/women-s-accessories-352')
        cy.get('h1').should('have.text',"Women's Accessories")
    });

});
