const express = require('express');
const router = express.Router();
const taskRepository = require('../services/taskRepository');
const ValidationError = require('../errors/ValidationError');
const CreateTaskRequest = require('../domain/CreateTaskRequest');

router.get('/', (req, res) => {
    const tasks = taskRepository.findAll();
    res.json(tasks);
});

router.get('/:id', (req, res) => {
    const task = taskRepository.findById(req.params.id);
    res.json(task);
});

router.post('/', (req, res) => {
    const request = new CreateTaskRequest(req.body);

    if (!request.title || request.title.trim().length === 0) {
        throw new ValidationError('Название обязательно!');
    }

    if (!request.object || request.object.trim().length === 0) {
        throw new ValidationError('Название предмета обязательно!');
    }

    if (request.priority !== undefined && request.priority !== null) {
        if (!Number.isInteger(request.priority)) {
            throw new ValidationError('Приоритет должен быть целым числом!');
        }

        if (![1, 2, 3].includes(request.priority)) {
            throw new ValidationError('Приоритет может быть только 1, 2 или 3!');
        }
    }

    const task = taskRepository.create(request);
    res.status(201).json(task);
});

module.exports = router;