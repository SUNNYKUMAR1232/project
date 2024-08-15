/***
 ** File: server\9-helper\src\gateway-middleware.ts
 ** Description: Middleware to verify the request comming from the Api Gateway
 ** Date: 2024-08-16 01:40:09
 ** Version: 1.0.0
 ** Author: Sunny Kumar
 ***/

import Jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { NotAuthorizedError } from './error-handler';
const tokens: string[] = [
    'auth',
    'gig',
    'order',
    'review',
    'search',
    'seller',
    'chat',
    'buyer',
];
export const verifyGatewayRequest = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (!req.headers?.gatewayToken) {
        throw new NotAuthorizedError(
            'Invalid Request ',
            'verifyGatewayRequest() method: Request not comming from Api Gateway'
        );
    }
    const token = req.headers?.gatewayToken as string;

    if (!token) {
        throw new NotAuthorizedError(
            'Invalid Request ',
            'verifyGatewayRequest() method: Request not comming from Api Gateway'
        );
    }
    try {
        const payload: { id: string; iat: number } = Jwt.verify(
            token,
            process.env.JWT_SECRET!
        ) as { id: string; iat: number };
        if (!payload) {
            throw new NotAuthorizedError(
                'Invalid Request ',
                'verifyGatewayRequest() method: Request not comming from Api Gateway'
            );
        }
        if (!tokens.includes(payload.id)) {
            throw new NotAuthorizedError(
                'Invalid Request ',
                'verifyGatewayRequest() method: Request payload not valid'
            );
        }
    } catch (error) {
        throw new NotAuthorizedError(
            'Invalid Request ',
            'verifyGatewayRequest() method: Request not comming from Api Gateway'
        );
    }
};
