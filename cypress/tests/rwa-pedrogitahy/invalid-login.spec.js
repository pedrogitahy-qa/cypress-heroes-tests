const user = require('./users.json')

describe('Unsuccessful Login', () => {
    beforeEach(() => {
        cy.visit('/login')
    })

    it('Login with wrong username or password', () => {
        cy.get('input[name="username"]').type(user.invalidUser.username)
        cy.get('input[name="password"]').type(user.invalidUser.password)
        cy.get('button[type="submit"]').click()
        cy.get('[role="alert"]').contains('Username or password is invalid').should('be.visible')
    })
})