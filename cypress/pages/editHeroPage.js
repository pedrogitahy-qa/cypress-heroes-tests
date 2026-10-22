class EditHeroPage {
  selectorsList() {
    const selectors = {
      editButton: "[data-cy='pencil']",
      nameField: "[data-cy='nameInput']",
      priceField: "[data-cy='priceInput']",
      fansField: "[data-cy='fansInput']",
      savesField: "[data-cy='savesInput']",
      powersSelect: "[data-cy='powersSelect']",
      submitButton: 'button.text-white',
      alertInformation: '.text-red-500'
    }

    return selectors
  }

  clickEditButton(heroName) {
  cy.get('[data-cy="hero-card"]')
    .filter((_, card) =>
      Cypress.$(card).find('[data-cy="name"]').text().trim() === heroName
    )
    .should('have.length', 1)
    .find(this.selectorsList().editButton)
    .click()
}

editHeroSuccessfully(heroName, name, price, fans, saves) {
    this.clickEditButton(heroName)
    cy.get(this.selectorsList().nameField).clear().type(name)
    cy.get(this.selectorsList().priceField).clear().type(price)
    cy.get(this.selectorsList().fansField).clear().type(fans)
    cy.get(this.selectorsList().savesField).clear().type(saves)
    cy.get(this.selectorsList().powersSelect).select('6')
    cy.get(this.selectorsList().submitButton).eq(2).click()
  }

editHeroAndClearField(heroName, fieldToClear, name, price, fans, saves) {
    this.clickEditButton(heroName)

    if (fieldToClear !== 'name') {
      cy.get(this.selectorsList().nameField).clear().type(name)
    } else {
      cy.get(this.selectorsList().nameField).clear()
    }

    if (fieldToClear !== 'price') {
      cy.get(this.selectorsList().priceField).clear().type(price)
    } else {
      cy.get(this.selectorsList().priceField).clear()
    }

    if (fieldToClear !== 'fans') {
      cy.get(this.selectorsList().fansField).clear().type(fans)
    } else {
      cy.get(this.selectorsList().fansField).clear()
    }

    if (fieldToClear !== 'saves') {
      cy.get(this.selectorsList().savesField).clear().type(saves)
    } else {
      cy.get(this.selectorsList().savesField).clear()
    }

    cy.get(this.selectorsList().powersSelect).select('6')
    cy.get(this.selectorsList().submitButton).eq(2).click()
    cy.get(this.selectorsList().alertInformation).should('be.visible')
  }
}

export default EditHeroPage