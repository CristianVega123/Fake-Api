import { IsEmpty, IsEmail } from 'class-validator';

export class CreateProductDto {
  @IsEmail()
  email: string;
}
