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

    //Test Case Change Item amount
    it('Should change the item amount in cart', () => {
        cy.wait(10000)
        cy.addToCart('#last-thing-viewed-46558')
        cy.wait(10000)
        cy.get('[class="wovzo9l  _17zx15t1c _17zx15tg0"]').should('have.text', '1')
        cy.get('[data-test-id="CT_Container_NumberStepper_Increase0"]').click({force: true})
        cy.get('[class="wovzo9l  _17zx15t1c _17zx15tg0"]').should('have.text', '2')
        cy.wait(10000)
        cy.get('[data-test-id="CT_Component_removeCart0"]').click({force: true})
    });


});