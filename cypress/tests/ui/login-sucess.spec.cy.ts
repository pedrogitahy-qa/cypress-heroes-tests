describe('Login com sucesso', () => {
  it('Deve fazer login com um usuário válido', () => {
    cy.visit('http://localhost:3001/signin')
  })
});

  const userInvalid = {
    username: "Santos.Runte65@gmail.com",
    password: "s3cret",
  };

  const randomUsername = () => `pedro_${Date.now()}`;
  it("Login - Success", () => {
    cy.visit("/signin");
    cy.get('input[name="username"]').type('Heath93');
    cy.get('input[name="password"]').type('s3cret');
    cy.get('button[type="submit"]').click();
    cy.url().should("eq", `${Cypress.config("baseUrl")}/`);
    cy.contains("Home").should("be.visible");
  });

  it("Login - Fail", () => {
    cy.visit("/signin");
    cy.get('input[name="username"]').type(userInvalid.username);
    cy.get('input[name="password"]').type(userInvalid.password);
    cy.get('button[type="submit"]').click();
    cy.get(".MuiAlert-message")
      .should("be.visible")
      .and("contain.text", "Username or password is invalid");
  });

  it("Register - Success", () => {
    cy.visit("/signup");
    cy.get("#firstName").type("Ted");
    cy.get("#lastName").type("Parisian");
    cy.get("#username").type(randomUsername());
    cy.get("#password").type("s3cret");
    cy.get("#confirmPassword").type("s3cret");
    cy.get('button[type="submit"]').click();
    cy.url().should("include", "/signin");
  });
  
  it("Register - Fail", () => {
    cy.visit("/signup");
    // tenta enviar vazio e valida erros
    cy.get('button[type="submit"]').click();
    cy.get(".MuiFormHelperText-root")
      .should("exist")
      .and("have.length.greaterThan", 0);
  });

  