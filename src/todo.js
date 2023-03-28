import myProject from './projects.js'; 
import myTask from './tasks.js'; 

let todoList = []; 

export default function todo() {

    function listProjects() {
        return todoList; 
    }

    function addProject(project) {
        todoList.push(new myProject(project, [])); 
    }

    // function addProject(project, task, dueDate, priority, description) {
    //     todoList.push(new myProject(project, [new myTask(task, dueDate, priority, description)])); 
    // }

    function deleteProject(project) {
        todoList.splice(project, 1);
    }

    function addTaskToProject(project, task, dueDate, priority, description) {
        todoList[project]['tasks'].push(new myTask(task, dueDate, priority, description));    
    }

    function removeTaskFromProject (project, index) {
        todoList[project]['tasks'].splice(index, 1);
    }

    function clearProjects() {
        todoList = []; 
    }

    function editProjectTasks (project, task, element, change) {
        todoList[project]['tasks'][task][element] = change; 
    }

    function changeTaskStatus(project, task) {
        todoList[project]['tasks'][task].status = !todoList[project]['tasks'][task].status; 
    }

    return {
        listProjects, 
        addProject, 
        deleteProject,
        addTaskToProject, 
        removeTaskFromProject, 
        clearProjects, 
        editProjectTasks,
        changeTaskStatus   
    };
};