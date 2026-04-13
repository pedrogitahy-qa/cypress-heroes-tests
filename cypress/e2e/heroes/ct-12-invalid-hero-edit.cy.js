import LoginPage from '../../pages/loginPage'
import userData from '../../fixtures/userData.json'
import EditHeroPage from '../../pages/editHeroPage'

const Chance = require('chance')
const chance = new Chance()

const loginPage = new LoginPage()
const editHeroPage = new EditHeroPage()

describe('CT-12 - Edit hero with invalid data', () => {

  beforeEach(() => {
    loginPage.visitHomePage()
    loginPage.openLoginPage()
    loginPage.login(userData.userAdmin.username, userData.userAdmin.password)
  })

  it('should not allow editing hero with empty name', () => {
    editHeroPage.editHeroAndClearField(
      'name',
      chance.name(),
      chance.natural({ min: 1, max: 100 }),
      chance.natural({ min: 1, max: 100 }),
      chance.natural({ min: 1, max: 100 })
    )
  })

  it('should not allow editing hero with empty price', () => {
    editHeroPage.editHeroAndClearField(
      'price',
      chance.name(),
      chance.natural({ min: 1, max: 100 }),
      chance.natural({ min: 1, max: 100 }),
      chance.natural({ min: 1, max: 100 })
    )
  })

  it('should not allow editing hero with empty fans', () => {
    editHeroPage.editHeroAndClearField(
      'fans',
      chance.name(),
      chance.natural({ min: 1, max: 100 }),
      chance.natural({ min: 1, max: 100 }),
      chance.natural({ min: 1, max: 100 })
    )
  })

  it('should not allow editing hero with empty saves', () => {
    editHeroPage.editHeroAndClearField(
      'saves',
      chance.name(),
      chance.natural({ min: 1, max: 100 }),
      chance.natural({ min: 1, max: 100 }),
      chance.natural({ min: 1, max: 100 })
    )
  })
})