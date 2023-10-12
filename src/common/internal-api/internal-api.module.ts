import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { PpLoggerService } from 'src/boostrap/logger.service';
import { HttpUtilService } from '../utils/http-util.service';
import { UserInternalService } from './user.service';
import { FileInternalService } from './file.service';
import { CohortInternalService } from './cohort.service';
import { OrderInternalService } from './orders.service';
import { BatchInternalService } from './batch.service';
import { FeeInternalService } from './fee-internal.service';

@Module({
    imports: [
        HttpModule.register({
            timeout: 29000,
        }),
    ],
    providers: [
        HttpUtilService,
        UserInternalService,
        FileInternalService,
        CohortInternalService,
        PpLoggerService,
        OrderInternalService,
        BatchInternalService,
        FeeInternalService
    ],
    exports: [
        HttpUtilService,
        UserInternalService,
        FileInternalService,
        CohortInternalService,
        OrderInternalService,
        BatchInternalService,
        FeeInternalService
    ],
})
export class InternalApiModule { }
