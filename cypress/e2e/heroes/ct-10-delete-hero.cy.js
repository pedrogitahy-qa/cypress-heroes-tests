import LoginPage from '../../pages/loginPage'
import userData from '../../fixtures/userData.json'
import DeleteHeroPage from '../../pages/deleteHeroPage'

const loginPage = new LoginPage()
const deleteHeroPage = new DeleteHeroPage()

describe('CT-10 - Delete hero', () => {

  beforeEach(() => {
    loginPage.visitHomePage()
    loginPage.openLoginPage()
    loginPage.login(userData.userAdmin.username, userData.userAdmin.password)
  })

  it('should delete a hero successfully', () => {
    deleteHeroPage.clickDeleteButton()
    deleteHeroPage.confirmDelete()
  })
})