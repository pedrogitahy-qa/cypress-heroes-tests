class HireHeroPage {
  selectorsList() {
    const selectors = {
      hireButton: "[data-cy='money']",
      loginAlert: '.modal-container .open',
      confirmButton: 'button.text-white'
    }

    return selectors
  }

  clickHireButton() {
    cy.get(this.selectorsList().hireButton).eq(1).click()
  }

  validateLoginAlertIsVisible() {
    cy.get(this.selectorsList().loginAlert).should('be.visible')
  }

  confirmHireAsAdmin() {
    cy.get(this.selectorsList().confirmButton).eq(1).click()
  }

  confirmHireAsDefaultUser() {
    cy.get(this.selectorsList().confirmButton).eq(0).click()
  }
}

export default HireHeroPage