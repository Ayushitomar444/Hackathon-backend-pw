import { Test, TestingModule } from '@nestjs/testing';
import { HackathonImagesController } from './hackathon_images.controller';
import { HackathonImagesService } from './hackathon_images.service';

describe('HackathonImagesController', () => {
  let controller: HackathonImagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HackathonImagesController],
      providers: [HackathonImagesService],
    }).compile();

    controller = module.get<HackathonImagesController>(HackathonImagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
