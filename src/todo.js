import myProject from './projects.js'; 
import myTask from './tasks.js'; 

let myProjects = []; 

export default function projectFunc() {

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