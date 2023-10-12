// import {
//   Injectable,
//   OnApplicationShutdown,
//   OnModuleInit
// } from '@nestjs/common';
// import {
//   Producer,
//   ProducerRecord,
// } from '@nestjs/microservices/external/kafka.interface';
// import { Kafka, Message } from 'kafkajs';
// import config from "../../config/env.config";

// const configVals = config()

// @Injectable()
// export class ProducerService implements OnModuleInit, OnApplicationShutdown {
//   private readonly kafka = new Kafka({
//     brokers: [configVals.kafka.brokers],
//     ssl: true,
//     sasl: {username: configVals.kafka.userName, password: configVals.kafka.password, mechanism: 'plain'}
//   });
//   private readonly producer: Producer = this.kafka.producer();

//   async onModuleInit() {
//     await this.producer.connect();
//   }

//   async produce(topic: string, value: any) {
//     let message: Message = {
//       value: JSON.stringify(value)
//     }
//     let record : ProducerRecord = {
//       topic: topic,
//       messages: [message]
//     }
    
//     await this.producer.send(record);
//   }
//   async onApplicationShutdown(signal?: string) {
//     await this.producer.disconnect();
//   }
// }
