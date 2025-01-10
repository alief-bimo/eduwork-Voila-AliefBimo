// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username, password) => {
    cy.clearCookies()
    cy.clearLocalStorage()

    cy.get('[data-test-id="CT_component_login_input"]').clear({force: true})
    cy.get('[data-test-id="CT_component_login_input"]').type(username)
    //cy.get('[data-test-id="CT_component_login_input"]').should('have.value', username)
    
    cy.get('[data-test-id="CT_component_password_input"]').clear({force: true})
    cy.get('[data-test-id="CT_component_password_input"]').type(password)
    //cy.get('[data-test-id="CT_component_password_input"]').should('have.value', password)

    cy.get('[data-test-id="CT_component_login_submit"]').click({force: true})
})

Cypress.Commands.add('addToCart', (product) => {
    cy.get('p').contains('Buy now before it runs out, no regret!').scrollIntoView()
    cy.get(product).click({force: true})
    cy.wait(10000)
    cy.get('[data-test-id="CT-add-to-bag-desktop"]').click({force: true})
    cy.wait(5000)
    cy.get('[data-test-id="CT-Go-To-Cart"]').click({force: true})
    cy.wait(10000)
})

Cypress.Commands.add('searchItem', (keyword) => {
    cy.wait(5000)
    cy.get('[data-test-id="CT-Search"]').click({force: true})
    cy.get('[data-test-id="CT-Search-Input"]').type(keyword, { force: true })
})

Cypress.Commands.add('register', (username,password) => {
    cy.get('[data-test-id="CT_component_identifier_input"]').clear({force: true})
    cy.get('[data-test-id="CT_component_identifier_input"]').type(username, {force: true})
    
    cy.get('[data-test-id="CT_component_password_input"]').clear({force: true})
    cy.get('[data-test-id="CT_component_password_input"]').type(password, {force: true})
})