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

  it("Should check tasks section title", () => {
    cy.get('[data-cy="tasks-title"]').should("contain", "Tasks");
  });
});
