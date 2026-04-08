import LoginPage from '../../pages/loginPage'
import userData from '../../fixtures/userData.json'
import LikeHeroPage from '../../pages/likeHeroPage'

const loginPage = new LoginPage()
const likeHeroPage = new LikeHeroPage()

describe('CT-06 - Like hero as default user', () => {

  beforeEach(() => {
    loginPage.visitHomePage()
    loginPage.openLoginPage()
    loginPage.login(userData.userDefault.username, userData.userDefault.password)
  })

  it('should like a hero successfully as a default user', () => {
    likeHeroPage.clickLikeButton()
  })
})