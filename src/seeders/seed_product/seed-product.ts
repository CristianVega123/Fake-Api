import { Injectable } from '@nestjs/common';
import { CommerceApi, Seed } from '../types';

@Injectable()
export class SeedProduct implements Seed {
  private amount_units: number;
  private product: CommerceApi;

  initialize(): void {}

  getObjectCreatedAll() {}

  set setAmountUnits(amount: number) {
    this.amount_units = amount;
  }
}
