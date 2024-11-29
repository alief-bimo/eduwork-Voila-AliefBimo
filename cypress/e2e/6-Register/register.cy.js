/// <reference types="cypress" />

describe('Automate Register on Voila', () => {
    beforeEach(() => {
        cy.visit('https://voila.id/account/register')
    });

     //Test Case Register with invalid registered email
    it('Should register with already registered email', () => {
        cy.fixture("validUser").then(user => {
            const email = user.email
            const password = user.password

            cy.register(email, password)
            cy.get('[data-test-id="CT_component_register_submit"]').click()
            cy.url().should('include','account/login')
        })
    });

     //Test Case Register with invalid email
    it('Should register with invalid email', () => {
        cy.fixture("invalidEmail").then(user => {
            const email = user.email
            const password = user.password

            cy.register(email, password)
            cy.get('.j1jih7ak > :nth-child(1) > ._15kd2weg > #base').should('have.text','Please enter a valid email format or phone number.')
            //cy.url().should('include','account/login')
        })
    });

    //Test Case Register with invalid password
    it('Should register with invalid password', () => {
        cy.fixture("invalidPassword").then(user => {
            const email = user.email
            const password = user.password

            cy.register(email, password)
            cy.get('[data-test-id="CT_component_identifier_input"]').click()
            cy.get(':nth-child(3) > ._1kg30950 > .j1jih7ak > :nth-child(1) > ._15kd2weg > #base').should('have.text','Password must be at least 6 characters with uppercase letters, lowercase letters, and numbers.')
            //cy.url().should('include','account/login')
        })
    });

    //Test Case Register with valid format
    it('Should register with valid format', () => {
        cy.fixture("registerCred").then(user => {
            const email = user.email
            const password = user.password

            cy.register(email, password)
            cy.get('[data-test-id="CT_component_register_submit"]').click()
            cy.get('p').should('contain.text','Enter the verification code we sent to your registered email.') 
            //cy.get(':nth-child(3) > ._1kg30950 > .j1jih7ak > :nth-child(1) > ._15kd2weg > #base').should('have.text','Password must be at least 6 characters with uppercase letters, lowercase letters, and numbers.')
            //cy.url().should('include','account/login')
        })
    });
});
