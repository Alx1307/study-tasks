class Task{
    constructor({ id, title, object, description, deadline }) {
        //добавить проверку на ошибки
        
        this.id = id;
        this.title = title;
        this.object = object;
        this.description = description;
        this.deadline = deadline;
    }
}

module.exports = Task;