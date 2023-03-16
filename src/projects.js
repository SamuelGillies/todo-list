import * as tasks from './tasks.js'; 

let myProjects = []; 

export class myProject {
    constructor(project, tasks) {
        this.project = project; 
        this.tasks = tasks; 
    }

    setProject(project) {
        this.project = project; 
    }

    getProject() {
        return this.project;
    }

    setTasks(tasks) {
        this.tasks = tasks; 
    }

    getTasks() {
        return this.tasks;
    }
};

export function addProject(project, task, dueDate, priority, description) {
    myProjects.push(new myProject(project, [new tasks.myTask(task, dueDate, priority, description)])); 
}

export function addTaskToProject(project, task, dueDate, priority, description) {
    myProjects[project]['tasks'].push(new tasks.myTask(task, dueDate, priority, description));    
}

export function removeTaskFromProject (project, index) {
    myProjects[project]['tasks'].splice(index, 1);
}

export function clearProjects() {
    myProjects = []; 
}

export function editProjectTasks (project, task, element, change) {
    myProjects[project]['tasks'][task][element] = change; 
}

export function listProjects() {
    return myProjects; 
}