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

    it('Should checkout the item that was added to cart', () => {
        cy.wait(10000)
        cy.addToCart('#last-thing-viewed-2760')

        //cy.get('#splide18-slide01 > ._15r4f4d16d > a > #last-thing-viewed-2760 > ._1nvnchg4')
        cy.wait(8000)
        cy.get('[data-test-id="CT_Component_btnCheckout"]').click({force: true})
        cy.wait(3000)

        //Shipping Service
        cy.get('#shipping-list > ._15kd2we5s').click({force: true})
        cy.get('[data-test-id="CT_component_shipping-item-item"]').eq(0).click({force: true})
        cy.get('button').contains('Confirm').click({force: true})
        cy.wait(3000)

        //Payment Method
        cy.get('#payment-list > ._15kd2we5s').click({force: true})
        cy.get('[data-test-id="CT_Component_PaymentGroup_ButtonPaymentGroup"]').eq(0).click({force: true})
        cy.get('p').contains('BRI Virtual Account').click({force: true})
        cy.get('button').contains('Confirm').click({force: true})
        cy.wait(3000)

        //Place Order
        cy.get('[data-test-id="CT_Component_btnPlaceOrder"]').click({force: true})
        cy.get('p').should('contain.text','Order has been placed')
    });
});