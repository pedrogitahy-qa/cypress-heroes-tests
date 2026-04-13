class DeleteHeroPage {

  selectorsList() {
    const selectors = {
      deleteButton: "[data-cy='trash']",
      confirmDeleteButton: '.modal-container button'
    }

    return selectors
  }

  clickDeleteButton() {
    cy.get(this.selectorsList().deleteButton).eq(0).click()
  }

  confirmDelete() {
    cy.get(this.selectorsList().confirmDeleteButton).contains('Yes').click()
  }

}

export default DeleteHeroPage