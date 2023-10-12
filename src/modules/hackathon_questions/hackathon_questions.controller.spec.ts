import { Test, TestingModule } from '@nestjs/testing';
import { HackathonQuestionsController } from './hackathon_questions.controller';
import { HackathonQuestionsService } from './hackathon_questions.service';

describe('HackathonQuestionsController', () => {
  let controller: HackathonQuestionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HackathonQuestionsController],
      providers: [HackathonQuestionsService],
    }).compile();

    controller = module.get<HackathonQuestionsController>(HackathonQuestionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
