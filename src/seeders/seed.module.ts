import { Module } from '@nestjs/common';
import { exportSeeders } from './index';

@Module({
  providers: [...exportSeeders],
  exports: [...exportSeeders],
})
export class SeedModule {}
