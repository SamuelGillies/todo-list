import todo from './todo.js'; 

todo().addProject('Gerhard', 'Edit Audio', '22/04/2024', 3, 'Edit audio, remove hum');
todo().addTaskToProject(0, 'Create metadata', '15/05/2023', 4, 'Create metadata as per HQ guidelines')
todo().addProject('Berk', 'Build digital studio', '25/05/2024', 4, 'Learn React, then build studio as necessary');
todo().addProject('Judd', 'Create digital studio', '21/08/2023', 2, 'knock up rough draft of alternative option');
// console.log(todo().listProjects()); 

// write to DOM 

export default function generateDOM() {
    const element = document.getElementById('list'); 
    let projects = todo().listProjects(); 
    console.log(projects);

    for (let i = 0; i < projects.length; i++) {
        let title = document.createElement("h3");
        let tasksList = projects[i].tasks;
        console.log(tasksList); 
        title.setAttribute('class', 'project--title'); 
        title.innerHTML = projects[i].project;
        element.append(title); 

        tasksList.forEach( 
            function (item) {
                let taskDetails = document.createElement("div");
                taskDetails.setAttribute('class', 'task--display'); 
                let visTask = document.createElement("p");
                visTask.setAttribute('class', 'task--taskTitle'); 
                let visDueDate = document.createElement("p");
                visDueDate.setAttribute('class', 'task--dueDateTitle'); 
                let vispriority = document.createElement("p");
                vispriority.setAttribute('class', 'task--priorityTitle'); 
                let visDescription = document.createElement("p");
                visDescription.setAttribute('class', 'task--descriptionTitle'); 

                visTask.innerHTML = `Task: ${item.task}`;
                visDueDate.innerHTML = `Due Date: ${item.dueDate}`;
                vispriority.innerHTML = `Priority: ${item.priority}`;
                visDescription.innerHTML = `Description: ${item.description}`;

                taskDetails.append(visTask,visDueDate,vispriority,visDescription);
                title.append(taskDetails); 
            }
        );

       

    };


};