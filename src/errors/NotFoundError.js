const DomainError = require('./DomainError');

class NotFoundError extends DomainError {
    constructor(message = 'Resource not found') {
        super('NOT_FOUND', message, 404);
    }
}

module.exports = NotFoundError;