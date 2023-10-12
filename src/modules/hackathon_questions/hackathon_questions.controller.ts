import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ParamsBuilder } from 'src/common/ParamsBuilder';
import { GetQuestionQueryDTO } from './dto/hackathon_question.dto';
import { HackathonQuestionsService } from './hackathon_questions.service';

@Controller('hackathon-questions')
export class HackathonQuestionsController {
  constructor(private readonly hackathonQuestionsService: HackathonQuestionsService) { }

  @Get('/list')
  async getQuestions(@Query() query: GetQuestionQueryDTO) {
    return await this.hackathonQuestionsService.questionsList(query);
  }

  @Post('/create')
  async createQuestions(@Body() body) {
    return await this.hackathonQuestionsService.createQuestions(body)
  }

  @Post('/:questionId/validate-answer')
  async validateAnswer(@Param('questionId') questionId: string, @Body() body) {
    return await this.hackathonQuestionsService.validateAnswer(questionId, body);
  }
}
