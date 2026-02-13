const DomainError = require('./DomainError');

class ValidationError extends DomainError {
    constructor(message) {
        super('VALIDATION_ERROR', message, 400);
    }
}

module.exports = ValidationError;