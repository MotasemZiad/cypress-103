/// <reference types="cypress" />
describe("QA Cart Test Suite", () => {
  before(() => {
    cy.log("Before all tests");
  });

  beforeEach(() => {
    cy.log("Before each test");
  });

  afterEach(() => {
    cy.log("After each test");
  });

  after(() => {
    cy.log("After all tests");
  });

  it("should log something", () => {
    cy.log("Hello World!");
  });

  it("should log something else", () => {
    cy.log("Hi there!");
  });
});
