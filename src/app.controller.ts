import { Controller, Get} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { PpLogger } from './boostrap/logger.service';
import { Logger } from './common/decorators/logger.decorator';
@Controller()
@ApiTags("App")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/healthcheck")
  getHello() {
    return this.appService.getHello();
  }
}
