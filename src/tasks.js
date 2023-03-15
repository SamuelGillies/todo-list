let myTasks = []; 

export class myTask {
    constructor(task, dueDate, priority, description) {
        this.task = task; 
        this.dueDate = dueDate; 
        this.priority = priority; 
        this.description = description; 
    }
}; 

export function addTask(task, dueDate, priority, description) {
    myTasks.push(new myTask(task, dueDate, priority, description));    
}

export function removeTask(index) {
    myTasks.splice(index, 1);
}

export function clearTasks() {
    myTasks = []; 
};

export function editTask(index, element, change) {
    myTasks[index][element] = change; 
}

export function listTasks() {
    return myTasks; 
}
