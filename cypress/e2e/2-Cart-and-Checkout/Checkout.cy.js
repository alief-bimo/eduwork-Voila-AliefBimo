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
        cy.addToCart('#splide06-slide01 > ._15r4f4d16d > a > #last-thing-viewed-2760 > ._1nvnchg4')

        //cy.get('#splide18-slide01 > ._15r4f4d16d > a > #last-thing-viewed-2760 > ._1nvnchg4')
        cy.wait(8000)
        cy.get('[data-test-id="CT_Component_btnCheckout"]').click()
        cy.wait(3000)

        //Shipping Service
        cy.get('#shipping-list > ._15kd2we5s').click()
        cy.get('[data-test-id="CT_component_shipping-item-item"]').eq(0).click()
        cy.get('button').contains('Confirm').click()
        cy.wait(3000)

        //Payment Method
        cy.get('#payment-list > ._15kd2we5s').click()
        cy.get('[data-test-id="CT_Component_PaymentGroup_ButtonPaymentGroup"]').eq(0).click()
        cy.get('p').contains('BRI Virtual Account').click()
        cy.get('button').contains('Confirm').click()
        cy.wait(3000)

        //Place Order
        cy.get('[data-test-id="CT_Component_btnPlaceOrder"]').click()
        cy.get('p').should('have.text','Order has been placed')
    });
});