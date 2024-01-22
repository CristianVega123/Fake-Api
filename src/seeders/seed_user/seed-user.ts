import { Injectable } from '@nestjs/common';
import { Seed, UserApi } from '../types';
import { faker } from '@faker-js/faker';

@Injectable()
export class SeedUser implements Seed {
  private amount_units?: number;
  private user: {
    person?: UserApi[];
  };

  //TODO I have to separate it for making new functionality.
  public initialize(): void {
    if (this.amount_units) {
      const array_person: UserApi[] = [];
      for (let index = 0; index <= this.amount_units; index++) {
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();

        array_person.push({
          id: index,
          firstName,
          lastName,
          fullName: `${firstName} ${lastName}`,
        });
      }
      this.user = {
        person: array_person,
      };
    } else {
      this.user = {};
    }
  }

  public getObjectCreatedAll() {
    return this.user;
  }

  set setAmountUnits(amount: number) {
    this.amount_units = amount;
  }

  private userNormal(): void {}
}
