import { Module } from '@nestjs/common';
import { PpLoggerService } from 'src/boostrap/logger.service';
import { HttpUtilService } from './http-util.service';
import { UtilityService } from './utility.service';

@Module({
  providers: [UtilityService, HttpUtilService, PpLoggerService],
  exports: [UtilityService, HttpUtilService],
})
export class UtilityModule {}
