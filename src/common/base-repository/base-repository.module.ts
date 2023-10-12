import { DynamicModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { getProviders } from './base-repository.providers';
import { PpLoggerService } from 'src/boostrap/logger.service';

/**module contains mongoose module and base repository providers*/
@Module({})
export class RepositoryModule {
  static forFeature(features): DynamicModule {
    return {
      module: RepositoryModule,
      imports: [MongooseModule.forFeature(features)],
      providers: [...getProviders(features), PpLoggerService],
      exports: getProviders(features),
    };
  }
}
