declare namespace Cypress {
  interface Chainable {
    dataTest(value: string): Chainable;
    checkApartmentCard(
      newApartment: {
        name: string;
        value: number;
      }[]
    ): Chainable;
  }
}
