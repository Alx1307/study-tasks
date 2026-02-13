const requestLoggerMiddleware = (req, res, next) => {
    const start = Date.now();

    res.on('finish', () => {
        if (res.statusCode < 400) {
            const duration = Date.now() - start;

            console.log({
                requestStatus: 'success',
                requestId: req.requestId,
                method: req.method,
                url: req.url,
                status: res.statusCode,
                duration: `${duration}ms`,
                timestamp: new Date().toISOString()
            });
        }
    });

    next();
};

module.exports = requestLoggerMiddleware;