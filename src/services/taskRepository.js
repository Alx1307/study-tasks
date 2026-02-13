const Task = require('../domain/Task');
const NotFoundError = require('../errors/NotFoundError');
const { v4: uuidv4 } = require('uuid');

class TaskRepository {
    constructor() {
        this.tasks = new Map();
    }

    findAll() {
        return Array.from(this.tasks.values());
    }

    findById(id) {
        const task = this.tasks.get(id);

        if (!task) {
            throw new NotFoundError(`Задача с id ${id} не найдена`);
        }

        return task;
    }

    create(taskData) {
        const id = uuidv4();

        const task = new Task({
            id: id,
            title: taskData.title,
            object: taskData.object,
            description: taskData.description,
            priority: taskData.priority,
            deadline: taskData.deadline
        });

        this.tasks.set(id, task);
        return task;
    }
}

const taskRepository = new TaskRepository();

module.exports = taskRepository;