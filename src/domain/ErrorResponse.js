class ErrorResponse {
    constructor(code, message, requestId) {
        this.error = {
            code: code,
            message: message,
            requestId: requestId
        };
    }
}

module.exports = ErrorResponse;