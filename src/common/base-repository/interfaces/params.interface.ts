import { SearchOptions } from "./search-options.interface";
import { FilterQuery } from "mongoose";
import { BaseDocument } from "./document.interface";

/**params required to find documents*/
export interface Params<T> extends SearchOptions<BaseDocument<T>> {
  searchParams: FilterQuery<BaseDocument<T>>;
}
