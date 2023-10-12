import { PartialType } from '@nestjs/mapped-types';
import { CreateHackathonImageDto } from './create-hackathon_image.dto';

export class UpdateHackathonImageDto extends PartialType(CreateHackathonImageDto) {}
