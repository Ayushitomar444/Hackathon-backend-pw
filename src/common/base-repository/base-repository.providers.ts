import { Types, FilterQuery, Model, UpdateQuery } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import type { BaseRepository, BaseDocument, Params } from "./interfaces";
import { BadRequestException, Logger } from "@nestjs/common";
import { PpLoggerService } from "src/boostrap/logger.service";
const moment = require("moment");

interface Provider {
  provide: string;
  useClass: any;
}

const defaultParams = {
  isLean: true,
};

/**Repository provider for given schema name*/
function getProvider(name: string): Provider {
  // @ts-ignore
  class Repository<T> implements BaseRepository<T> {
    constructor(
      @InjectModel(name)
      public model: Model<BaseDocument<T>>,
      private logger: PpLoggerService
    ) { 
      this.logger.setContext(Repository.name)
    }

    log(data: any) {
      this.logger.log(data);
    }

    async count(searchParams: FilterQuery<BaseDocument<T>>) {
      try {
        const count = await this.model.count(searchParams);
        return count;
      } catch (err) {
        this.logger.error(err);
        throw err;
      }
    }

    async fetchOne(params: Params<T>) {
      try {
        params = { ...defaultParams, ...params };
        const entity = this.generateSearchQueryForFetchOne(params);
        const doc = await entity.exec();
        return doc;
      } catch (err) {
        this.logger.error(err);
        throw err;
      }
    }

    async list(params: Params<T>) {
      try {
        params = { ...defaultParams, ...params };
        const entity = this.generateSearchQueryForFetch(params);
        const doc = await entity.exec();
        return doc;
      } catch (err) {
        this.logger.error(err);
        throw err;
      }
    }

    async create(data: any) {
      try {
        const entity = new this.model(data);
        const doc = await entity.save();
        return doc;
      } catch (error) {
        this.logger.error(error);
        throw error;
      }
    }

    async createMany(dataList: T[]) {
      try {
        const result = await this.model.insertMany(dataList);
        return result;
      } catch (error) {
        this.logger.error(error);
        throw error;
      }
    }

    async findOneAndUpdate(
      searchParams: FilterQuery<BaseDocument<T>>,
      data: UpdateQuery<BaseDocument<T>>
    ) {
      Object.assign(data, { updatedAt: new Date() });
      try {
        const doc = await this.model.findOneAndUpdate(searchParams,data, {
          new: true,
        }); //returns new document

        // if (!doc) throw new BadRequestException('Invalid searchparams');
        return doc;
      } catch (error) {
        this.logger.error(error);
        throw error;
      }
    }

    async findByIdAndUpdate(
      id: Types.ObjectId,
      data: UpdateQuery<BaseDocument<T>>
    ) {
      data = Object.assign(data, { updatedAt: new Date() });

      try {
        const doc = await this.model.findByIdAndUpdate(id, data, {
          new: true,
        }); //returns new document

        // if (!doc) throw new BadRequestException('Invalid searchparams');
        return doc;
      } catch (error) {
        this.logger.error(error);
        throw error;
      }
    }

    async updateMany(
      searchParams: FilterQuery<BaseDocument<T>>,
      data: UpdateQuery<BaseDocument<T>>
    ) {
      try {
        Object.assign(data, { updatedAt: new Date() });
        const result = await this.model.updateMany(searchParams, data);
        return result;
      } catch (error) {
        this.logger.error(error);
        throw error;
      }
    }

    async deleteOne(searchParams: FilterQuery<BaseDocument<T>>) {
      try {
        const result = await this.model.deleteOne(searchParams);
        return result;
      } catch (error) {
        this.logger.error(error);
        throw error;
      }
    }

    async deleteMany(searchParams: FilterQuery<BaseDocument<T>>) {
      try {
        const result = await this.model.deleteMany(searchParams);
        return result;
      } catch (error) {
        this.logger.error(error);
        throw error;
      }
    }

    generateSearchQueryForFetchOne(params: Params<T>) {
      let entity = this.model.findOne(params.searchParams || {});

      if (params.project) {
        entity = this.model.findOne(
          params.searchParams || {},
          params.project || {}
        );
      }
      if (params.populate) {
        entity.populate(params.populate);
      }
      // if (params.deepPopulate) {
      //   entity.deepPopulate(params.deepPopulate);
      // }
      if (params.sort) {
        entity.sort(params.sort);
      }
      if (params.isLean) {
        entity.lean();
      }
      return entity;
    }

    generateSearchQueryForFetch(params: Params<T>) {
      let entity = this.model.find(params.searchParams || {});

      if (params.project) {
        entity = this.model.find(
          params.searchParams || {},
          params.project || {}
        );
      }
      if (params.populate) {
        entity.populate(params.populate);
      }
      // if (params.deepPopulate) {
      //   entity.deepPopulate(params.deepPopulate);
      // }
      if (params.sort) {
        entity.sort(params.sort);
      }

      const page = params.page;
      const limit = params.limit;
      if (page && limit && page > 0) {
        params.skip = (page - 1) * limit;
      }

      if (params.skip) {
        entity.skip(params.skip);
      }
      if (params.limit) {
        entity.limit(params.limit);
      }
      if (params.isLean) {
        entity.lean();
      }
      return entity;
    }
    aggregate(query: any, collation: any) {
      //Todo convert in ts && nestjs :)
      let entity = this.model.aggregate(query).allowDiskUse(true);
      if (collation) {
        entity.collation(collation);
      }
      return entity.exec();
    }

    clearCache(hashkey) {
      //DOUBT:- How to define client??????
      // let client = null;
      // if (client != null)
      // return client.del(JSON.stringify(hashkey))
    }

    async bulkWrite(operations: any[]) {
      try {
        const result = await this.model.bulkWrite(operations);
        return result;
      } catch (error) {
        this.logger.error(error);
        throw error;
      }
    }
    
  }

  return {
    provide: name,
    useClass: Repository,
  };
}

/**Provides repository for given features*/
export function getProviders(features): Provider[] {
  return features.map(({ name }) => getProvider(name));
}
