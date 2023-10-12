import { Inject, Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/common/base-repository/interfaces';
import { CreateHackathonImageDto } from './dto/create-hackathon_image.dto';
import { UpdateHackathonImageDto } from './dto/update-hackathon_image.dto';
import { HackathonImages } from './schema/hackathon_image.schema';

@Injectable()
export class HackathonImagesService {
 constructor(
  @Inject(HackathonImages.name)
  private readonly imagesRepo: BaseRepository<HackathonImages>
 ) {}

 async getImages(params) {
  return await this.imagesRepo.fetchOne(params);
 }

}
