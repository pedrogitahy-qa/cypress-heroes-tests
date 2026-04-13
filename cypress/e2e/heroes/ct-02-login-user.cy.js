import LoginPage from '../../pages/loginPage'
import userData from '../../fixtures/userData.json'

const loginPage = new LoginPage()

describe('CT-02 - Default user login', () => {
  it('should log in successfully as a default user', () => {
    loginPage.visitHomePage()
    loginPage.openLoginPage()
    loginPage.login(userData.userDefault.username, userData.userDefault.password)
  })
})