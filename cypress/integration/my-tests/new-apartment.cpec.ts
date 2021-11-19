/// <reference types="cypress" />

describe("custom test", () => {
  beforeEach(() => {
    cy.visit("/login");
  });
  after(() => {
    cy.wait(3000);
    cy.dataTest("dropdown").click();
    cy.wait(500);
    cy.dataTest("logout").click();
  });
  it("login as admin, and create apartment", () => {
    //login
    cy.dataTest("data_username").type("nebojsa.ilic.factoryww");
    cy.dataTest("data_password").type("password");
    cy.dataTest("login_button").click();
    // add new apartment
    cy.dataTest("new_apartment").click();
    cy.dataTest("data_lamella").type("2");
    cy.dataTest("data_square_footage").type("100");
    cy.dataTest("data_rooms").type("3");
    cy.dataTest("data_floor").type("4");
    cy.get(".css-b62m3t-container").click();
    cy.contains("Zapad").click();
    cy.dataTest("data_balconies").type("2");
    cy.dataTest("data_price").type("130000");
    cy.dataTest("add-image").click();
  });
});
