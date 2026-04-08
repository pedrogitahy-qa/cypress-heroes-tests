# Cypress End-to-End Test Automation — Cypress Heroes

## Test Automation Project

This repository contains automated end-to-end test scenarios developed using Cypress for the Cypress Heroes demo application.

The project was created to practice UI test automation using a structured and maintainable approach, applying the Page Object Model (POM) pattern and reusable test data.

The goal of this project is to demonstrate practical test automation skills by covering core user interactions such as authentication, engagement actions, hero creation, editing, and deletion.

## Project Scope

Test automation covering:

- Login scenarios
- Heroes interaction flows
- Hero creation
- Hero editing
- Hero deletion
- Invalid data validation

## Stack

- Cypress
- JavaScript
- Node.js
- Chance.js
- Page Object Model (POM)

## Test Scenarios Covered

| Test Case | Description |
|-----------|-------------|
| CT-01 | Admin login |
| CT-02 | Default user login |
| CT-03 | Like button without authentication |
| CT-04 | Hire button without authentication |
| CT-05 | Like hero as admin |
| CT-06 | Like hero as default user |
| CT-07 | Hire hero as admin |
| CT-08 | Hire hero as default user |
| CT-09 | Create hero |
| CT-10 | Delete hero |
| CT-11 | Edit hero successfully |
| CT-12 | Validate hero editing with invalid data |

## Project Structure

```bash
cypress/
  e2e/
    heroes/
      ct-01-login-admin.cy.js
      ct-02-login-user.cy.js
      ct-03-like-button.cy.js
      ct-04-hire-button.cy.js
      ct-05-like-hero-admin.cy.js
      ct-06-like-hero-user.cy.js
      ct-07-hire-hero-admin.cy.js
      ct-08-hire-hero-user.cy.js
      ct-09-create-hero.cy.js
      ct-10-delete-hero.cy.js
      ct-11-edit-hero.cy.js
      ct-12-invalid-hero-edit.cy.js

  fixtures/
    userData.json

  pages/
    loginPage.js
    likeHeroPage.js
    hireHeroPage.js
    createHeroPage.js
    deleteHeroPage.js
    editHeroPage.js
