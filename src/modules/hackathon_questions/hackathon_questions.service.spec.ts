import { Test, TestingModule } from '@nestjs/testing';
import { HackathonQuestionsService } from './hackathon_questions.service';

describe('HackathonQuestionsService', () => {
  let service: HackathonQuestionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HackathonQuestionsService],
    }).compile();

    service = module.get<HackathonQuestionsService>(HackathonQuestionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
