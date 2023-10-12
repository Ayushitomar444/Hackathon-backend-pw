import { Injectable, Scope } from "@nestjs/common";
// import { PinoLogger } from "nestjs-pino";
import { ConfigService } from "@nestjs/config";

@Injectable({ scope: Scope.TRANSIENT })
export class PpLoggerService {
  // private readonly logger: PinoLogger;

  constructor(private configService: ConfigService) {
    const pinoConfig = this.configService.get("log_levels");
    // this.logger = new PinoLogger(pinoConfig);
  }
  setContext(context: string) {
    // this.logger.setContext(context);
  }
  /**
   * Write a 'log' level log.
   */
  log(...messages: any[]) {
    const message = messages?.length == 1 ? messages[0] : messages;
    // this.logger.info(message);
  }

  /**
   * Write an 'error' level log.
   */
  error(...messages: any[]) {
    const message = messages?.length == 1 ? messages[0] : messages;    
    // this.logger.error(message);
  }

  /**
   * Write a 'warn' level log.
   */
  warn(...messages: any[]) {
    const message = messages?.length == 1 ? messages[0] : messages;
    // this.logger.warn(message);
  }

  /**
   * Write a 'debug' level log.
   */
  debug(...messages: any[]) {
    const message = messages?.length == 1 ? messages[0] : messages;
    // this.logger.debug(message);
  }

  /**
   * Write a 'verbose' level log.
   */
  verbose(...messages: any[]) {
    const message = messages?.length == 1 ? messages[0] : messages;
    // this.logger.trace(message); // For PinoLogger, use 'trace' instead of 'verbose'
  }
  // /**
  //  * Write a 'log' level log.
  //  */
  // log(message: any, ...optionalParams: any[]) {
  //   super.log(message, optionalParams);
  // }

  // /**
  //  * Write an 'error' level log.
  //  */
  // error(message: any, ...optionalParams: any[]) {
  //   super.error(message, optionalParams);
  // }

  // /**
  //  * Write a 'warn' level log.
  //  */
  // warn(message: any, ...optionalParams: any[]) {
  //   super.warn(message, optionalParams);
  // }

  // /**
  //  * Write a 'debug' level log.
  //  */
  // debug(message: any, ...optionalParams: any[]) {
  //   super.debug(message, optionalParams);
  // }

  // /**
  //  * Write a 'verbose' level log.
  //  */
  // verbose(message: any, ...optionalParams: any[]) {
  //   super.verbose(message, optionalParams);
  // }
}

export interface PpLogger extends PpLoggerService {}