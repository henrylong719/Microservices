import { CustomError } from './custom-error';

export class NotFoundError extends CustomError {
  statusCode: number = 404;

  constructor() {
    super('Route Not found');
    // Only because we're extending built-in Error class
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors(): { message: string }[] {
    return [{ message: 'Not found' }];
  }
}
