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

  it('should hire a hero successfully', () => {
    hireHeroPage.clickHireButton()
  })
})