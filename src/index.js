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

function addTaskToProject(project, task, dueDate, priority, description) {
    myProjects[project]['tasks'].push(new myTask(task, dueDate, priority, description));    
}

function removeTask(index) {
    myTasks.splice(index, 1);
}

function removeTaskFromProject (project, index) {
    myProjects[project]['tasks'].splice(index, 1);
}

function clearTasks() {
    myTasks = []; 
};

function clearProjects() {
    myProjects = []; 
}

function changeTask(index, element, change) {
    myTasks[index][element] = change; 
}

function changeProjectTasks (project, task, element, change) {
    myProjects[project]['tasks'][task][element] = change; 
}

addTask(1, 11223333, 3, 1234); 
addTask(2, 223344, 2, 1234); 
addTask(3, 11223333, 1, 1234); 
// removeTask(1); 
changeTask(0, 'task', 'something');
// clearTasks(); 
// console.log(myTasks); 

addProject('Gerhard', 11, 22, 33, 44);
addProject('Berk', 11, 22, 33, 44);
addTaskToProject(0, 33, 11, 22, 33, 44);
// removeTaskFromProject(0, 1) 
changeProjectTasks(0, 0, 'task', 'sonethingelse')
clearProjects();
addProject('Gerhard', 11, 22, 33, 44);


console.log(myProjects); 


