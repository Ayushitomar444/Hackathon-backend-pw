import { Test, TestingModule } from '@nestjs/testing';
import { HackathonImagesService } from './hackathon_images.service';

describe('HackathonImagesService', () => {
  let service: HackathonImagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HackathonImagesService],
    }).compile();

    service = module.get<HackathonImagesService>(HackathonImagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
