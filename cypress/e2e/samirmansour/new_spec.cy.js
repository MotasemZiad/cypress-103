/// <reference types="cypress" />
describe("Login Test Suite", () => {
  it("should be able to login to samirmansour website", () => {
    cy.visit("https://samirmansour.ps/index.php?route=account/login");
    cy.get("#input-email").type("motasemabunima@gmail.com");
    cy.get("#input-password").type("cJrG!aJ)r6f7CuN");
    cy.get("input[type='submit']").click();
    cy.get(".list-group-item").contains("خروج").should("be.visible");
  });
});

describe("Search Test Suite", () => {
  it("should be able to search with a valid keyword", () => {
    cy.visit("https://samirmansour.ps");
    cy.get("li a.open-search").click();
    cy.get("div > input[name='search']").type("book{enter}");
    cy.url().should("include", "search=book");
    cy.get("#products-items").children().should("have.length.at.least", 1);
  });
});

// describe("Contact Form Test Suite", () => {
//   it("should be able to fill out the form with valid information", () => {
//     cy.visit("https://motasemziad.github.io/");
//     cy.get("input[name='name']").type("Ahmed Zakaria", { force: true });
//     cy.get("input[name='email']").type("ahmzak99@gmail.com", { force: true });
//     cy.get("input[name='project']").type("Rasel Website", { force: true });
//     cy.get("textarea[name='message']").type(
//       "I want to test this website, please",
//       { force: true }
//     );
//     cy.get("a").contains("Send a message").click();
//   });
// });
