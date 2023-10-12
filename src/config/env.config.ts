export default () => ({
  ENV: process.env.ENV,
  port: parseInt(process.env.PORT) || 3000,
  host: process.env.HOST || "0.0.0.0",
  database: {
    uri: process.env.DATABASE_URI,
    port: parseInt(process.env.DATABASE_PORT) || 27017,
    poolSize: parseInt(process.env.POOL_SIZE) || 50,
  },
  env: process.env.ENV || "DEVELOPMENT",
  REDIS_NODE: process.env.REDIS_NODES ? [process.env.REDIS_NODES] : null,
  http: {
    timeout: parseInt(process.env.HTTP_TIMEOUT) || 5000,
    maxRedirects: parseInt(process.env.HTTP_MAX_REDIRECTS) || 5,
  },
  kafka: {
    clientId: process.env.KAFKA_CLIENT || '',
    brokers: process.env.KAFKA_BROKERS || 'pkc-l7pr2.ap-south-1.aws.confluent.cloud:9092',
    groupId: process.env.KAFKA_GROUP_ID || '',
    userName: process.env.KAFKA_USERNAME || "PBFLCPVV277XJHIW",
    password: process.env.KAFKA_PASSWORD || "dvOfmdf1cmwKJwQS0JEEEXb+6TLUzVnPddP4wFsTaFbUOk8GM5TQjFTaHnbmoWt1"
  },
  logger: {
    logs: process.env.LOGS || 'error,warn,debug,verbose,log',
  },
  kafkaGroup: { },
  kafkaTopic: { },
  PP_BACKEND_URL: process.env.PENPENCIL_BACKEND || "http://localhost:8000",
  BATCH_SERVICE_BASE_URL: process.env.BATCH_SERVICE_BASE_URL || "https://batches-dev.penpencil.co",
  TEST_SERVICE_BASE_URL: process.env.TEST_SERVICE_BASE_URL || "http://test-service",
  REDIS_URI: process.env.REDIS_URI || "redis://localhost:6379",
  EIGHT_HOURS : 28800,
  DAY_1_TTL: 86400,
  WEEK_TTL: 604800,
  DAY_2_TTL: 172800,
  FOUR_HR_TTL: 14400,
  TWO_HR_TTL: 7200,
  NEET_PG: process.env.NEET_PG || "63b5285395219c00126fa03d",
  ORGANIZATION_ID_PW: "5eb393ee95fab7468a79d189",
  log_levels: process.env.LOG_LEVELS?.split(',') || [
    'error',
    'log',
    'warn',
    'debug',
    'verbose',
  ],
});