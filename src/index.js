import * as tasks from './tasks.js'; 
import * as projects from './projects.js'; 

// Testing

tasks.addTask(1, 11223333, 3, 1234); 
tasks.addTask(2, 223344, 2, 1234); 
tasks.addTask(3, 11223333, 1, 1234); 
tasks.removeTask(1); 
tasks.editTask(0, 'task', 'something');
tasks.clearTasks(); 

projects.addProject('Gerhard', 11, 22, 33, 44);
projects.addProject('Berk', 11, 22, 33, 44);
projects.addTaskToProject(0, 33, 11, 22, 33, 44);
projects.removeTaskFromProject(0, 1) 
projects.editProjectTasks(0, 0, 'task', 'sonethingelse')
projects.clearProjects();
projects.addProject('Gerhard', 11, 22, 33, 44);

console.log(tasks.listTasks()); 
console.log(projects.listProjects()); 


