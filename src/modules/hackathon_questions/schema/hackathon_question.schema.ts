import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { SchemaTypes, Types } from "mongoose";
import { BaseEntity } from "../../../common/base-repository/base-entity";
import { CouponStudentMappingStatus, CouponKind } from "../../../lookup.enums";
import * as _ from 'lodash'

@Schema({ collection: "hackathon_questions", timestamps: true })
export class HackathonQuestions extends BaseEntity {

    _id: Types.ObjectId;
    
    @Prop({
        type: String,
    })
    questionText: string;

    @Prop({
        type: String
    })
    solution: string;

    @Prop({
        type: Number,
    })
    level: number;

    @Prop({
        type: String
    })
    jumbledText: string;

    @Prop({
        type: String
    })
    image: string;

    constructor(data?: any) {
        super();
        if(data) Object.assign(this, data);
        return this;
    }
}

export const HackathonQuestionSchema = SchemaFactory.createForClass(HackathonQuestions);