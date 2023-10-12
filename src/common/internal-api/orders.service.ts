import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Types } from 'mongoose';
import { HttpUtilService } from '../utils/http-util.service';
import { Urls } from './internal-api.urls';

@Injectable()
export class OrderInternalService {
  private BASE_URL: string;
  private logger = new Logger(OrderInternalService.name);

  constructor(
    private configService: ConfigService,
    private httpUtilService: HttpUtilService,
  ) {
    this.BASE_URL = this.configService.get('PP_BACKEND_URL');
  }

  async getOrderCount(body: any) {
    const url = this.BASE_URL + Urls.orderCount;
    const response: any = await this.httpUtilService.post(url, body, {});
    return response.data;
}
}
