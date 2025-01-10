/// <reference types="cypress"/>

describe('add item to cart Voila', () => {
    beforeEach(() => {
        cy.visit('https://voila.id/account/login')
        cy.fixture("validUser").then(user => {
            const email = user.email
            const password = user.password

            cy.login(email,password)
        })
    });

    it('Should verify share button', () => {
        cy.wait(8000)
        cy.get('#last-thing-viewed-46558').click()
        cy.wait(5000)
        cy.get('[data-test-id="CT-Component-PDP-Share"]').click({force: true})
        cy.get('p').should('contain.text', 'Share to your friends 🛍')
    });

   
});