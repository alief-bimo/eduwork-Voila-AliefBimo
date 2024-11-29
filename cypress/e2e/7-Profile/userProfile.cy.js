/// <reference types="cypress"/>

describe('Automate change user profile on voila', () => {
    beforeEach(() => {
        cy.visit('https://voila.id/account/login')
        cy.fixture("validUser").then(user=> {
            const email = user.email
            const password = user.password

            cy.login(email,password)
        })
    });

    it('Should change profile name', () => {
        cy.wait(5000)
        cy.get('[data-test-id="CT_Component_ProfileMenu"]').click()
        cy.get(':nth-child(1) > .j1jih7a0 > .j1jih72x > #base').click()
        cy.wait(5000)
        cy.get('[data-test-id="CT_component_firstName_input"]').clear().type('John')
        cy.get('[data-test-id="CT_component_lastName_input"]').clear().type('Doe')
        cy.get('[data-test-id="CT_component_onboarding_submit"]').click()
        cy.get(':nth-child(1) > :nth-child(3) > :nth-child(2) > ._15kd2weog > #base').should('have.text', 'John')
        cy.get(':nth-child(4) > :nth-child(2) > ._15kd2weog > #base').should('have.text', 'Doe')
    });
});