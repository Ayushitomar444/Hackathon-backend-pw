import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Types } from 'mongoose';
import { HttpUtilService } from '../utils/http-util.service';
import { Urls } from './internal-api.urls';
//import FormData from 'form-data';
import * as FormData from 'form-data'
import * as fs from 'fs';
import { PpLoggerService } from 'src/boostrap/logger.service';

@Injectable()
export class FileInternalService {
  private BASE_URL: string;

  constructor(
    private configService: ConfigService,
    private httpUtilService: HttpUtilService,
    private logger: PpLoggerService
  ) {
    this.logger.setContext(FileInternalService.name)
    this.BASE_URL = this.configService.get('PP_BACKEND_URL');
  }

  async getFileS3Url(filePath: string,organizationId: Types.ObjectId) {
    try {  
        const form = new FormData();
        form.append('file', fs.createReadStream(filePath));
        const url = this.BASE_URL + Urls.uploadFileS3;
        const response: any = await this.httpUtilService.post(url, form, {
            organizationId: organizationId,
            ...form.getHeaders(),
        });
        return response.data;
    } catch (error) {
        this.logger.error(JSON.stringify(error));
        throw error;
    }
  }
  
  async deleteFile(filePath: string) {
    fs.unlink(filePath, (error) => {
        if (error) {
            this.logger.log('Error deleting file:', error);
        }
    });
  }
}
