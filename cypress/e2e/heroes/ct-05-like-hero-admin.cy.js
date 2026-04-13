import LoginPage from '../../pages/loginPage'
import userData from '../../fixtures/userData.json'
import LikeHeroPage from '../../pages/likeHeroPage'

const loginPage = new LoginPage()
const likeHeroPage = new LikeHeroPage()

describe('CT-05 - Like hero as admin', () => {

  beforeEach(() => {
    loginPage.visitHomePage()
    loginPage.openLoginPage()
    loginPage.login(userData.userAdmin.username, userData.userAdmin.password)
  })

  it('should like a hero successfully as admin', () => {
    likeHeroPage.clickLikeButton()
  })
})