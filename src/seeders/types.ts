import { PersonDefinition, CommerceDefinition } from '@faker-js/faker';

export interface Seed {
  initialize(): void;
  getObjectCreatedAll(): unknown;
  set setAmountUnits(amount: number);
}

type UserApiDefinition = {
  [index: string]: any;
  // admin?: string;
};

type CommerceApiDefinition = {
  [index: string]: any;
};

//? Types for extending the values that the library provides me
export type UserApi = PersonDefinition & UserApiDefinition;
export type CommerceApi = CommerceApiDefinition & CommerceDefinition;
