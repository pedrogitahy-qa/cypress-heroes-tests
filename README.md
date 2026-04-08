# Cypress End-to-End Test Automation — Cypress Heroes

![Cypress](https://img.shields.io/badge/Tested%20With-Cypress-04C38E)
![JavaScript](https://img.shields.io/badge/Language-JavaScript-yellow)
![Node.js](https://img.shields.io/badge/Runtime-Node.js-green)
---

## Test Automation Project

This repository contains automated end-to-end test scenarios developed using Cypress for the Cypress Heroes demo application.

The project focuses on practicing UI test automation using maintainable testing practices and organized test structure.

---

## About the Project

Cypress Heroes is a demo application that allows users to interact with heroes through actions such as liking, hiring, creating, editing, and deleting heroes.

This project was created to automate core user flows and demonstrate automation practices commonly used in QA engineering.

---

## Testing Approach

The test suite was designed following automation best practices:

- Page Object Model (POM) for better maintainability
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

---

## Project Structure
