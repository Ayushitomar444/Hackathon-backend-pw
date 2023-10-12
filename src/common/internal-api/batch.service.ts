import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Types } from 'mongoose';
import { HttpUtilService } from '../utils/http-util.service';
import { Urls } from './internal-api.urls';

@Injectable()
export class BatchInternalService {
  private BASE_URL: string;
  private logger = new Logger(BatchInternalService.name);

  constructor(
    private configService: ConfigService,
    private httpUtilService: HttpUtilService,
  ) {
    this.BASE_URL = this.configService.get('BATCH_SERVICE_BASE_URL');
  }

  async getFreeBatchStatus(batchId: string,userId: Types.ObjectId) {
    if (!batchId) {
      return[];
    }

    const url = this.BASE_URL +'/batch/v3/'+`${batchId}`+'/free-status';
    const response: any = await this.httpUtilService.get(url, {}, {userId: userId});
    return response;
  }

  async getPurchasedBatchStatus(batchId: string,userId: Types.ObjectId) {
    if (!batchId) {
      return[];
    }

    const url = this.BASE_URL +'/batch/batch-student/mapping/'+`${batchId}`+'/status';
    const response: any = await this.httpUtilService.get(url, {}, {userId: userId })
    return response;
  }

}