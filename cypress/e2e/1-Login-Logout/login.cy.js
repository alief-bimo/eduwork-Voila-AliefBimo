/// <reference types="cypress"/>

describe('Login on voila', () => {
    beforeEach(() => {
        cy.visit('https://voila.id/account/login')
    });

    it('Login with valid credentials', () => {
        cy.fixture("validUser").then(user=> {
            const email = user.email
            const password = user.password

            cy.login(email,password, {delay:5000})

            //cy.get('._15r4f4d15e > .j1jih78w > #base').should('be.visible').and('contain.text', 'Your account ID or password is incorrect. Please try again.')
        })
    });

    it("Login with wrong password", () => {
        cy.fixture("wrongPassword").then(user=> {
            const email = user.email
            const password = user.password

            cy.login(email,password)

            cy.get('._15r4f4d15e > .j1jih78w > #base').should('be.visible').and('contain.text', 'Your account ID or password is incorrect. Please try again.')
        })
    });

    it('Login with invalid email ', () => {
        cy.fixture("invalidEmail").then(user=> {
            const email = user.email

            cy.clearCookies()
            cy.clearLocalStorage()

            cy.get('[data-test-id="CT_component_login_input"]').clear()
            cy.get('[data-test-id="CT_component_login_input"]').type(email, {delay:100})

            cy.get('._15kd2wer4').click();

            cy.get('.j1jih7ak > :nth-child(1) > ._15kd2weg > #base').should('be.visible').and('contain.text','Please enter a valid email format or phone number.')

            //cy.get('._15r4f4d15e > .j1jih78w > #base').should('be.visible').and('contain.text', 'Your account ID or password is incorrect. Please try again.')
        })
    });

    it('Login with unregistered email', () => {
        cy.fixture("unregisteredEmail").then(user=> {
            const email = user.email

            cy.clearCookies()
            cy.clearLocalStorage()

            cy.get('[data-test-id="CT_component_login_input"]').clear()
            cy.get('[data-test-id="CT_component_login_input"]').type(email, {delay:100})

            cy.get('._920fuu5').should('be.enabled').click()

            cy.get(':nth-child(1) > :nth-child(1) > ._15kd2weog').should('contain.text','Register')

            //cy.get('._15r4f4d15e > .j1jih78w > #base').should('be.visible').and('contain.text', 'Your account ID or password is incorrect. Please try again.')
        })
    });

   
});