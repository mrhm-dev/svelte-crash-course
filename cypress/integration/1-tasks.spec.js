// 1-tasks.spec.js created with Cypress
///<reference types="Cypress" />
import { faker } from "@faker-js/faker";

let taskTitle = faker.lorem.sentence();
let taskDesc = faker.lorem.paragraph();
let colorPosition = faker.datatype.number({
  min: 0,
  max: 5,
});

let testElmIdsArr = [
  "task-title-form",
  "task-title-input",
  "task-desc-title-form",
  "task-desc-textarea",
  "background-color-orange",
  "background-color-red",
  "background-color-yellow",
  "background-color-blue",
  "background-color-purple",
  "background-color-green",
];

before(() => {
  cy.visit("/");
});

describe("Tasks create tests", () => {
  it("Should successfully click Create button", () => {
    cy.clickElm("create-btn");
  });

  it("Create task form should be visible", () => {
    testElmIdsArr.map((item) => cy.beVisible(item));
    cy.get('[data-cy="colors-container"]').children().should("have.length", 6);
    cy.beVisible("create-task-btn");
  });

  it("Should fill up the task form", () => {
    cy.get('[data-cy="task-title-input"]').type(taskTitle);
    cy.get('[data-cy="task-desc-textarea"]').type(taskDesc);
    cy.get('[data-cy="colors-container"]').children().eq(colorPosition).click();
  });

  it("Should successfully create a new task", () => {
    cy.clickElm("create-task-btn");
  });

  it("Should verify the newly created task", () => {
    cy.get('[data-cy="saved-task-title"]').first().should("be.visible");
    cy.get('[data-cy="saved-task-title"]')
      .first()
      .should("have.value", taskTitle);
  });

  it("Should mark new task as done", () => {
    cy.get('[data-cy="mark-done-checkbox"]').first().should("be.visible");
    cy.get('[data-cy="mark-done-checkbox"]').first().click();
  });

  it("Should verify the latest Done task", () => {
    cy.beVisible("task-item-label");
    cy.shouldContain("task-item-label", "Done");
  });

  it("Should add 5 more tasks", () => {
    for (let index = 0; index < 5; index++) {
      cy.createTask();
    }
  });
});

describe("Tasks update tests", () => {
  it("Should double click latest task title to enable input", () => {
    cy.beVisible("tasks-list");
    cy.get('[data-cy="tasks-list"]').children().eq(0).should("be.visible");
    cy.get('[data-cy="tasks-list"]').children().eq(0).dblclick();
  });

  it("Should clear and update the latest task", () => {
    cy.get('[data-cy="saved-task-title"]').first().clear();
    cy.get('[data-cy="saved-task-title"]')
      .first()
      .type(`Updated ${faker.lorem.sentence()}{enter}`);
  });
});

describe("Tasks show / hide tests", () => {
  it("Should hide the tasks list", () => {
    cy.clickElm("show-hide-btn");
    cy.get('[data-cy="tasks-list"]').should("not.be.visible");
  });

  it("Should show the tasks list", () => {
    cy.shouldContain("show-hide-btn", "Show");
    cy.clickElm("show-hide-btn");
    cy.beVisible("tasks-list");
  });
});

describe("Tasks list filter tests", () => {
  it("Should show the completed tasks", () => {
    cy.clickElm("completed-btn");
    cy.get('[data-cy="completed-tasks-count"]')
      .invoke("text")
      .then((val) => {
        let completedCount = val;
        cy.wrap(completedCount[0]).as("completedCount");
      });
    cy.get("@completedCount").then((ccount) => {
      cy.get('[data-cy="tasks-list"]').children().should("have.length", ccount);
    });
  });

  it("Should show the active tasks", () => {
    cy.clickElm("active-btn");
    cy.get('[data-cy="active-tasks-count"]')
      .invoke("text")
      .then((val) => {
        let activeCount = val;
        cy.wrap(activeCount[0]).as("activeCount");
      });
    cy.get("@activeCount").then((acount) => {
      cy.get('[data-cy="tasks-list"]').children().should("have.length", acount);
    });
  });

  it("Should show all the tasks", () => {
    cy.clickElm("all-btn");
    cy.get('[data-cy="total-tasks-count"]')
      .invoke("text")
      .then((val) => {
        let totalCount = val;
        cy.wrap(totalCount[0]).as("totalCount");
      });
    cy.get("@totalCount").then((tcount) => {
      cy.get('[data-cy="tasks-list"]').children().should("have.length", tcount);
    });
  });
});

describe("Tasks list clear tests", () => {
  it("Should clear the completed tasks", () => {
    cy.clickElm("clear-btn");
    cy.get('[data-cy="completed-tasks-count"]')
      .invoke("text")
      .should("eq", "0");
  });
});
