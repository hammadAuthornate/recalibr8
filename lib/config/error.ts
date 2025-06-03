export class BackendError extends Error {
  statusCode?: number;
  details?: string;
  cause?: string;

  constructor(
    message: string,
    options?: { statusCode?: number; details?: string; cause?: string }
  ) {
    super(message);
    this.name = "BackendError";
    Object.setPrototypeOf(this, BackendError.prototype);

    if (options) {
      if (options.statusCode) {
        this.statusCode = options.statusCode;
      }
      if (options.details) {
        this.details = options.details;
      }
      if (options.cause) {
        this.cause = options.cause;
      }
    }
  }
}
