const register = require('./users.json')

describe('Signup', () => {
    beforeEach(() => {
        cy.visit('/signup')
    })

    it('Signup with valid credentials', () => {
        cy.get('[name="firstName"]').type(register.signUpUser.firstName)
        cy.get('[name="lastName"]').type(register.signUpUser.lastName)
        cy.get('[name="username"]').type(register.signUpUser.username)
        cy.get('[name="password"]').type(register.signUpUser.password)
        cy.get('[name="confirmPassword"]').type(register.signUpUser.password)
        cy.get('[type="submit"]').click()
        cy.get('[href="/signup"]').should('be.visible')
        })

    })