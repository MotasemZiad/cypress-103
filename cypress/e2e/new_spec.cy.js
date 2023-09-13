/// <reference types="cypress" />

describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://example.cypress.io");
  });

  it("fails", () => {
    cy.visit("https://example.cypress.io");
    cy.get("body").should("not.exist");
  });
});
