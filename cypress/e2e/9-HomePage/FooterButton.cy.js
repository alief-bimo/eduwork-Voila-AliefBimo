/// <reference types="cypress"/>

describe('Validate the function of buttons on footer', () => {
    beforeEach(() => {
        cy.visit('https://voila.id/') 
    });

    //TestCase About voilà.id Button
    it('Should verify About voilà.id button', () => {
        cy.wait(8000)
        cy.get(':nth-child(2) > :nth-child(2) > .rdkhex7').click()
        cy.url().should('include','/about')
        cy.get('.pt-8 > .text-black90').should('have.text', 'About voilà.id')
    });

    //TestCase Our Boutiques Button
    it('Should verify Our Boutiques button', () => {
        cy.wait(8000)
        cy.get(':nth-child(2) > :nth-child(3) > .rdkhex7').click()
        cy.url().should('include','/our-boutiques')
        cy.get('h1').should('have.text', 'Find Our Flagship Boutiques')
    });

    //TestCase Our Blog Button
    it('Should verify Our Blog button', () => {
        cy.wait(8000)
        cy.get(':nth-child(2) > :nth-child(4) > .rdkhex7').click()
        cy.url().should('eq','https://edit.voila.id/')
        //cy.get('h1').should('have.text', 'Find Our Flagship Boutiques')
    });

    //TestCase Our Promotions Button
    it('Should verify About Our Promotions button', () => {
        cy.wait(8000)
        cy.get(':nth-child(2) > :nth-child(5) > .rdkhex7').click()
        cy.url().should('include','/promotions')
        //cy.get('h1').should('have.text', 'Find Our Flagship Boutiques')
    });

    //TestCase Our Programs & Partnership Button
    it('Should verify Programs & Partnership button', () => {
        cy.wait(8000)
        cy.get(':nth-child(6) > .rdkhex7').click()
        cy.url().should('include','/programs-and-partnerships')
        cy.get(':nth-child(3) > ._15kd2we1f4 > #base').should('have.text', 'Programs and Partnerships')
    });

    //TestCase Shop by Request Button
    it('Should verify Shop by Request button', () => {
        cy.wait(8000)
        cy.get(':nth-child(7) > .rdkhex7').click()
        cy.url().should('include','/shop-by-request')
        cy.get('h2').should('have.text', 'Shop by Request')
    });

    //TestCase Careers Button
    it('Should verify Careers button', () => {
        cy.wait(8000)
        cy.get(':nth-child(8) > .rdkhex7').click()
        cy.url().should('eq','https://ctlyst.freshteam.com/jobs')
        cy.get('h3').should('have.text', 'Open Positions')
    });

    //TestCase voilà.id x Kaya Leathers Button
    it('Should verify voilà.id x Kaya Leathers button', () => {
        cy.wait(8000)
        cy.get(':nth-child(9) > .rdkhex7').click()
        cy.url().should('eq','https://edit.voila.id/voila-kaya/')
        cy.get('p').should('contain.text', 'Founded in 2018, Kaya Leathers is a company that provides')
    });

    //TestCase Contact Us Button
    it('Should verify Contact Us button', () => {
        cy.wait(8000)
        cy.get(':nth-child(3) > :nth-child(2) > .rdkhex7').click()
        cy.url().should('include','/contact')
        cy.get('h1').should('have.text', 'Contact Us')
    });

    //TestCase Help Center Button
    it('Should verify Help Center button', () => {
        cy.wait(8000)
        cy.get(':nth-child(3) > :nth-child(3) > .rdkhex7').click()
        cy.url().should('eq','https://helpcenter.voila.id/hc/id')
        cy.get('.header-content-title').should('have.text', 'Halo, apa yang bisa kami bantu?')
    });

    //TestCase About Terms & Conditions
    it('Should verify Terms & Conditions button', () => {
        cy.wait(8000)
        cy.get(':nth-child(3) > :nth-child(4) > .rdkhex7').click()
        cy.url().should('eq','https://edit.voila.id/terms-and-conditions/')
        cy.get('h1').should('have.text', 'Terms and Conditions')
    });

     //TestCase About Privacy Policy
     it('Should verify Privacy Policy button', () => {
        cy.wait(8000)
        cy.get(':nth-child(3) > :nth-child(5) > .rdkhex7').click()
        cy.url().should('eq','https://edit.voila.id/privacy-policy/')
        cy.get('h1').should('have.text', 'Privacy Policy')
    });


});