
export class ApiResponse<T> {
    status: number;
    message: string;
    data?: T;
    error?: string;
  
    constructor(status: number, message: string, data?: T, error?: string) {
      this.status = status;
      this.message = message;
      this.data = data;
      this.error = error;
    }
  
    static success<U>(data: U, message = "Success"): ApiResponse<U> {
      return new ApiResponse<U>(200, message, data);
    }
  
    static error(message: string, status = 400, error?: string): ApiResponse<null> {
      return new ApiResponse<null>(status, message, null, error);
    }
  }
  