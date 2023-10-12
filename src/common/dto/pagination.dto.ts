import { Transform, Type } from 'class-transformer';
import { IsOptional } from 'class-validator';

export const DEFAULT__PAGE_LIMIT = 20;
export const DEFAULT_PAGE = 0;
export const DEFAULT_SKIP = 0;

export class PageLimitDto {
  @IsOptional()
  @Type(() => Number)
  @Transform(getParamFromArray)
  page?: number = DEFAULT_PAGE;

  @IsOptional()
  @Type(() => Number)
  @Transform(getParamFromArray)
  limit?: number = DEFAULT__PAGE_LIMIT;

  @IsOptional()
  @Type(() => Number)
  @Transform(getParamFromArray)
  skip?: number = DEFAULT_SKIP;
}

function getParamFromArray(request): any {
  if (Array.isArray(request?.value)) {
    return Number(request?.value[0]);
  }
  return Number(request?.value);
}