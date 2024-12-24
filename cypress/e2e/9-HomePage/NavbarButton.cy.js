/// <reference types="cypress"/>

describe('Validate the function of buttons on navbar', () => {
    beforeEach(() => {
        cy.visit('https://voila.id/account/login')
        cy.fixture("validUser").then(user => {
            const email = user.email
            const password = user.password

            cy.login(email,password)
        }) 
        
    });

    //TestCase Home Button
    it('Should verify home button', () => {
        cy.wait(8000)
        cy.get('[data-test-id="CT-Go-To-Cart"]').click()
        cy.url().should('include','/cart')
        cy.get('[data-test-id="CT-Go-To-Default"]').eq(0).click()
        cy.url().should('include','/')
    });

    //Test Case Preloved Button
    it('Should verify preloved button', () => {
        cy.wait(8000)
        cy.get('[data-test-id="CT_home_navbar_second-tier-button-16"]').click()
        cy.url().should('include','/collections/women-s-preloved-713')
    });

    //Test Case PreOrder Button
    it('Should verify preorder button', () => {
        cy.wait(8000)
        cy.get('[data-test-id="CT_home_navbar_second-tier-button-15"]').click()
        cy.url().should('include','/collections/women-s-preorder-712')
        cy.get('#plp-product-list-48270').should('contain.text','Preorder')
    });

    //Test Case Watches Button
    it('Should verify watches button', () => {
        cy.wait(8000)
        cy.get('[data-test-id="CT_home_navbar_second-tier-button-14"]').click()
        cy.url().should('include','/gender/women-s-watches-591')
        cy.get('h1').should('have.text', "Women's Watches")
        //cy.get('#plp-product-list-48270').should('contain.text','Preorder')
    });

    //Test Case Hermes Button
    it('Should verify Hermès button', () => {
        cy.wait(8000)
        cy.get('[data-test-id="CT_home_navbar_second-tier-button-13"]').click()
        cy.url().should('include','/collections/women-s-hermes-collection-762')
        cy.get('#plp-product-list-48228 > ._1nvnchg4 > .j1jih7ap > ._17zx15te8 > #base').should('have.text','Hermès')
    });

    //Test Case Accessories Button
    it('Should verify Accessories button', () => {
        cy.wait(8000)
        cy.get('[data-test-id="CT_home_navbar_second-tier-button-12"]').click()
        cy.url().should('include','/gender/women-s-accessories-352')
        cy.get('h1').should('have.text',"Women's Accessories")
    });

    //Test Case Clothing Button
    it('Should verify Clothing button', () => {
        cy.wait(8000)
        cy.get('[data-test-id="CT_home_navbar_second-tier-button-11"]').click()
        cy.url().should('include','/gender/women-s-clothes-314')
        cy.get('h1').should('have.text',"Women's Clothes")
    });

    //Test Case Shoes Button
    it('Should verify Shoes button', () => {
        cy.wait(8000)
        cy.get('[data-test-id="CT_home_navbar_second-tier-button-10"]').click()
        cy.url().should('include','/gender/women-s-shoes-507')
        cy.get('h1').should('have.text',"Women's Shoes")
    });

    //Test Case Bags Button
    it('Should verify Bags button', () => {
        cy.wait(8000)
        cy.get('[data-test-id="CT_home_navbar_second-tier-button-9"]').click()
        cy.url().should('include','/gender/women-s-bags-315')
        cy.get('h1').should('have.text',"Women's Bags")
    });

    //Test Case New Arrival Button
    it('Should verify New Arrival button', () => {
        cy.wait(8000)
        cy.get('[data-test-id="CT_home_navbar_second-tier-button-8"]').click()
        cy.url().should('include','/collections/women-s-new-arrivals-704')
        cy.get('h1').should('have.text',"Women's New Arrivals")
        //cy.get
    });

    //Test Case Limited Offers Button
    it('Should verify Limited Offers button', () => {
        cy.wait(8000)
        cy.get('[data-test-id="CT_home_navbar_second-tier-button-7"]').click()
        cy.url().should('include','/promotions')
        cy.get('h1').should('have.text',"End Of Season Sale")
        //cy.get
    });




});
