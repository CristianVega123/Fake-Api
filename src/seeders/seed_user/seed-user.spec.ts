import { SeedUser } from './seed-user';

describe('SeedUser', () => {
  let seedUser: SeedUser;
  beforeEach(() => {
    const amount_user = 5;
    seedUser = new SeedUser();
    seedUser.setAmountUnits = amount_user;
  });

  it(`Fall error when the user amount it's 0`, () => {
    seedUser.setAmountUnits = 0;
    seedUser.initialize();

    const result = seedUser.getObjectCreatedAll();

    expect(result.person).not.toBeDefined();
  });

  it(`To verify the values that it's present within the person object`, () => {
    seedUser.setAmountUnits = 3;
    seedUser.initialize();
    const result = seedUser.getObjectCreatedAll();
    // console.log(result.person);

    expect(result.person).toBeDefined();

    if (result.person) {
      for (let index = 0; index < result.person.length; index++) {
        const element = result.person[index];
        const property = ['id', 'lastName', 'firstName', 'fullName'];
        for (let index = 0; index < property.length; index++) {
          const property_element = property[index];
          expect(element).toHaveProperty(property_element);
        }
      }
    }
  });
});
