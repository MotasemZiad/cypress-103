/// <reference types="cypress" />
describe("First Test Scenario", () => {
  before(() => {
    cy.visit("https://www.google.com/");
  });
  it("Individual Test Case I", () => {
    expect(true).to.be.true;
  });

  it("Individual Test Case II", () => {
    expect(false).to.be.true;
  });
});

context("Second Test Scenario", () => {
  beforeEach(() => {
    cy.visit("https://www.google.com/");
  });

  specify("Individual Test Case I", () => {
    expect(true).to.be.true;
  });

  specify("Individual Test Case II", () => {
    expect(false).to.be.true;
  });
});
