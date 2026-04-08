import LoginPage from '../../pages/loginPage'
import userData from '../../fixtures/userData.json'
import CreateHeroPage from '../../pages/createHeroPage'

const Chance = require('chance')
const chance = new Chance()

const loginPage = new LoginPage()
const createHeroPage = new CreateHeroPage()

describe('CT-09 - Create hero', () => {

  beforeEach(() => {
    loginPage.visitHomePage()
    loginPage.openLoginPage()
    loginPage.login(userData.userAdmin.username, userData.userAdmin.password)
  })

  it('should create a new hero successfully', () => {
    createHeroPage.openCreateHeroForm()

createHeroPage.fillHeroForm(
  chance.name(),
  chance.natural({ min: 1, max: 100 }),
  chance.natural({ min: 1, max: 100 }),
  chance.natural({ min: 1, max: 100 })

    )
  })
})