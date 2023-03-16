// import tasks './tasks.js'; 
import projectFunc from './todo.js'; 
import header from './header.js'; 

document.body.appendChild(header()); 


// Testing

projectFunc().addProject('Gerhard', 'Edit Audio', '22/04/2024', 3, 'Edit audio, remove hum');
console.log(projectFunc().listProjects()); 

// tasks.addTask(1, 11223333, 3, 1234); 
// console.log(tasks.listTasks()); 
// tasks.addTask(1, 11223333, 3, 1234); 
// tasks.addTask(2, 223344, 2, 1234); 
// tasks.addTask(3, 11223333, 1, 1234); 
// tasks.removeTask(1); 
// tasks.editTask(0, 'task', 'something');
// tasks.clearTasks(); 
// console.log(tasks.listTasks()); 

// projects.test().tester(); 



// projects.addProject('Berk', 'Build digital studio', '25/05/2024', 4, 'Learn React, then build studio as necessary');
// projects.addProject('Judd', 'Create digital studio', '21/08/2023', 2, 'knock up rough draft of alternative option');
// projects.addTaskToProject(0, 'Construct archive', '15/05/2024', 2, 'Learn html and css and some backend');
// projects.removeTaskFromProject(0, 1) 
// projects.editProjectTasks(0, 0, 'task', 'somethingelse')
// projects.clearProjects();

