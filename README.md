# Cypress Heroes Test Automation

End-to-end automated tests for the Cypress Heroes demo application using Cypress and the Page Object Model (POM) pattern.
⚠️ The test project is currently available in the `develop` branch.

You can access the full test suite here:
https://github.com/pedrogitahy-qa/cypress-heroes-tests/tree/develop/cypress-heroes-automation-tests

## Overview

This project was created to practice UI test automation with Cypress by covering realistic user interactions in the Cypress Heroes application.

The test suite was organized using Page Objects to improve readability, reuse, and maintenance.

## Application Under Test

Cypress Heroes is a demo application where users can interact with heroes through actions such as:

- login
- liking heroes
- hiring heroes
- creating new heroes
- editing hero data
- deleting heroes

## Test Scenarios Covered

The automated test suite covers the following scenarios:

1. Admin login
2. Default user login
3. Like button without authentication
4. Hire button without authentication
5. Like hero as admin
6. Like hero as default user
7. Hire hero as admin
8. Hire hero as default user
9. Create a new hero
10. Delete a hero
11. Edit a hero successfully
12. Validate hero editing with invalid data

## Tech Stack

- Cypress
- JavaScript
- Node.js
- Chance.js
- Page Object Model (POM)

## Key Concepts Applied

This project was structured using common test automation practices:

- **Page Object Model (POM)** to separate page interactions from test logic
- **Fixtures** for centralized test data management
- **Dynamic data generation** using Chance.js
- **Scenario-based test structure** using Cypress spec files

## Test Cases Implemented

The automated suite currently covers:

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
| CT-11 | Edit hero |
| CT-12 | Invalid hero edit validation |

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
