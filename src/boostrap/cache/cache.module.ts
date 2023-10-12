import { Module } from "@nestjs/common";
import { PpLoggerService } from "../logger.service";

@Module({
    imports: [],
    providers: [
        PpLoggerService
    ],
    exports: [],
})

export class CacheModule { }
