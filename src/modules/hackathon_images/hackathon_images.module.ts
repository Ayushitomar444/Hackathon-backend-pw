import { Module } from '@nestjs/common';
import { HackathonImagesService } from './hackathon_images.service';
import { HackathonImagesController } from './hackathon_images.controller';
import { RepositoryModule } from 'src/common/base-repository/base-repository.module';
import { HackathonImages, HackathonImagesSchema } from './schema/hackathon_image.schema';

@Module({
  imports: [
    RepositoryModule.forFeature([{
      name: HackathonImages.name,
      schema: HackathonImagesSchema
    }])
  ],
  controllers: [HackathonImagesController],
  providers: [HackathonImagesService]
})
export class HackathonImagesModule {}
