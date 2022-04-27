// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
import { faker } from "@faker-js/faker";

Cypress.Commands.add("createTask", () => {
  cy.get('[data-cy="task-title-input"]').type(faker.lorem.sentence());
  cy.get('[data-cy="task-desc-textarea"]').type(faker.lorem.sentence());
  cy.get('[data-cy="colors-container"]')
    .children()
    .eq(
      faker.datatype.number({
        min: 0,
        max: 5,
      })
    )
    .click();

  cy.get('[data-cy="create-task-btn"]').click();
});

Cypress.Commands.add("clickElm", (btnId) => {
  cy.get(`[data-cy=${btnId}]`).click();
});

Cypress.Commands.add("beVisible", (elmId) => {
  cy.get(`[data-cy=${elmId}]`).should("be.visible");
});

Cypress.Commands.add("shouldContain", (id, val) => {
  cy.get(`[data-cy=${id}]`).should("contain", val);
});
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
