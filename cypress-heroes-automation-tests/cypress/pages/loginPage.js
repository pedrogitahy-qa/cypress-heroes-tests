class LoginPage {
  selectorsList() {
    const selectors = {
      loginButton: 'li > .undefined',
      emailField: "[data-cy='email']",
      passwordField: "[data-cy='password']",
      signInButton: 'button.text-white'
    }

    return selectors
  }

  visitHomePage() {
    cy.visit('/')
  }

  openLoginPage() {
    cy.get(this.selectorsList().loginButton).click()
  }

  login(username, password) {
    cy.get(this.selectorsList().emailField).type(username)
    cy.get(this.selectorsList().passwordField).type(password)
    cy.get(this.selectorsList().signInButton).click()
  }
}

export default LoginPage