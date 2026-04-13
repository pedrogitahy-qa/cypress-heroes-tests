class LikeHeroPage {
  selectorsList() {
    const selectors = {
      likeButton: "[data-cy='like']",
      loginAlert: '.modal-container .open',
      fanCounter: "[data-cy='fans']"
    }

    return selectors
  }

  clickLikeButton() {
    cy.get(this.selectorsList().likeButton).eq(1).click()
  }

  validateLoginAlertIsVisible() {
    cy.get(this.selectorsList().loginAlert).should('be.visible')
  }
}

export default LikeHeroPage