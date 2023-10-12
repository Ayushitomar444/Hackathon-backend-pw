import { Injectable } from '@nestjs/common';
import { ParamsBuilder } from 'src/common/ParamsBuilder';
import { GetQuestionQueryDTO } from './dto/hackathon_question.dto';
import { HackathonQuestionsRepository } from './hackathon_questions.repository';
import * as _ from "lodash";
import { Types } from 'mongoose';

@Injectable()
export class HackathonQuestionsService {
  constructor(
    private readonly hackathonQuestionsRepository: HackathonQuestionsRepository
  ) {

  }

  async questionsList(query: GetQuestionQueryDTO) {
    let params = new ParamsBuilder().addSearch("level", query.level)
    let list = await this.hackathonQuestionsRepository.list(params.build());

    list = list.map(item => {
      item = _.pick(item, ["_id", "questionText", "level", "jumbledText"]);
      return item;
    })
    return list;
  }

  async createQuestions(body) {
    return await this.hackathonQuestionsRepository.create(body);
  }

  async validateAnswer(questionId, body) {

    let params = new ParamsBuilder().addSearch("_id", new Types.ObjectId(questionId));
    let question = await this.hackathonQuestionsRepository.fetchOne(params.build());
    let solution = question.solution;

    if (solution.toLowerCase() === body.answer.toLowerCase()) {
      return { "status": "CORRECT" }
    }
    else {
      return { "status": "INCORRECT" }
    }
  }
}
