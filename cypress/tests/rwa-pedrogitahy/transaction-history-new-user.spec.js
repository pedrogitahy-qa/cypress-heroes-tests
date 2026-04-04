describe('Transaction History - New User', () => {

  beforeEach(() => {
    cy.visit('/login')
  })

  it('should show empty transaction history for a new user', () => {

    const username = `pedrogitahy${Date.now()}`

    cy.contains("Don't have an account? Sign Up").click()

    cy.get('input[name="firstName"]').type('Pedro')
    cy.get('input[name="lastName"]').type('Gitahy')
    cy.get('input[name="username"]').type(username, { parseSpecialCharSequences: false })
    cy.get('input[name="password"]').type('pedro123')
    cy.get('input[name="confirmPassword"]').type('pedro123')

    cy.contains('button', 'Sign Up').click()

    // login após cadastro
    cy.get('input[name="username"]').should('be.visible').type(username)
    cy.get('input[name="password"]').type('pedro123')
    cy.get('button[type="submit"]').click()

    // primeiro passo onboarding
    cy.get('[data-test="user-onboarding-next"]').should('be.visible').click()

    // criar conta bancária
    cy.get('input[name="bankName"]').should('be.visible').type('GTH BANK')
    cy.get('input[name="routingNumber"]').type('123456789')
    cy.get('input[name="accountNumber"]').type('987654321')

    cy.contains('button', 'Save').click()

    // finalizar onboarding
    cy.contains('button', 'Done').click()

    // acessar histórico
    cy.contains('Mine').click()

    cy.contains('No Transactions').should('be.visible')
    cy.get('[data-test="transaction-list-empty-create-transaction-button"]').should('be.visible')

  })
})