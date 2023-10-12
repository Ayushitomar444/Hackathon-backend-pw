import { Inject, Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/common/base-repository/interfaces';
import { HackathonQuestions } from './schema/hackathon_question.schema';

@Injectable()
export class HackathonQuestionsRepository {

    constructor(
        @Inject(HackathonQuestions.name)
        private readonly hackathonQuestionsRepo: BaseRepository<HackathonQuestions>
    ){

    }

    async list(params) {
        return await this.hackathonQuestionsRepo.list(params);
    }

    async create(data) {
        return this.hackathonQuestionsRepo.create(data)
    }

    async fetchOne(params){
        return await this.hackathonQuestionsRepo.fetchOne(params);
    }
}
