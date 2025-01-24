/// < reference types="cypress" />

describe('dummy testing Voila', () => {
    before(() => {
        cy.visit('https://voila.id')
    });
    it('Should Login with valid credentials', () => {
        //cy.visit('https://voila.id')
        const email = "aliefbimo04@gmail.com"
        const password = "password"

        cy.get('#SigninButton').click()
        cy.wait(5000)
        cy.get('#emailForm').type(email)
        cy.get('#passwordForm').type(password)
        cy.get('#loginButton').click()
        cy.wait(5000)
        cy.get('#profileButton').should('have.text', 'Alief Bimo')
    });
});