const user = require('./users.json');

describe('Successful Login', () => {
    beforeEach(() => {
        cy.visit('/login')
    })
    it('Login with valid username and password', () => {
    cy.get('input[name="username"]').type(user.validUser.username)
    cy.get('input[name="password"]').type(user.validUser.password)
    cy.get('button[type="submit"]').click()
    cy.get('[fill-rule="nonzero"]').should('be.visible')
    })
})