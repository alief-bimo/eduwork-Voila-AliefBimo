/// <reference types= "cypress" />

describe('Logout on Voila', () => {

    before(() => {
        cy.visit('https://voila.id/account/login')
    });

    it('Logout account on voila', () => {
        cy.fixture("validUser").then(user => {
            const email = user.email
            const password = user.password

            cy.login(email,password, {delay:5000})
            cy.get('._3syuln4 > a > #base').click()
            cy.get('[data-test-id="Container_Logout"] > ._1ugu32j0 > ._1ugu32j1').click()
            cy.get('[data-test-id="CT_SignOut_Confirm"]').click()
            cy.url().should('include', '/');
            
        })
    });
});