export enum ErrorCode {
  NoAuth = 401,
}

export class ErrorWithCode extends Error {
  errorCode: ErrorCode;
  constructor(message: any, errorCode: ErrorCode) {
    super(message);
    this.errorCode = errorCode;
  }
}
