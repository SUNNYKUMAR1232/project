/***
 ** File: server\9-helper\src\error-handler.ts
 ** Description: Custom Error handler to handle the error in the application
 ** Date: 2024-08-16 01:39:32
 ** Version: 1.0.0
 ** Author: Sunny Kumar
 ***/

import { StatusCodes } from 'http-status-codes';
// interface use to define the structure of the error response
export interface IErrorResponse {
    message: string;
    statusCode: number;
    status: string;
    commingFrom: string;
    serializeError(): IError;
}
export interface IError {
    message: string;
    statusCode: number;
    status: string;
    commingFrom: string;
}
// abstract class use to define the structure of the customError class
// it is not meant to be used directly
export abstract class customError extends Error {
    abstract statusCode: number;
    abstract status: string;
    commingFrom: string;

    constructor(message: string, commingFrom: string) {
        super(message);
        this.commingFrom = commingFrom;
    }
    serializeError(): IError {
        return {
            message: this.message,
            statusCode: this.statusCode,
            status: this.status,
            commingFrom: this.commingFrom,
        };
    }
}
// BadRequestError
export class BadRequestError extends customError {
    statusCode = StatusCodes.BAD_REQUEST;
    status = 'error';
    constructor(message: string, commingFrom: string) {
        super(message, commingFrom);
    }
}
// NotFoundError
export class NotFoundError extends customError {
    statusCode = StatusCodes.NOT_FOUND;
    status = 'error';
    constructor(message: string, commingFrom: string) {
        super(message, commingFrom);
    }
}
//NotAuthorizedError
export class NotAuthorizedError extends customError {
    statusCode = StatusCodes.UNAUTHORIZED;
    status = 'error';
    constructor(message: string, commingFrom: string) {
        super(message, commingFrom);
    }
}
//FileTooLargeError
export class FileTooLargeError extends customError {
    statusCode = StatusCodes.REQUEST_TOO_LONG;
    status = 'error';
    constructor(message: string, commingFrom: string) {
        super(message, commingFrom);
    }
}
// ServerError
export class ServerError extends customError {
    statusCode = StatusCodes.SERVICE_UNAVAILABLE;
    status = 'error';
    constructor(message: string, commingFrom: string) {
        super(message, commingFrom);
    }
}
export interface ErrnoException extends Error {
    errno?: number;
    code?: string;
    path?: string;
    syscall?: string;
    stack?: string;
}
