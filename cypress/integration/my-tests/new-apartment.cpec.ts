/// <reference types="cypress" />

const card = [
  { name: "lamella", value: 2 },
  { name: "square_footage", value: 80 },
  { name: "rooms", value: 3 },
  { name: "floor", value: 4 },
  { name: "balconies", value: 2 },
  { name: "price", value: 80000 },
];

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
    cy.wrap(card).each((item: { name: string; value: string }) => {
      cy.dataTest(`data_${item.name}`).type(item.value);
    });
    cy.get(".css-b62m3t-container").click();
    cy.contains("Zapad").click();
    cy.dataTest("upload-image").attachFile("stan3.jpg");
    cy.dataTest("submit-apartment").click();
    cy.wait(1000);
    // check if new apartment is in list
    cy.checkApartmentCard(card);
  });
});
