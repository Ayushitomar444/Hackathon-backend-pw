import { IsMongoId, IsNotEmpty, IsObject, IsOptional, IsString } from 'class-validator';

export class HeaderUserDto {
  @IsNotEmpty()
  @IsMongoId()
  userid: string;
}

export class HeaderOrganizationDto {
  @IsNotEmpty()
  @IsMongoId()
  organizationid: string;
}

export class HeaderUserOrganizationDto {
  @IsNotEmpty()
  @IsMongoId()
  organizationid: string;

  @IsNotEmpty()
  @IsMongoId()
  userid: string;

  @IsOptional()
  @IsString()
  "client-version": string;

  @IsOptional()
  @IsString()
  "client-type": string;

  @IsOptional()
  @IsString()
  "xx-kong-userid": string;

  @IsOptional()
  @IsString()
  "xx-kong-orgid": string;

}


export class HeaderUserOrganizationSchoolDto {
  @IsNotEmpty()
  @IsMongoId()
  organizationid: string;

  @IsNotEmpty()
  @IsMongoId()
  userid: string;

  @IsMongoId()
  schoolid: string;
}
