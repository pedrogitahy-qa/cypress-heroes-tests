const user = require('./users.json')

describe('Send Money - Insufficient funds', () => {
  beforeEach(() => {
    cy.visit('/login')
  })

  it('incorrectly allows payment with insufficient funds', () => {
    cy.get('input[name="username"]').type(user.validUser.username)
    cy.get('input[name="password"]').type(user.validUser.password)
    cy.get('button[type="submit"]').click()

    cy.get('[data-test="nav-top-new-transaction"]').should('be.visible').click()

    cy.get('[data-test="user-list-search-input"]')
      .should('be.visible')
      .click({ force: true })
      .type('Ted Parisian', { force: true })

    cy.contains('Ted Parisian').click()

    cy.get('input[name="amount"]').type('5000')
    cy.get('#transaction-create-description-input').type('Test insufficient funds')

    cy.contains('button', 'Pay').click()

    cy.contains('Test insufficient funds').should('be.visible')
  })
})