class CreateHeroPage {
  selectorsList() {
    const selectors = {
      createHeroButton: "[href='/heroes/new'] button",
      nameField: "[data-cy='nameInput']",
      priceField: "[data-cy='priceInput']",
      fansField: "[data-cy='fansInput']",
      savesField: "[data-cy='savesInput']",
      powersSelect: "[data-cy='powersSelect']",
      submitButton: 'button.text-white'
    }

    return selectors
  }

  openCreateHeroForm() {
    cy.get(this.selectorsList().createHeroButton).click()
  }

  fillHeroForm(name, price, fans, saves) {
    cy.get(this.selectorsList().nameField).type(name)
    cy.get(this.selectorsList().priceField).type(price)
    cy.get(this.selectorsList().fansField).type(fans)
    cy.get(this.selectorsList().savesField).type(saves)
    cy.get(this.selectorsList().powersSelect).select('6')
    cy.get(this.selectorsList().submitButton).eq(1).click()
  }
}

export default CreateHeroPage