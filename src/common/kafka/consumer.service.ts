import { Injectable, OnApplicationShutdown } from '@nestjs/common';
import {
  Consumer,
  ConsumerRunConfig,
  ConsumerSubscribeTopic,
} from '@nestjs/microservices/external/kafka.interface';
import { ConsumerConfig, Kafka } from 'kafkajs';
import config from "../../config/env.config";

const configVals = config()

@Injectable()
export class ConsumerService implements OnApplicationShutdown {
  private readonly kafka = new Kafka({
    brokers: [configVals.kafka.brokers],
    ssl: true,
    sasl: { username: configVals.kafka.userName, password: configVals.kafka.password, mechanism: 'plain' }
  });

  private readonly consumers: Consumer[] = [];

  async consume(topic: ConsumerSubscribeTopic, groupId, config: ConsumerRunConfig, options?: ConsumerConfig) {
    let consumerConfig = {
      groupId: groupId,
      readUncommitted: true,
      allowAutoTopicCreation: true
    }
    if(options) {
      consumerConfig = {...consumerConfig, ...options};
    }
    const consumer = this.kafka.consumer(consumerConfig);
    await consumer.connect();
    await consumer.subscribe(topic);
    await consumer.run(config);
    this.consumers.push(consumer);
  }
  async onApplicationShutdown(signal?: string) {
    for (const consumer of this.consumers) {
      await consumer.disconnect();
    }
  }
}
