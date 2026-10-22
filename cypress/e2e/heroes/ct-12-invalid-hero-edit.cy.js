import LoginPage from '../../pages/loginPage'
import userData from '../../fixtures/userData.json'
import EditHeroPage from '../../pages/editHeroPage'
import CreateHeroPage from '../../pages/createHeroPage'

const Chance = require('chance')
const chance = new Chance()

const loginPage = new LoginPage()
const createHeroPage = new CreateHeroPage()
const editHeroPage = new EditHeroPage()

describe('CT-12 - Edit hero with invalid data', () => {

  beforeEach(() => {
    loginPage.visitHomePage()
    loginPage.openLoginPage()
    loginPage.login(userData.userAdmin.username, userData.userAdmin.password)
  })

  it('should not allow editing hero with empty name', () => {
    const heroName = `CT12-Name-${Date.now()}`
    const price = 50
    const fans = 10
    const saves = 10

cy.intercept('POST', '**/heroes').as('createHero')

createHeroPage.openCreateHeroForm()
createHeroPage.fillHeroForm(heroName, price, fans, saves)

cy.wait('@createHero').then(({ response }) => {
  expect(response.statusCode).to.eq(201)
  expect(response.body.name).to.eq(heroName)
})

  cy.intercept('PUT', '**/heroes/*').as('invalidEdit')

    editHeroPage.editHeroAndClearField(
  heroName,
  'name',
  chance.name(),
  chance.natural({ min: 1, max: 100 }),
  chance.natural({ min: 1, max: 100 }),
  chance.natural({ min: 1, max: 100 })
)
cy.request('GET', 'http://localhost:3001/heroes').then(({ body: heroes }) => {
  const hero = heroes.find(hero => hero.name === heroName)

  expect(hero).to.exist
  expect(hero.name).to.eq(heroName)
  expect(hero.price).to.eq(price)
  expect(hero.fans).to.eq(fans)
  expect(hero.saves).to.eq(saves)
})
  })

  it('should not allow editing hero with empty price', () => {
    const heroName = `CT12-Price-${Date.now()}`
    const price = 50
    const fans = 10
    const saves = 10

cy.intercept('POST', '**/heroes').as('createHero')

createHeroPage.openCreateHeroForm()
createHeroPage.fillHeroForm(heroName, price, fans, saves)

cy.wait('@createHero').then(({ response }) => {
  expect(response.statusCode).to.eq(201)
  expect(response.body.name).to.eq(heroName)

})

  editHeroPage.editHeroAndClearField(
    heroName,
    'price',
    chance.name(),
    chance.natural({ min: 1, max: 100 }),
    chance.natural({ min: 1, max: 100 }),
    chance.natural({ min: 1, max: 100 })
)

cy.request('GET', 'http://localhost:3001/heroes').then(({ body: heroes }) => {
  const hero = heroes.find(hero => hero.name === heroName)

  expect(hero).to.exist
  expect(hero.name).to.eq(heroName)
  expect(hero.price).to.eq(price)
  expect(hero.fans).to.eq(fans)
  expect(hero.saves).to.eq(saves)
})
  })

  it('should not allow editing hero with empty fans', () => {
    const heroName = `CT12-Fans-${Date.now()}`
    const price = 50
    const fans = 10
    const saves = 10

cy.intercept('POST', '**/heroes').as('createHero')

createHeroPage.openCreateHeroForm()
createHeroPage.fillHeroForm(heroName, price, fans, saves)

cy.wait('@createHero').then(({ response }) => {
  expect(response.statusCode).to.eq(201)
  expect(response.body.name).to.eq(heroName)
})

    editHeroPage.editHeroAndClearField(
  heroName,
  'fans',
  chance.name(),
  chance.natural({ min: 1, max: 100 }),
  chance.natural({ min: 1, max: 100 }),
  chance.natural({ min: 1, max: 100 })
)

cy.request('GET', 'http://localhost:3001/heroes').then(({ body: heroes }) => {
  const hero = heroes.find(hero => hero.name === heroName)

  expect(hero).to.exist
  expect(hero.name).to.eq(heroName)
  expect(hero.price).to.eq(price)
  expect(hero.fans).to.eq(fans)
  expect(hero.saves).to.eq(saves)
})

  })

  it('should not allow editing hero with empty saves', () => {
  const heroName = `CT12-Saves-${Date.now()}`
  const price = 50
  const fans = 10
  const saves = 10

cy.intercept('POST', '**/heroes').as('createHero')

createHeroPage.openCreateHeroForm()
createHeroPage.fillHeroForm(heroName, price, fans, saves)

cy.wait('@createHero').then(({ response }) => {
  expect(response.statusCode).to.eq(201)
  expect(response.body.name).to.eq(heroName)
})

    editHeroPage.editHeroAndClearField(
      heroName,
      'saves',
      chance.name(),
      chance.natural({ min: 1, max: 100 }),
      chance.natural({ min: 1, max: 100 }),
      chance.natural({ min: 1, max: 100 })
    )

cy.request('GET', 'http://localhost:3001/heroes').then(({ body: heroes }) => {
  const hero = heroes.find(hero => hero.name === heroName)

  expect(hero).to.exist
  expect(hero.name).to.eq(heroName)
  expect(hero.price).to.eq(price)
  expect(hero.fans).to.eq(fans)
  expect(hero.saves).to.eq(saves)
})

  })
})