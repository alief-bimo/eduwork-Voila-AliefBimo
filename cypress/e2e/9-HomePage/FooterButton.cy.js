/// <reference types="cypress"/>

describe('Validate the function of buttons on footer', () => {
    beforeEach(() => {
        cy.visit('https://voila.id/') 
    });

    //TestCase About voilà.id Button
    // it('Should verify About voilà.id button', () => {
    //     cy.wait(8000)
    //     cy.get(':nth-child(2) > :nth-child(2) > .rdkhex7').click()
    //     cy.url().should('include','/about')
    //     cy.get('.pt-8 > .text-black90').should('have.text', 'About voilà.id')
    // });

    //TestCase About Our Boutiques Button
    // it('Should verify About Our Boutiques button', () => {
    //     cy.wait(8000)
    //     cy.get(':nth-child(2) > :nth-child(3) > .rdkhex7').click()
    //     cy.url().should('include','/our-boutiques')
    //     cy.get('h1').should('have.text', 'Find Our Flagship Boutiques')
    // });

    //TestCase About Our Blog Button
    // it('Should verify About Our Blog button', () => {
    //     cy.wait(8000)
    //     cy.get(':nth-child(2) > :nth-child(4) > .rdkhex7').click()
    //     cy.url().should('eq','https://edit.voila.id/')
    //     //cy.get('h1').should('have.text', 'Find Our Flagship Boutiques')
    // });

    //TestCase About Our Promotions Button
    // it('Should verify About Our Promotions button', () => {
    //     cy.wait(8000)
    //     cy.get(':nth-child(2) > :nth-child(5) > .rdkhex7').click()
    //     cy.url().should('include','/promotions')
    //     //cy.get('h1').should('have.text', 'Find Our Flagship Boutiques')
    // });

    //TestCase About Our Programs & Partnership Button
    // it('Should verify About Programs & Partnership button', () => {
    //     cy.wait(8000)
    //     cy.get(':nth-child(6) > .rdkhex7').click()
    //     cy.url().should('include','/programs-and-partnerships')
    //     cy.get(':nth-child(3) > ._15kd2we1f4 > #base').should('have.text', 'Programs and Partnerships')
    // });

    it('Should verify About Contact Us button', () => {
        cy.wait(8000)
        cy.get(':nth-child(3) > :nth-child(2) > .rdkhex7').click()
        cy.url().should('include','/contact')
        cy.get('h1').should('have.text', 'Contact Us')
    });


});