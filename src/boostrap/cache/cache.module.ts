import { Module } from "@nestjs/common";
import { CacheService } from "./cache.service";
import { PpLoggerService } from "../logger.service";

@Module({
    imports: [],
    providers: [
        CacheService,
        PpLoggerService
    ],
    exports: [CacheService],
})

export class CacheModule { }
