/// <reference types="cypress" />

describe('Automate Sort Item on Viola', () => {
    beforeEach(() => {
        cy.visit('https://voila.id')
        // cy.fixture("validUser").then(user => {
        //     const email = user.email
        //     const password = user.password

        //     cy.login(email,password)
        // }) 
    });

    it('Should sort the item base on lowest price', () => {
        cy.searchItem('nike{enter}')
        cy.wait(5000)
        
        cy.get('[data-test-id="CT-PLP-filter-show-more"]').click()
        cy.get('[data-test-id="sort-dropdown"]').click()
        cy.get('input[value="Lowest Price"]').click()
        //cy.get('#price-input').eq(0).clear().type()
        //cy.get('[data-test-id="CT_Component_IconChev"]').click()
        

    });

});