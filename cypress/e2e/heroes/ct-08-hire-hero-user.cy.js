import LoginPage from '../../pages/loginPage'
import userData from '../../fixtures/userData.json'
import HireHeroPage from '../../pages/hireHeroPage'

const loginPage = new LoginPage()
const hireHeroPage = new HireHeroPage()

describe('CT-08 - Hire hero as default user', () => {

  beforeEach(() => {
    loginPage.visitHomePage()
    loginPage.openLoginPage()
    loginPage.login(userData.userDefault.username, userData.userDefault.password)
  })


  it('should hire a hero successfully as a default user', () => {
    cy.request('GET', 'http://localhost:3001/heroes').then(({ body: heroes }) => {
      const initialSaves = new Map(heroes.map(hero => [hero.id, hero.saves]))

      cy.intercept('PATCH', '**/heroes/*').as('hireHero')

      hireHeroPage.clickHireButton()
      cy.contains('h3', 'Hire Hero?').should('be.visible')
      hireHeroPage.confirmHireAsDefaultUser()

      cy.wait('@hireHero').then(({ request, response }) => {
        const heroId = Number(request.body.id)

        expect(response.statusCode).to.eq(200)
        expect(initialSaves.has(heroId)).to.eq(true)
        expect(request.body.saves).to.eq(initialSaves.get(heroId) + 1)
        expect(response.body.id).to.eq(heroId)
        expect(response.body.saves).to.eq(request.body.saves)
      })
    })
  })
})