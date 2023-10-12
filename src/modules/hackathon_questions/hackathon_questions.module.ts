import { Module } from '@nestjs/common';
import { HackathonQuestionsService } from './hackathon_questions.service';
import { HackathonQuestionsController } from './hackathon_questions.controller';
import { RepositoryModule } from 'src/common/base-repository/base-repository.module';
import { HackathonQuestions, HackathonQuestionSchema } from './schema/hackathon_question.schema';
import { HackathonQuestionsRepository } from './hackathon_questions.repository';

@Module({
  imports: [
    RepositoryModule.forFeature([{
      name: HackathonQuestions.name,
      schema: HackathonQuestionSchema
    }])
  ],
  controllers: [HackathonQuestionsController],
  providers: [HackathonQuestionsService, HackathonQuestionsRepository],
  exports: [HackathonQuestionsService, HackathonQuestionsRepository]
})
export class HackathonQuestionsModule {}
