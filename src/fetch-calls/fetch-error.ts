export default class FetchError extends Error {
    constructor(public readonly status: number, message: string) {
      super(message);
    }
  }
  