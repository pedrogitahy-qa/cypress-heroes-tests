import LoginPage from '../../pages/loginPage'
import userData from '../../fixtures/userData.json'
import DeleteHeroPage from '../../pages/deleteHeroPage'
import CreateHeroPage from '../../pages/createHeroPage'

const loginPage = new LoginPage()
const deleteHeroPage = new DeleteHeroPage()
const createHeroPage = new CreateHeroPage()

describe('CT-10 - Delete hero', () => {

  beforeEach(() => {
    loginPage.visitHomePage()
    loginPage.openLoginPage()
    loginPage.login(userData.userAdmin.username, userData.userAdmin.password)
  })

    it('should delete a hero successfully', () => {
      const heroName = `CT10-Hero-${Date.now()}`
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

cy.intercept('DELETE', '**/heroes/*').as('deleteHero')

deleteHeroPage.clickDeleteButton(heroName)
deleteHeroPage.confirmDelete()

    cy.wait('@deleteHero').then(({ request, response }) => {
  expect(response.statusCode).to.eq(204)

  const deletedHeroId = Number(request.url.split('/').pop())
  expect(deletedHeroId).to.eq(createdHeroId)

  cy.request('GET', 'http://localhost:3001/heroes').then(({ body: heroes }) => {
    expect(heroes.some(hero => hero.id === deletedHeroId)).to.eq(false)

     })
   })

  })
})