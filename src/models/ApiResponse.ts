
export class ApiResponse {
    public data: any;
    public errorMessage: string;
    public httpCode: number;
    public success: boolean;
    
    constructor(data: any, message: string, status: number, success: boolean) {
        this.data = data;
        this.errorMessage = message;
        this.httpCode = status;
        this.success = success;
    }
}