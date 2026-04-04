const register = require('./users.json')

describe('Invalid SignUp', () => {
    beforeEach(() => {
        cy.visit('/signup')
    })

    it('Without first name', () => {
        cy.get('[name="lastName"]').type(register.signUpUser.lastName)
        cy.get('[name="username"]').type(register.signUpUser.username)
        cy.get('[name="password"]').type(register.signUpUser.password)
        cy.get('[name="confirmPassword"]').type(register.signUpUser.password)
        cy.get('[data-test="signup-first-name"]').contains('First Name is required').should('be.visible')
    })

    it('Without last name', () => {
        cy.get('[name="firstName"]').type(register.signUpUser.firstName)
        cy.get('[name="lastName"]').click()
        cy.get('[name="username"]').type(register.signUpUser.username)
        cy.get('[name="password"]').type(register.signUpUser.password)
        cy.get('[name="confirmPassword"]').type(register.signUpUser.password)
        cy.get('[data-test="signup-last-name"]').contains('Last Name is required').should('be.visible')
    })

    it('Without username', () => {
        cy.get('[name="firstName"]').type(register.signUpUser.firstName)
        cy.get('[name="lastName"]').type(register.signUpUser.lastName)
        cy.get('[name="username"]').click()
        cy.get('[name="password"]').type(register.signUpUser.password)
        cy.get('[name="confirmPassword"]').type(register.signUpUser.password)
        cy.get('[data-test="signup-username"]').contains('Username is required').should('be.visible')
    })
    
    it('Password at least four characters', () => {
        cy.get('[name="firstName"]').type(register.signUpUser.firstName)
        cy.get('[name="lastName"]').type(register.signUpUser.lastName)
        cy.get('[name="username"]').type(register.signUpUser.username)
        cy.get('[name="password"]').type(register.invalidCredentials.password)
        cy.get('[name="confirmPassword"]').type(register.invalidCredentials.password)
        cy.get('[data-test="signup-password"]').contains('Password must contain at least 4 characters').should('be.visible')
    })

    it('Password does not match', () => {
        cy.get('[name="firstName"]').type(register.signUpUser.firstName)
        cy.get('[name="lastName"]').type(register.signUpUser.lastName)
        cy.get('[name="username"]').type(register.signUpUser.username)
        cy.get('[name="password"]').type(register.signUpUser.password)
        cy.get('[name="confirmPassword"]').type(register.invalidCredentials.password)
        cy.get('[data-test="signup-confirmPassword"]').contains('Password does not match').should('be.visible')
    })

})


    