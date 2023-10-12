import { Transform } from "class-transformer";
import { IsNotEmpty } from "class-validator";

export class GetQuestionQueryDTO {
    
    @IsNotEmpty()
    @Transform(({ value }) => value ? parseInt(value) : null)
    level: number
}

