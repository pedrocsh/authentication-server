import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { auth } from '../config/auth';

type Token = {
  id: string;
  iat: number;
  exp: number;
};

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  try {
    const { authorization } = request.headers;

    if (!authorization) {
      return response.status(400).json({
        message: 'Missing authorization token'
      });
    }

    const [, token] = authorization.split(' ');
    const { id } = verify(token, auth.secret) as Token;

    request.user = {
      id
    };

    next();
  } catch {
    return response.status(401).json({
      message: 'Invalid token'
    });
  }
}
