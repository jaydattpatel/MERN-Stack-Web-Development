export class ApplicationError extends Error {
  constructor(message, code) {
    super(message);
    this.code = code;
  }
}
