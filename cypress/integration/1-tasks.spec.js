// 1-tasks.spec.js created with Cypress
///<reference types="Cypress" />

before(() => {
  cy.visit("/");
});

describe("Tasks CRUD tests", () => {
  it("Should successfully click Create button", () => {
    cy.get('[data-cy="create-btn"]').click();
  });

  it("Create task form should be visible", () => {
    cy.get('[data-cy="task-title-form"]').should("be.visible");
    cy.get('[data-cy="task-title-input"]').should("be.visible");
    cy.get('[data-cy="task-desc-title-form"]').should("be.visible");
    cy.get('[data-cy="task-desc-textarea"]').should("be.visible");
    cy.get('[data-cy="background-color-orange"]').should("be.visible");
    cy.get('[data-cy="background-color-red"]').should("be.visible");
    cy.get('[data-cy="background-color-yellow"]').should("be.visible");
    cy.get('[data-cy="background-color-blue"]').should("be.visible");
    cy.get('[data-cy="background-color-purple"]').should("be.visible");
    cy.get('[data-cy="background-color-green"]').should("be.visible");
    cy.get('[data-cy="create-task-btn"]').should("be.visible");
  });
});
