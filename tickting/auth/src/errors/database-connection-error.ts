export class DatabaseConnectionError extends Error {
  reason = 'Error connecting to database';

  constructor() {
    super();
    // Only because we're extending built-in Error class
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }
}
