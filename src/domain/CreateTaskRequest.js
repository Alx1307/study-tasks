class CreateTaskRequest {
    constructor(data) {
        this.title = data.title;
        this.object = data.object;
        this.description = data.description;
        this.priority = data.priority;
        this.deadline = data.deadline;
    }
}

module.exports = CreateTaskRequest;