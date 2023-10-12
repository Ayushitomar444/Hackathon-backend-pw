import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Types } from 'mongoose';
import { HttpUtilService } from '../utils/http-util.service';
import { Urls } from './internal-api.urls';

@Injectable()
export class CohortInternalService {
  private BASE_URL: string;
  private TEST_SERVICE_BASE_URL: string;
  private logger = new Logger(CohortInternalService.name);

  constructor(
    private configService: ConfigService,
    private httpUtilService: HttpUtilService,
  ) {
    this.BASE_URL = this.configService.get('PP_BACKEND_URL');
    this.TEST_SERVICE_BASE_URL = this.configService.get('TEST_SERVICE_BASE_URL');
  }

  async getCohortBatchMappingList(body: any) {
    if (!body.batchId && !body.batchIds) {
      return [];
    }

    const url = this.BASE_URL + Urls.cohortBatchMapping;
    const response: any = await this.httpUtilService.post(url, body, {});
    return response.data;
}

async getCohortTestMappingList(body: any) {
    if (!body.modeId) {
      return [];
    }

    const url = this.TEST_SERVICE_BASE_URL + Urls.cohortTestMapping;
    const response: any = await this.httpUtilService.get(url, body, {});
    return response;
}
}
