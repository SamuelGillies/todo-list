let myTasks = []; 
let myProjects = []; 
let testProjects = [[['Gerhard'], [{task: '11', dueDate: '22'}, {task: '11', dueDate: '22'}]], [['Berk'], [{task: '11', dueDate: '22'}, {task: '11', dueDate: '22'}, {task: '11', dueDate: '22'}]]]; //format for myprojects array
// console.log(testProjects);

class myTask {
    constructor(task, dueDate, priority, description) {
        this.task = task; 
        this.dueDate = dueDate; 
        this.priority = priority; 
        this.description = description; 
    }
}; 

class myProject {
    constructor(project, tasks) {
        this.project = project; 
        this.tasks = tasks; 
    }
};

function addTask(task, dueDate, priority, description) {
    myTasks.push(new myTask(task, dueDate, priority, description));    
}

function addProject(project, task, dueDate, priority, description) {
    myProjects.push(new myProject(project, [new myTask(task, dueDate, priority, description)])); 
}

function addTaskToProject(index, task, dueDate, priority, description) {
    myProjects[index].push(new myTask(task, dueDate, priority, description));    
}

function removeTask(index) {
    myTasks.splice(index, 1);
}

function clearTasks() {
    myTasks = []; 
};

function changeTask(index, element, change) {
    myTasks[index][element] = change; 
}

addTask(1, 11223333, 3, 1234); 
addTask(2, 223344, 2, 1234); 
addTask(3, 11223333, 1, 1234); 
// removeTask(1); 
changeTask(0, 'task', 'something');
// clearTasks(); 
// console.log(myTasks); 

addProject(1, 11, 22, 33, 44);
addProject(2, 11, 22, 33, 44);
console.log(myProjects); 
