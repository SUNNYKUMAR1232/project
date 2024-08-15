/***
 ** File: server\9-helper\src\logger.ts
 ** Description: Logger configuration to log the data in console and elasticsearch
 ** Date: 2024-08-16 01:37:05
 ** Version: 1.0.0
 ** Author: Sunny Kumar
 ***/
import winston, {Logger } from 'winston';
import {
    TransformedData,
    ElasticsearchTransformer,
    ElasticsearchTransport,
    LogData,
} from 'winston-elasticsearch';
const esTrasformer = (logData: LogData): TransformedData => {
    return ElasticsearchTransformer(logData);
};
export const winstonLogger = (
    elasticsearchNode: string,
    name: string,
    level: string
): Logger => {
    const options = {
        console: {
            level: level,
            handleExceptions: true,
            json: true,
            colorize: true,
            color: true,
        },
        elasticsearch: {
            level: level,
            clientOpts: {
                node: elasticsearchNode,
                maxRetries: 2,
                requestTimeout: 10000,
                sniffOnStart: true,
            },
            transformer: esTrasformer,
        },
    };
    const esTransport: ElasticsearchTransport = new ElasticsearchTransport(
        options.elasticsearch
    );
    const logger = winston.createLogger({
        defaultMeta: { service: name },
        transports: [
            new winston.transports.Console(options.console),
            esTransport,
        ],
        exitOnError: false,
    });
    return logger;
};
