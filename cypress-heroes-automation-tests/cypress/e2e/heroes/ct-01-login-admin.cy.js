import LoginPage from '../../pages/loginPage'
import userData from '../../fixtures/userData.json'

const loginPage = new LoginPage()

describe('CT-01 - Admin login', () => {
  it('should log in successfully as admin', () => {
    loginPage.visitHomePage()
    loginPage.openLoginPage()
    loginPage.login(userData.userAdmin.username, userData.userAdmin.password)
    })
})