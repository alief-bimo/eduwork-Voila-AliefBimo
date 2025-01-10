/// <reference types="cypress"/>

describe('Validate the function of Home button on navbar', () => {
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
        cy.get('[data-test-id="CT-Go-To-Cart"]').click({force: true})
        cy.url().should('include','/cart')
        cy.get('[data-test-id="CT-Go-To-Default"]').eq(0).click({force: true})
        cy.url().should('include','/')
    });
});