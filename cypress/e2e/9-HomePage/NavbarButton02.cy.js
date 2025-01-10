/// <reference types="cypress"/>

describe('Validate the function of buttons on navbar', () => {
    beforeEach(() => {
        cy.visit('https://voila.id/')
        
    });

    //Test Case Clothing Button
    it('Should verify Clothing button', () => {
        cy.wait(8000)
        cy.get('[data-test-id="CT_home_navbar_second-tier-button-11"]').click({force: true})
        cy.url().should('include','/gender/women-s-clothes-314')
        cy.get('h1').should('have.text',"Women's Clothes")
    });

    //Test Case Shoes Button
    it('Should verify Shoes button', () => {
        cy.wait(8000)
        cy.get('[data-test-id="CT_home_navbar_second-tier-button-10"]').click({force: true})
        cy.url().should('include','/gender/women-s-shoes-507')
        cy.get('h1').should('have.text',"Women's Shoes")
    });

    //Test Case Bags Button
    it('Should verify Bags button', () => {
        cy.wait(8000)
        cy.get('[data-test-id="CT_home_navbar_second-tier-button-9"]').click({force: true})
        cy.url().should('include','/gender/women-s-bags-315')
        cy.get('h1').should('have.text',"Women's Bags")
    });

    //Test Case New Arrival Button
    it('Should verify New Arrival button', () => {
        cy.wait(8000)
        cy.get('[data-test-id="CT_home_navbar_second-tier-button-8"]').click({force: true})
        cy.url().should('include','/collections/women-s-new-arrivals-704')
        cy.get('h1').should('have.text',"Women's New Arrivals")
        //cy.get
    });

    //Test Case Limited Offers Button
    it('Should verify Limited Offers button', () => {
        cy.wait(8000)
        cy.get('[data-test-id="CT_home_navbar_second-tier-button-7"]').click({force: true})
        cy.url().should('include','/promotions')
        cy.get('h1').should('have.text',"Bank Offers")
        //cy.get
    });

});
