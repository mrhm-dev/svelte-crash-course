// 0-app.spec.js created with Cypress
/// <reference types="Cypress" />

let topBtnsData = [
  { btnId: "create-btn", val: "Create" },
  { btnId: "show-hide-btn", val: "Hide" },
  { btnId: "all-btn", val: "ALL" },
  { btnId: "active-btn", val: "Active" },
  { btnId: "completed-btn", val: "Completed" },
  { btnId: "clear-btn", val: "Clear" },
];

describe("Base url test", () => {
  it("Should successfully visit the baseUrl", () => {
    cy.visit("/");
    cy.url().should("contain", Cypress.config("baseUrl"));
  });
});

describe("App content tests", () => {
  it("Should check the app title", () => {
    cy.shouldContain("app-heading", "Hello");
  });

  it("Should check the top buttons visiblity", () => {
    topBtnsData.map((item) => cy.beVisible(item.btnId));
  });

  it("Should verify top buttons text content", () => {
    topBtnsData.map((item) => cy.shouldContain(item.btnId, item.val));
  });

  it("Should check tasks section title", () => {
    cy.get('[data-cy="tasks-title"]').should("contain", "Tasks");
    cy.wait(3000);
  });
});
