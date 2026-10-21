class DeleteHeroPage {

  selectorsList() {
    const selectors = {
      deleteButton: "[data-cy='trash']",
      confirmDeleteButton: '.modal-container button'
    }

    return selectors
  }

 clickDeleteButton(heroName) {
  cy.get('[data-cy="hero-card"]')
    .filter((_, card) =>
      Cypress.$(card).find('[data-cy="name"]').text().trim() === heroName
    )
    .should('have.length', 1)
    .find(this.selectorsList().deleteButton)
    .click()

  }

  confirmDelete() {
    cy.get(this.selectorsList().confirmDeleteButton).contains('Yes').click()
  }

}

export default DeleteHeroPage