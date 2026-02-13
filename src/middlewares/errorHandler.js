const ErrorResponse = require('../domain/ErrorResponse');

const errorHandlerMiddleware = (err, req, res, next) => {
    const status = err.statusCode || 500;
    const code = err.code || 'INTERNAL_ERROR';
    const message = err.message || 'Internal server error';
        
    console.log({
        requestStatus: 'error',
        requestId: req.requestId,
        method: req.method,
        url: req.url,
        status: err.statusCode || 500,
        duration: '0ms',
        errorCode: err.code || 'INTERNAL_ERROR',
        message: err.message,
        timestamp: new Date().toISOString()
    });

    const errorResponse = new ErrorResponse(code, message, req.requestId);
    res.status(status).json(errorResponse);
};

module.exports = errorHandlerMiddleware;