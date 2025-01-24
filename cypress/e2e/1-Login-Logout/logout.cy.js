/// <reference types= "cypress" />

describe('Logout on Voila', () => {

    before(() => {
        cy.visit('https://voila.id/account/login')
    });

    it('Logout account on voila', () => {
        cy.fixture("validUser").then(user => {
            const email = user.email
            const password = user.password

            cy.login(email,password)
            cy.wait(5000)
            cy.get('._3syuln4 > a > #base').click()
            cy.wait(5000)
            cy.get('[data-test-id="Container_Logout"] > ._1ugu32j0 > ._1ugu32j1').click({force: true})
            cy.get('[data-test-id="CT_SignOut_Confirm"]').click({force: true})
            cy.url().should('eq', 'https://voila.id/');
            cy.get('[data-test-id="CT-SignIn-Btn"]').should('be.visible')
            
        })
    });
});