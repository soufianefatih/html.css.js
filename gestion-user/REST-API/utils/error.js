export const errorHandler = (statusCode, message) => {
    const error = new Error();
    error.statusCode = statusCode;
    error.message = message;
    return error;
  };


//   class AppError extends Error {
//     constructor(statusCode, status, message) {
//         super(message);
//         this.statusCode = statusCode;
//         this.status = status;
//         this.message = message;
//     }
// }


class AppError extends Error {
  constructor() {
      super();
     
  }
  create(message,statusCode,status){
    this.statusCode = statusCode;
      this.status = status;
      this.message = message;
  }
}

module.exports = new AppError();