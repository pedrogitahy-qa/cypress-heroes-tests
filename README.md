# Cypress End-to-End Test Automation — Cypress Heroes

![Cypress](https://img.shields.io/badge/Tested%20With-Cypress-04C38E)
![JavaScript](https://img.shields.io/badge/Language-JavaScript-yellow)
![Node.js](https://img.shields.io/badge/Runtime-Node.js-green)
---

## Test Automation Project

This repository contains automated end-to-end test scenarios developed using Cypress as part of the QA training program Guardião da Qualidade (LumeStack).

The project is based on Cypress Heroes, an open-source demo application created to support UI test automation practice through realistic user interactions such as authentication, hero management, and user engagement features.

The goal of this project is to demonstrate practical experience with automated testing by implementing organized and maintainable end-to-end tests, covering both positive and negative scenarios within a realistic application environment.

---

## About the Project

Cypress Heroes is an open-source demo application designed to support UI test automation practice through realistic frontend interactions.

The application simulates common user behaviors such as authentication, liking heroes, hiring heroes, and performing CRUD operations, making it a practical environment for learning and validating end-to-end testing strategies.

Original project repository:

https://github.com/cypress-io/cypress-heroes

---

## Testing Approach

This project was implemented using Cypress with the `Page Object Model (POM)` to improve test maintainability, readability, and separation between test logic and UI interactions.

The automation suite was designed to simulate realistic user behaviors while keeping the test architecture modular and scalable, allowing new scenarios to be added without increasing code complexity.

The test suite follows these automation practices:

- `Page Object Model (POM)` for better maintainability
- Separation between test logic and page interactions
- Use of fixtures for reusable data
- Scenario-based test structure
---

## Technologies Used

- Cypress
- JavaScript
- Node.js
- Chance.js
- Page Object Model (POM)

---

## Test Scenarios Covered

The test suite covers the following functional areas:

- Authentication
- Hero interaction actions
- Hero creation
- Hero editing
- Hero deletion
- Validation scenarios

---

## Demonstrated Test Scenarios

| | |
|---|---|
| **CT-01** Admin login | **CT-07** Hire hero as admin |
| **CT-02** Default user login | **CT-08** Hire hero as default user |
| **CT-03** Like button without authentication | **CT-09** Create hero |
| **CT-04** Hire button without authentication | **CT-10** Delete hero |
| **CT-05** Like hero as admin | **CT-11** Edit hero |
| **CT-06** Like hero as default user | **CT-12** Invalid hero edit validation |

### Authentication Flow (CT-01 / CT-02)

This scenario demonstrates user authentication using both the **admin** and **default user** accounts.

The tests validate successful login and correct access to authenticated features.

![Authentication Flow Demo](./docs/gifs/authentication-flow.gif)

### Interaction Without Authentication (CT-03, CT-04)

This scenario validates application behavior when a user attempts to interact with heroes without being authenticated.

The tests confirm that protected actions such as **liking** and **hiring heroes** require login.

![Interaction Without Authentication](./docs/gifs/interaction-without-auth.gif)

### Hero Interaction — Like Actions (CT-05, CT-06)

These scenarios validate the ability for authenticated users to like heroes within the application.  
Both the **admin** and **default user** accounts interact with the hero list and perform the like action.

The tests ensure that the system correctly registers user interactions and updates the interface to reflect the new like state.

![Hero Like Actions](./docs/gifs/hero-like-actions.gif)

### Hero Hiring Flow (CT-07, CT-08)

These scenarios demonstrate the hero hiring functionality available to authenticated users.  
Both user roles interact with the hero interface and execute the hiring action.

The tests validate that the application correctly processes the hiring request and updates the system state accordingly.

![Hero Hiring Flow](./docs/gifs/hero-hiring-flow.gif)

### Hero Management — Creation & Deletion (CT-09, CT-10)

These scenarios validate the hero management workflow within the application.  
The tests cover the creation of a new hero and the deletion of an existing one.

The automation ensures that the system correctly handles CRUD operations and reflects the changes in the user interface.

![Hero Creation and Deletion](./docs/gifs/hero-management.gif)

### Hero Editing & Validation (CT-11, CT-12)

These scenarios validate the hero editing functionality provided by the application.  
Users modify hero information through the edit interface.

The tests verify both successful updates and validation behavior when invalid data is submitted.

![Hero Editing and Validation](./docs/gifs/hero-edit-validation.gif)

---

## Project Structure

## Test Coverage

The automation suite validates the main user flows of the Cypress Heroes application.

Covered functionalities include:

- Authentication flows
- Hero interaction actions
- Hero creation and deletion
- Hero editing and validation scenarios
- UI interaction validation

---

## Automation Strategy

The test suite was designed with maintainability and readability in mind.

Key design decisions include:

- Use of the Page Object Model (POM) pattern
- Separation between test logic and UI interactions
- Reusable fixtures for test data
- Scenario-based test organization




