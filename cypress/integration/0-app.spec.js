// 0-app.spec.js created with Cypress
/// <reference types="Cypress" />

describe("Base url test", () => {
  it("Should successfully visit the baseUrl", () => {
    cy.visit("/");
    cy.url().should("contain", Cypress.config("baseUrl"));
  });
});

describe("App content tests", () => {
  it("Should check the app title", () => {
    cy.get('[data-cy="app-heading"]').should("contain", "Hello");
  });

  it("Should check the top buttons visiblity", () => {
    cy.get('[data-cy="create-btn"]').should("be.visible");
    cy.get('[data-cy="create-btn"]').should("contain", "Create");
    cy.get('[data-cy="show-hide-btn"]').should("be.visible");
    cy.get('[data-cy="show-hide-btn"]').should("contain", "Hide");
    cy.get('[data-cy="all-btn"]').should("be.visible");
    cy.get('[data-cy="all-btn"]').should("contain", "ALL");
    cy.get('[data-cy="active-btn"]').should("be.visible");
    cy.get('[data-cy="active-btn"]').should("contain", "Active");
    cy.get('[data-cy="completed-btn"]').should("be.visible");
    cy.get('[data-cy="completed-btn"]').should("contain", "Completed");
    cy.get('[data-cy="clear-btn"]').should("be.visible");
    cy.get('[data-cy="clear-btn"]').should("contain", "Clear");
  });

  it("Should check tasks section title", () => {
    cy.get('[data-cy="tasks-title"]').should("contain", "Tasks");
  });
});
