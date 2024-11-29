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
        cy.get('#splide06-slide01').click()
        cy.wait(5000)
        cy.get('[data-test-id="CT-Component-PDP-Share"]').click()
        cy.get('p').should('contain.text', 'Share to your friends 🛍')
    });

    it('Should verify Chat CS button', () => {
        cy.wait(8000)
        cy.get('#splide06-slide01').click()
        cy.wait(5000)
        cy.get('[data-test-id="CT-chat-cs"]').click()
        //cy.get('p').should('contain.text', 'Share to your friends 🛍')
        
    });

   
});