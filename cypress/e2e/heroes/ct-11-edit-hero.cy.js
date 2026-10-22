import LoginPage from '../../pages/loginPage'
import userData from '../../fixtures/userData.json'
import EditHeroPage from '../../pages/editHeroPage'
import CreateHeroPage from '../../pages/createHeroPage'

const Chance = require('chance')
const chance = new Chance()

const loginPage = new LoginPage()
const editHeroPage = new EditHeroPage()
const createHeroPage = new CreateHeroPage()

describe('CT-11 - Edit hero', () => {
  beforeEach(() => {
    loginPage.visitHomePage()
    loginPage.openLoginPage()
    loginPage.login(userData.userAdmin.username, userData.userAdmin.password)
  })

  it('should edit a hero successfully', () => {
    const heroName = `CT11-Hero-${Date.now()}`
    const price = 50
    const fans = 10
    const saves = 10
    let createdHeroId
    cy.intercept('POST', '**/heroes').as('createHero')

createHeroPage.openCreateHeroForm()
createHeroPage.fillHeroForm(heroName, price, fans, saves)

cy.wait('@createHero').then(({ response }) => {
  expect(response.statusCode).to.eq(201)
  expect(response.body.id).to.be.a('number')
  expect(response.body.name).to.eq(heroName)
  createdHeroId = response.body.id
})

const newName = chance.name()
const newPrice = chance.natural({ min: 1, max: 100 })
const newFans = chance.natural({ min: 1, max: 100 })
const newSaves = chance.natural({ min: 1, max: 100 })

cy.intercept('PUT', '**/heroes/*').as('editHero')
editHeroPage.editHeroSuccessfully(
  heroName,
  newName,
  newPrice,
  newFans,
  newSaves
)
cy.wait('@editHero').then(({ request, response }) => {
  expect(response.statusCode).to.eq(200)

  const editedHeroId = Number(request.url.split('/').pop())
  expect(editedHeroId).to.eq(createdHeroId)

  expect(request.body.name).to.eq(newName)
  expect(request.body.price).to.eq(newPrice)
  expect(request.body.fans).to.eq(newFans)
  expect(request.body.saves).to.eq(newSaves)

  expect(response.body.name).to.eq(newName)
  expect(response.body.price).to.eq(newPrice)
  expect(response.body.fans).to.eq(newFans)
  expect(response.body.saves).to.eq(newSaves)
  cy.request('GET', `http://localhost:3001/heroes/${createdHeroId}`)
  .then(({ status, body }) => {
    expect(status).to.eq(200)
    expect(body.id).to.eq(createdHeroId)
    expect(body.name).to.eq(newName)
    expect(body.price).to.eq(newPrice)
    expect(body.fans).to.eq(newFans)
    expect(body.saves).to.eq(newSaves)

  })
})
  })
})