import { Request, Response, NextFunction } from 'express';
import { CustomerError } from './customerError';

class GlobalError {
  constructor(private defaultStatus = 500) {
    this.defaultStatus = defaultStatus;
  }

  handle(error: CustomerError, _req: Request, res: Response, _next: NextFunction) {
    if (error instanceof CustomerError) {
      return res.status(error.status).json({ message: error.message });
    }
    return res.status(this.defaultStatus).json({ message: `>>>> ${error}` });
  }
}

export default new GlobalError();
