import LoginPage from '../../pages/loginPage'
import userData from '../../fixtures/userData.json'
import HireHeroPage from '../../pages/hireHeroPage'

const loginPage = new LoginPage()
const hireHeroPage = new HireHeroPage()

describe('CT-04 - Hire hero', () => {

  beforeEach(() => {
    loginPage.visitHomePage()
    loginPage.openLoginPage()
    loginPage.login(userData.userDefault.username, userData.userDefault.password)
  })


  it('should open the hire confirmation modal', () => {
    hireHeroPage.clickHireButton()
    cy.contains('h3', 'Hire Hero?').should('be.visible')
    cy.contains('button', 'Yes').should('be.visible')
    cy.contains('button', 'No').should('be.visible')
  })

})