/// <reference types="cypress"/>

describe('automate cart on Voila', () => {
    beforeEach(() => {
        cy.visit('https://voila.id/account/login')
        cy.fixture("validUser").then(user => {
            const email = user.email
            const password = user.password

            cy.login(email,password)
        })
    });

    //Test Case Check Total Cost
    it('Should check the total cost of item in cart', () => {
        cy.wait(10000)
        cy.addToCart('#last-thing-viewed-46558')
        cy.wait(10000)
        cy.get('.j1jih7a0 > .j1jih72n > #base').should('have.text', 'Rp8.900.000')
        cy.get('[data-test-id="CT_Container_NumberStepper_Increase0"]').click({force: true})
        cy.get('.j1jih7a0 > .j1jih72n > #base').should('have.text', 'Rp17.800.000')
        cy.wait(10000)
        //cy.get('[data-test-id="CT_Component_removeCart0"]').click()
    });

    //Test Case Empty Cart
    it('Should Remove All item from cart', () => {
        cy.wait(8000)
        cy.get('[data-test-id="CT-Go-To-Cart"]').click()
        cy.get('[data-test-id="CT_Component_checkboxSelectAll"]').
        then(($el) => {
            if ($el.attr('aria-checked') !== 'true') {
              cy.wrap($el).click();
            }
        });
        cy.get('[data-test-id="CT_Component_removeSelectedCart"]').click({force: true})
        cy.wait(2000)
        cy.get('[data-test-id="CT_Component_ConfirmContent_Ok"]').click({force: true})
        cy.get('.j1jih78w > ._17zx15te8').should('have.text','Your shopping bag is empty')
    });


});