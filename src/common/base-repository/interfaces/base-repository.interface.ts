import { Types, FilterQuery, Model, UpdateQuery } from "mongoose";
import { BaseDocument } from "./document.interface";
import { Params } from "./params.interface";

/**Interface for BaseRepository */
export interface BaseRepository<T> {
  model: Model<T>;
  /**returns document count for filterQuery */
  count(searchParams: FilterQuery<T>): Promise<number>;

  /**returns single document for a given query*/
  fetchOne(params: Params<T>): Promise<BaseDocument<T>>;

  /**returns all documents for a given query */
  list(params: Params<T>): Promise<Array<BaseDocument<T>>>;

  /**creates a single document in db*/
  create(data: T): Promise<BaseDocument<T>>;

  /**creates document list in db */
  createMany(dataList: T[]); //todo

  /**finds one and update the document*/
  findOneAndUpdate(
    searchParams: FilterQuery<T>,
    data: UpdateQuery<BaseDocument<T>>
  ): Promise<BaseDocument<T>>;

  findByIdAndUpdate(
    id: Types.ObjectId,
    data: UpdateQuery<BaseDocument<T>>
  ) 

  // /**find the document by Id*/
  // findById(id: any); //To do

  /**finds and update all matching document*/
  updateMany(searchParams: FilterQuery<T>, data: UpdateQuery<BaseDocument<T>>); //todo return type

  /**deletes one matching document */
  deleteOne(searchParams: FilterQuery<T>); //todo return type

  /**deletes all matching document */
  deleteMany(searchParams: FilterQuery<T>); //todo return type

  /**calls logger instance from repository*/
  log(data: any): void;

  aggregate(query: any, collation: any);

  clearCache(hashkey: any);

  bulkWrite(operations: any);
}
