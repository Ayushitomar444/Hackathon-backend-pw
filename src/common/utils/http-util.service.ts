import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs';
import { AxiosRequestConfig } from 'axios';
import { HttpException, Injectable } from '@nestjs/common';
import { PpLoggerService } from '../../boostrap/logger.service';

@Injectable()
export class HttpUtilService {
  httpService = new HttpService();
  constructor(
    private readonly logger: PpLoggerService
  ) {
    this.logger.setContext(HttpUtilService.name)
  }

  request<T = any>(config: AxiosRequestConfig<any>) {
    return new Promise((resolve, reject) => {
      this.httpService.request(config).subscribe({
        next(res) {
          resolve(res.data);
        },
        error(err) {
          reject(err);
        },
      });
    });
  }

  async get(url, params, headers, config?: AxiosRequestConfig) {
    let options: AxiosRequestConfig = {
      url: url,
      params,
      headers
    };

    if(config) {
      options = {...options, ...config}
    }

    return new Promise((resolve, reject) => {
      this.httpService
        .get(url, options)
        .pipe(map((response) => response.data))
        .subscribe({
          next: (data) => resolve(data?.data ? data?.data : data),
          error: (error) => {
            this.logger.error(
              `Error From: (External Call): url- ${url} , Method: GET, params: ${params}, Headers: ${headers}, timestamp: ${new Date()}, Error: ${JSON.stringify(
                error,
              )}`,
            );
            if (error.response && error.response.data) {
              const { error: err, message, statusCode, data } = error.response.data;
              //nestjs projects
              if (message && statusCode) {
                reject(new HttpException(new Error(message), statusCode));
              }
              //penpencil backend
              else if (err && err.message && err.status) {
                reject(new HttpException(new Error(err.message), err.status));
              }
              //batch service
              else if (data) {
                reject(new HttpException(new Error(data), error.response.status || 500));
              }
              //429 and others
              else {
                const msg = error.response.data;
                const statusCode = error.response.statusCode || 500;
                reject(new HttpException(msg, statusCode));
              }
            } else {
              //connection error
              reject(new HttpException((error?.message), 500));
            }
          },
        });
    });
  }

  post(url, data, headers) {
    const options: AxiosRequestConfig = {
      url:url,
      headers,
      data
    };
    return new Promise((resolve, reject) => {
      this.httpService
        .post(url, data, options)
        .pipe(map((response) => response.data))
        .subscribe({
          next: (data) => resolve(data),
          error: (error) => {
            if (error.response && error.response.data) {
              const { error: err } = error.response.data;
              reject(new HttpException(new Error(err.message), err.status));
            } else {
              //connection error
              reject(new HttpException(new Error(error?.message), 500));
            }
          },
        });
    });
  }

  put(url, data, headers) {
    const options: AxiosRequestConfig = {
      headers,
    };
    return new Promise((resolve, reject) => {
      this.httpService
        .put(url, data, options)
        .pipe(map((response) => response.data))
        .subscribe({
          next: (data) => resolve(data.data),
          error: (error) => {
            if (error.response && error.response.data) {
              const { error: err } = error.response.data;
              reject(new HttpException(new Error(err.message), err.status));
            } else {
              //connection error
              reject(new HttpException(new Error(error?.message), 500));
            }
          },
        });
    });
  }

  delete(url, headers) {
    const options: AxiosRequestConfig = {
      headers,
    };

    return new Promise((resolve, reject) => {
      this.httpService
        .delete(url, options)
        .pipe(map((response) => response.data))
        .subscribe({
          next: (data) => resolve(data.data),
          error: (error) => {
            if (error.response && error.response.data) {
              const { error: err } = error.response.data;
              reject(new HttpException(new Error(err.message), err.status));
            } else {
              //connection error
              reject(new HttpException(new Error(error?.message), 500));
            }
          },
        });
    });
  }
}
