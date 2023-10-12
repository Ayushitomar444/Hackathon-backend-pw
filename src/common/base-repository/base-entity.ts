import { Prop } from "@nestjs/mongoose";

export class BaseEntity {
  @Prop({
    type: Date,
    default: Date.now(),
  })
  createdAt: Date;

  @Prop({
    type: Date,
    default: Date.now(),
  })
  updatedAt: Date;
}
