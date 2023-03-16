import myTask from './tasks.js'; 

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

let myProjects = []; 

export function projectFunc() {

    function listProjects() {
        return myProjects; 
    }

    function addProject(project, task, dueDate, priority, description) {
        myProjects.push(new myProject(project, [new myTask(task, dueDate, priority, description)])); 
    }

    function addTaskToProject(project, task, dueDate, priority, description) {
        myProjects[project]['tasks'].push(new myTask(task, dueDate, priority, description));    
    }

    function removeTaskFromProject (project, index) {
        myProjects[project]['tasks'].splice(index, 1);
    }

    function clearProjects() {
        myProjects = []; 
    }

    function editProjectTasks (project, task, element, change) {
        myProjects[project]['tasks'][task][element] = change; 
    }

    return {
        listProjects, 
        addProject, 
        addTaskToProject, 
        removeTaskFromProject, 
        clearProjects, 
        editProjectTasks    
    };
};