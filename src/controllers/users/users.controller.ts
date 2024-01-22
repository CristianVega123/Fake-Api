import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { SeedUser } from '../../seeders/seed_user/seed-user';

@Controller('users')
export class UsersController {
  constructor(private seedUser: SeedUser) {}

  @Get(':amount')
  UserGeneral(@Param('amount') amount?: number) {
    if (amount && !isNaN(amount)) {
      this.seedUser.setAmountUnits = amount;
      this.seedUser.initialize();
      return this.seedUser.getObjectCreatedAll();
    } else {
      throw new HttpException(
        'Not allowed another type that is not number',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
