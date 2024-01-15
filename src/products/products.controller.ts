import { Controller, Get, Body } from '@nestjs/common';
import { Request } from 'express';
import { CreateProductDto } from './Dto/CreateProductDto';

@Controller('products')
export class ProductsController {
  @Get('/products')
  findAll(request: Request, @Body() createProduct: CreateProductDto) {
    return null;
  }
}
