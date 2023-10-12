import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import * as Redis from 'ioredis'
import { PpLoggerService } from "../logger.service";

@Injectable()
export class CacheService {
  private client: Redis.Cluster | Redis.default;
  enableCache = true;
  isClientConnected = false;
  //private readonly logger = new PpLogger(CacheService.name);

  constructor(
    private configService: ConfigService,
    private logger: PpLoggerService
  ) {
    this.logger.setContext(CacheService.name)
    this.connect();
  }

  private async connect() {
    try {
      const REDIS_URI = this.configService.get("REDIS_URI");
      const REDIS_NODES = this.configService.get("REDIS_NODE");

      const retryStrategy = (times) => {
        if (times > 5) {
          this.logger.debug('maximum retry exceeded');
          return null;
        } else {
          this.logger.debug('retrying... ' + times);
          return times;
        }
      };
      if (REDIS_NODES) {
        this.client = new Redis.Cluster(REDIS_NODES, {
          clusterRetryStrategy: retryStrategy
        })
      } else if (REDIS_URI) {
        this.client = new Redis.default(REDIS_URI, {
          retryStrategy: retryStrategy
        });
      } else return;
      this.client.on("error", (err) => {
        this.logger.error("Redis Client Error: ", err);
        this.isClientConnected = false;
      });
      this.client.on("ready", (err) => {
        this.isClientConnected = true;
        this.logger.debug('Redis Client Connected Successfully');
        if (this.client.isCluster) {
          this.logger.debug('Redis Cluster mode is enabled');
        }
      });
    } catch (error) {
      console.log("redis not connected");
      this.logger.error(error);
      this.isClientConnected = false;
    }
  }

  async hGet(hKey: string, key: string) {
    try {
      if (!(this.enableCache && this.isClientConnected)) return null;
      const data = await this.client.hget(hKey, key);
      if (data) {
        //this.logger.verbose(`found cache for hKey: ${hKey}, key: ${key}`);
        return JSON.parse(data);
      }
    } catch (error) {
      this.logger.error(error);
      this.logger.error("arguments: ", ...arguments);
      return null;
    }
  }

  async hGetAll(hKey: string) {
    try {
      if (!(this.enableCache && this.isClientConnected)) return null;
      const data = await this.client.hgetall(hKey);
      if (data) {
        //this.logger.verbose(`Fetched all data from cache hKey: ${hKey}`);
        return data;
      }
    } catch (error) {
      this.logger.error(error);
      this.logger.error("arguments: ", ...arguments);
      return null;
    }
  }

  async hSet(hKey: string, key: string, data: any, ttl?: number, expireAt?: number) {
    try {
      if (!(this.enableCache && this.isClientConnected)) return null;
      data = JSON.stringify(data);

      await this.client.hset(hKey, key, data);
      if (!ttl && !expireAt) ttl = 864000; //default TTL 10 days set when ttl and expireAt not given
      expireAt && await this.client.expireat(hKey, expireAt); //if expireAt given
      !expireAt && await this.client.expire(hKey, ttl, "NX"); //if expireAt not given set ttl
      return null;
    } catch (error) {
      this.logger.error(error);
      this.logger.error("arguments: ", ...arguments);
      return null;
    }
  }

  async hDel(hKey: string, key) {
    try {
      if (!(this.enableCache && this.isClientConnected)) return null;
      const data = await this.client.hdel(hKey, key);
      if (data)
        //this.logger.verbose(`deleted cache for hKey: ${hKey}, key: ${key}`);
        return;
    } catch (error) {
      this.logger.error(error);
      this.logger.error("arguments: ", ...arguments);
      return null;
    }
  }

  async del(hKey) {
    try {
      if (!(this.enableCache && this.isClientConnected)) return null;
      const data = await this.client.del(hKey);
      if (data) //this.logger.verbose(`deleted cache for hKey: ${hKey}`);
        return;
    } catch (error) {
      this.logger.error(error);
      this.logger.error("arguments: ", ...arguments);
      return null;
    }
  }

  async lPush(lkey: string, data: any) {
    try {
      if (!(this.enableCache && this.isClientConnected)) return null;
      data = JSON.stringify(data);
      await this.client.lpush(lkey, data);
      return;
    } catch (error) {
      this.logger.error(error);
      this.logger.error("arguments: ", ...arguments);
      return null;
    }
  }

  async lRange(lKey: string, start = 0, stop = -1) {
    try {
      if (!(this.enableCache && this.isClientConnected)) return null;
      const data = await this.client.lrange(lKey, start, stop);
      return data;
    } catch (error) {
      this.logger.error(error);
      this.logger.error("arguments: ", ...arguments);
      return null;
    }
  }

  async hIncrBy(hKey: string, field, value = 1) {
    try {
      if (!(this.enableCache && this.isClientConnected)) return null;
      const data = await this.client.hincrby(hKey, field, value);
      return data;
    } catch (error) {
      this.logger.error(error);
      this.logger.error("arguments: ", ...arguments);
      return null;
    }
  }

  async get(key: string) {
    try {
      if (!(this.enableCache && this.isClientConnected)) {
        this.logger.debug('Redis Client Not Connected');
        return null;
      }
      const data = await this.client.get(key);
      if (data) {
        //this.logger.verbose(`Fetched all data from cache hKey: ${hKey}`);
        return JSON.parse(data);
      }
    } catch (error) {
      this.logger.error(error);
      this.logger.error("arguments: ", ...arguments);
      return null;
    }
  }

  async incr(key: string, ttl?: number) {
    try {
      if (!(this.enableCache && this.isClientConnected)) {
        this.logger.debug('Redis Client Not Connected');
        return null;
      }
      await this.client.incr(key);
      if (!ttl) ttl = 864000; //10 days
      await this.client.expire(key, ttl);
    } catch (error) {
      this.logger.error(error);
      this.logger.error("arguments: ", ...arguments);
      return null;
    }
  }

  async set(key: string, data: any, ttl?: number) {
    try {
      if (!(this.enableCache && this.isClientConnected)) {
        this.logger.debug('Redis Client Not Connected');
        return null;
      }
      data = JSON.stringify(data);
      await this.client.set(key, data);
      if (!ttl) ttl = 60 * 60 * 24;
      await this.client.expire(key, ttl);
      return null;
    } catch (error) {
      this.logger.error(
        'set Error:',
        error,
        'arguments: ',
        JSON.stringify(arguments),
      );
      return null;
    }
  }

}