import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './core/core.module';
import { HttpModule } from '@nestjs/axios';
import { PpLoggerService } from './boostrap/logger.service';
import { CacheModule } from './boostrap/cache/cache.module';
import { UtilityModule } from './common/utils/utility.module';
import { PpLoggingInterceptor } from './common/interceptors/logger.interceptor';
import { HackathonQuestionsModule } from './modules/hackathon_questions/hackathon_questions.module';
import { HackathonImagesModule } from './modules/hackathon_images/hackathon_images.module';

@Module({
  imports: [
    CacheModule,
    UtilityModule,
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
    CoreModule,
    HackathonQuestionsModule,
    HackathonImagesModule
  ],
  controllers: [AppController],
  providers: [AppService, PpLoggerService, PpLoggingInterceptor],
  exports: [PpLoggerService]
})
export class AppModule { };