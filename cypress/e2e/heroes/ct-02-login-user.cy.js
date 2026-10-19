import LoginPage from '../../pages/loginPage'
import userData from '../../fixtures/userData.json'

const loginPage = new LoginPage()

describe('CT-02 - Default user login', () => {
  it('should log in successfully as a default user', () => {
    loginPage.visitHomePage()
    loginPage.openLoginPage()
    loginPage.login(userData.userDefault.username, userData.userDefault.password)
    cy.contains('button', 'Logout').should('be.visible')
    cy.contains('button', 'Create New Hero').should('not.exist')
  })
})