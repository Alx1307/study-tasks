class Task{
    constructor({ id, title, object, description, priority, deadline }) {
        this.id = id;
        this.title = title;
        this.object = object;
        this.description = description || '';
        this.priority = priority || 3;
        this.deadline = deadline;
        this.createdAt = new Date();
    }
}

module.exports = Task;