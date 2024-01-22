import { Module } from '@nestjs/common';
import { array_controllers } from './index';
import { SeedModule } from 'src/seeders/seed.module';

@Module({
  imports: [SeedModule],
  controllers: [...array_controllers],
})
export class ControllersModule {}
