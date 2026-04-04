const user = require('./users.json')

describe('Transaction History - Existing User', () => {
  beforeEach(() => {
    cy.visit('/login')
  })

  it('should show transaction history for user with transactions', () => {
    cy.get('input[name="username"]').type(user.validUser.username)
    cy.get('input[name="password"]').type(user.validUser.password)
    cy.get('button[type="submit"]').click()

    cy.contains('Mine').click()
    cy.get('[data-test="transaction-list"]').should('be.visible')
  })
})