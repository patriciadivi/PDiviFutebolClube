export class CustomerError extends Error {
  public status: number;
  // private message: string;

  constructor(paramStatus: number, message: string) {
      super(message);
      this.status = paramStatus;
      // this.message = paramMessage;
  }
}

export default CustomerError;




// export class ErrorHandler extends Error {
//   public status: number;

//   constructor(status: number, message: string) {
//     super(message);
//     this.status = status;
//   }
// }
// export default ErrorHandler;