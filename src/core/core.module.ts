import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule } from '@nestjs/microservices';
import { MongooseModule } from '@nestjs/mongoose';
import { HttpConfigService } from '../boostrap/http.config.service';
import { KafkaConfigService } from 'src/boostrap/kafka.config';
import { PpLogger, PpLoggerService } from 'src/boostrap/logger.service';
import { MongoDBConfigService } from 'src/boostrap/mongodb.config.service';
import { service_name } from 'src/common/constants';
import configuration from '../config/env.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
      envFilePath: '.env'
    }),
    HttpModule.registerAsync({
      imports: [ConfigModule],
      useClass: HttpConfigService,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useClass: MongoDBConfigService,
    })
  ],
  providers: [PpLoggerService],
  exports: [ConfigModule, MongooseModule, HttpModule],
})
export class CoreModule {}
