import LoginPage from '../../pages/loginPage'
import userData from '../../fixtures/userData.json'
import HireHeroPage from '../../pages/hireHeroPage'

const loginPage = new LoginPage()
const hireHeroPage = new HireHeroPage()

describe('CT-07 - Hire hero as admin', () => {

  beforeEach(() => {
    loginPage.visitHomePage()
    loginPage.openLoginPage()
    loginPage.login(userData.userAdmin.username, userData.userAdmin.password)
  })

  it('should hire a hero successfully as admin', () => {
    hireHeroPage.clickHireButton()
    hireHeroPage.confirmHireAsAdmin()
  })
})