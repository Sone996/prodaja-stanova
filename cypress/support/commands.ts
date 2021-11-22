import "cypress-file-upload";
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("dataTest", (value) => {
  return cy.get(`[data-test=${value}]`);
});

Cypress.Commands.add("checkApartmentCard", (card) => {
  return cy.wrap(card).each((item: any) => {
    return cy
      .dataTest("apartments-page")
      .find("[data-test=apartment-card-0]")
      .should("be.visible")
      .find(`[data-test=${item.name}]`)
      .contains(item.value)
      .should("be.visible");
  });
});
