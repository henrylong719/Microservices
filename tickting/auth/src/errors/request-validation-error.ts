import { ValidationError } from 'express-validator';

export class RequestValidationError extends Error {
  constructor(public errors: ValidationError[]) {
    super('Invalid request parameters');
    // Only because we're extending built-in Error class
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }
}
