
// import { ConsumerConfig, ConsumerRunConfig, ConsumerSubscribeTopic, EachBatchPayload, EachMessagePayload, KafkaMessage } from "kafkajs";
// import { ConsumerService } from "../kafka/consumer.service";
// import { PpLogger, PpLoggerService } from "src/boostrap/logger.service";

// export class Utility {
// 	constructor(
// 		private readonly logger: PpLoggerService
// 	  ) {
// 		this.logger.setContext(Utility.name)
// 	  }

// 	isEqual(val1, val2) {
// 		return val1 === val2 || val1?.toString() === val2?.toString();
// 	}

// 	getDayEndTimestamp(): number {
// 		//UNIX timestamp of the end of the current day
// 		const dateEndOfDay = new Date().setHours(23, 59, 59, 999);
// 		return Math.floor(dateEndOfDay / 1000);
// 	}

// 	createChunks(array, exp = 1) {
// 		let size = 20 * exp;
// 		let lists = [];
// 		let batchNo = 1;

// 		while (true) {
// 			let chunk = array.slice((batchNo - 1) * size, batchNo * size)
// 			if (!chunk.length) break;
// 			lists.push(chunk);
// 			batchNo++;
// 		}
// 		return lists;
// 	}

// 	startConsumer(
// 		isBatchProcessing: boolean,
// 		consumerService: ConsumerService,
// 		topicConfig: ConsumerSubscribeTopic,
// 		grpId: string,
// 		consumerFunction: Function,
// 		exponentialValue: number = 2,
// 		isNaNSafe: boolean = false,
// 		consumerConfig?: ConsumerConfig
// 	) {
// 		let runConfig: ConsumerRunConfig = {
// 			eachMessage: async (event: EachMessagePayload) =>
// 				await this.singleMessageConsumer(
// 					topicConfig.topic.toString(), event,
// 					consumerFunction, 
// 					isNaNSafe
// 				)
// 		}

// 		if (isBatchProcessing) {
// 			runConfig = {
// 				eachBatchAutoResolve: true,
// 				eachBatch: async (event) =>
// 					await this.batchConsumerHandler(
// 						topicConfig.topic.toString(),
// 						event,
// 						consumerFunction,
// 						exponentialValue,
// 						isNaNSafe
// 					)
// 			}
// 		}

// 		consumerService.consume(
// 			topicConfig, grpId,
// 			runConfig, consumerConfig
// 		)
// 	}

// 	async batchConsumerHandler(
// 		type: string,
// 		batchPayload: EachBatchPayload,
// 		handler: Function,
// 		exponentialValue: number = 1,
// 		isNaNSafe: boolean = false
// 	) {
// 		let {
// 			batch,
// 			resolveOffset,
// 			heartbeat,
// 			commitOffsetsIfNecessary,
// 			uncommittedOffsets,
// 			isRunning,
// 			isStale
// 		} = batchPayload;
// 		try {
// 			let subBatch = this.createChunks(batch.messages, exponentialValue);
// 			this.logger.log({
// 				type: type,
// 				msg: "kafka batch processing ",
// 				batchSize: batch.messages.length,
// 				chunksLength: subBatch.length
// 			});

// 			for (let messages of subBatch) {
// 				let processedMsg: any = messages.map(async function (event: KafkaMessage) {
// 					let payload = event.value.toString()
// 					if (payload.includes("NaN") && isNaNSafe) {
// 						payload = payload.replace(new RegExp("NaN", "g"), "null");
// 					}

// 					await handler(JSON.parse(payload))
// 					return event.offset
// 				});
// 				processedMsg = await Promise.all(processedMsg) as string[] | void[];
// 				processedMsg.map(resolveOffset);
// 				await heartbeat()
// 			}
// 		}
// 		catch (error) {
// 			this.logger.log({ stack: JSON.stringify(error.stack), status: 500, type: type });
// 		}
// 	}

// 	singleMessageConsumer(type: string, event: EachMessagePayload, handler: Function, isNaNSafe: boolean = false) {
// 		try {
// 			const { message } = event;
// 			let payload = message.value.toString() as any;
// 			if (!payload) return;
			
//             if (payload.includes("NaN") && isNaNSafe) {
//                 payload = payload.replace(new RegExp("NaN", "g"), "null");
//             }

// 			payload = JSON.parse(payload);
// 			handler(payload)
// 		}
// 		catch (error) {
// 			this.logger.log({ stack: JSON.stringify(error.stack), status: 500, type: type });
// 		}
// 	}

// }
