import LoginPage from '../../pages/loginPage'
import userData from '../../fixtures/userData.json'
import EditHeroPage from '../../pages/editHeroPage'

const Chance = require('chance')
const chance = new Chance()

const loginPage = new LoginPage()
const editHeroPage = new EditHeroPage()

describe('CT-11 - Edit hero', () => {
  beforeEach(() => {
    loginPage.visitHomePage()
    loginPage.openLoginPage()
    loginPage.login(userData.userAdmin.username, userData.userAdmin.password)
  })

  it('should edit a hero successfully', () => {
    editHeroPage.editHeroSuccessfully(
      chance.name(),
      chance.natural({ min: 1, max: 100 }),
      chance.natural({ min: 1, max: 100 }),
      chance.natural({ min: 1, max: 100 })
    )
  })
})