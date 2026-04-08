import LoginPage from '../../pages/loginPage'
import userData from '../../fixtures/userData.json'
import HireHeroPage from '../../pages/hireHeroPage'

const loginPage = new LoginPage()
const hireHeroPage = new HireHeroPage()

describe('CT-08 - Hire hero as default user', () => {

  beforeEach(() => {
    loginPage.visitHomePage()
    loginPage.openLoginPage()
    loginPage.login(userData.userDefault.username, userData.userDefault.password)
  })

  it('should hire a hero successfully as a default user', () => {
    hireHeroPage.clickHireButton()
    hireHeroPage.confirmHireAsDefaultUser()
  })
})