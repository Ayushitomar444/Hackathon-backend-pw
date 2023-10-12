import { Document } from "mongoose";

/** It extends document fields to schema defnition*/
export type BaseDocument<T> = T &
  Document & {
    createdAt: Date;
    updatedAt: Date;
  };

export type PopulatedDocument<T, U> = Omit<BaseDocument<T>, keyof U> & U;
