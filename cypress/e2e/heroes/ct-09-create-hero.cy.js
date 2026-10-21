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
  const name = chance.name()
  const price = chance.natural({ min: 1, max: 100 })
  const fans = chance.natural({ min: 1, max: 100 })
  const saves = chance.natural({ min: 1, max: 100 })

  cy.intercept('POST', '**/heroes').as('createHero')

  createHeroPage.openCreateHeroForm()
  createHeroPage.fillHeroForm(name, price, fans, saves)

  cy.wait('@createHero').then(({ request, response }) => {
    expect(response.statusCode).to.eq(201)

    expect(request.body.name).to.eq(name)
    expect(request.body.price).to.eq(price)
    expect(request.body.fans).to.eq(fans)
    expect(request.body.saves).to.eq(saves)
    expect(request.body.powers).to.include(6)

    expect(response.body.id).to.be.a('number')
    expect(response.body.name).to.eq(name)
    expect(response.body.price).to.eq(price)
    expect(response.body.fans).to.eq(fans)
    expect(response.body.saves).to.eq(saves)

    const heroId = response.body.id

    cy.request('GET', `http://localhost:3001/heroes/${heroId}`)
      .then(({ status, body }) => {
        expect(status).to.eq(200)
        expect(body.id).to.eq(heroId)
        expect(body.name).to.eq(name)
        expect(body.price).to.eq(price)
        expect(body.fans).to.eq(fans)
        expect(body.saves).to.eq(saves)
      })
  })
})
})