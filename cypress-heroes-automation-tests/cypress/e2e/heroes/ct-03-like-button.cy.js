import LoginPage from '../../pages/loginPage'
import userData from '../../fixtures/userData.json'
import LikeHeroPage from '../../pages/likeHeroPage'

const loginPage = new LoginPage()
const likeHeroPage = new LikeHeroPage()

describe('CT-03 - Like hero', () => {

  beforeEach(() => {
    loginPage.visitHomePage()
    loginPage.openLoginPage()
    loginPage.login(userData.userDefault.username, userData.userDefault.password)
  })

  it('should like a hero successfully', () => {
    likeHeroPage.clickLikeButton()
  })
})