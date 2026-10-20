import LoginPage from '../../pages/loginPage'
import userData from '../../fixtures/userData.json'
import LikeHeroPage from '../../pages/likeHeroPage'

const loginPage = new LoginPage()
const likeHeroPage = new LikeHeroPage()

describe('CT-05 - Like hero as admin', () => {

  beforeEach(() => {
    loginPage.visitHomePage()
    loginPage.openLoginPage()
    loginPage.login(userData.userAdmin.username, userData.userAdmin.password)
  })


  it('should like a hero successfully as admin', () => {
    cy.request('GET', 'http://localhost:3001/heroes').then(({ body: heroes }) => {
      const initialFans = new Map(heroes.map(hero => [hero.id, hero.fans]))

      cy.intercept('PATCH', '**/heroes/*').as('likeHero')

      likeHeroPage.clickLikeButton()

      cy.wait('@likeHero').then(({ request, response }) => {
        const heroId = Number(request.body.id)

        expect(response.statusCode).to.eq(200)
        expect(initialFans.has(heroId)).to.eq(true)
        expect(request.body.fans).to.eq(initialFans.get(heroId) + 1)
        expect(response.body.id).to.eq(heroId)
        expect(response.body.fans).to.eq(request.body.fans)
      })
    })
  })
})