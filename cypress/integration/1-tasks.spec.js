// 1-tasks.spec.js created with Cypress
///<reference types="Cypress" />
import { faker } from "@faker-js/faker";

const taskTitle = faker.lorem.sentence();
const taskDesc = faker.lorem.paragraph();

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
    cy.get('[data-cy="colors-container"]').children().should("have.length", 6);
    cy.get('[data-cy="create-task-btn"]').should("be.visible");
  });

  it("Should fill up the task form", () => {
    cy.get('[data-cy="task-title-input"]').type(taskTitle);
    cy.get('[data-cy="task-desc-textarea"]').type(taskDesc);
    cy.get('[data-cy="colors-container"]').children().first().click();
  });

  it("Should successfully create a new task", () => {
    cy.get('[data-cy="create-task-btn"]').click();
  });

  it("Should verify the newly created task", () => {
    cy.get('[data-cy="saved-task-title"]').first().should("be.visible");
    cy.get('[data-cy="saved-task-title"]')
      .first()
      .should("have.value", taskTitle);
  });
});
