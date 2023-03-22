import todo from './todo.js'; 

todo().addProject('Gerhard', 'Edit Audio', '22/04/2024', 3, 'Edit audio, remove hum');
todo().addTaskToProject(0, 'Create metadata', '15/05/2023', 4, 'Create metadata as per HQ guidelines')
todo().addTaskToProject(0, 'Create metadata', '15/05/2023', 4, 'Create metadata as per HQ guidelines')
todo().addTaskToProject(0, 'Create metadata', '15/05/2023', 4, 'Create metadata as per HQ guidelines')
todo().addTaskToProject(0, 'Create metadata', '15/05/2023', 4, 'Create metadata as per HQ guidelines')
todo().addTaskToProject(0, 'Create metadata', '15/05/2023', 4, 'Create metadata as per HQ guidelines')
todo().addProject('Berk', 'Build digital studio', '25/05/2024', 4, 'Learn React, then build studio as necessary');
todo().addProject('Judd', 'Create digital studio', '21/08/2023', 2, 'knock up rough draft of alternative option');
// console.log(todo().listProjects()); 

// write to DOM 

function writeProjectList() {
    const element = document.getElementById('list'); 
    const sidebar = document.getElementById('sidebar--projectsExtra'); 
    let projects = todo().listProjects(); 

    for (let i = 0; i < projects.length; i++) {
        let title = document.createElement("h3");
        title.setAttribute('class', 'project--title'); 
        title.innerHTML = projects[i].project;
        element.append(title); 

        let titleSidebar = document.createElement('button'); 
        let iconSidebar = document.createElement('img');
        let labelSidebar = document.createElement('p'); 
        titleSidebar.setAttribute('class', 'sidebar--title, button'); 
        iconSidebar.setAttribute('class', 'icon'); 
        iconSidebar.setAttribute('src', '../src/icons/checklist.svg'); 
        labelSidebar.setAttribute('class', 'label'); 
        labelSidebar.innerHTML = projects[i].project;
        titleSidebar.append(iconSidebar,labelSidebar); 
        sidebar.append(titleSidebar); 

        let tasksList = projects[i].tasks;

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

                let visStrikethrough = document.createElement("button");
                visStrikethrough.setAttribute('class', 'task--strikethrough'); 
                let strikethroughIcon = document.createElement("img"); 
                strikethroughIcon.setAttribute('class', 'task--strikeIcon');
                strikethroughIcon.setAttribute('src', '../src/icons/strikethrough.svg');
                visStrikethrough.appendChild(strikethroughIcon); 

                let visdelete = document.createElement("button");
                visdelete.setAttribute('class', 'task--delete'); 
                let deleteIcon = document.createElement("img"); 
                deleteIcon.setAttribute('class', 'task--deleteIcon');
                deleteIcon.setAttribute('src', '../src/icons/delete.svg');
                visdelete.appendChild(deleteIcon); 

                visTask.innerHTML = `${item.task}`;
                visDueDate.innerHTML = `${item.dueDate}`;
                vispriority.innerHTML = `${item.priority}`;
                visDescription.innerHTML = `${item.description}`;

                taskDetails.append(visTask,visDueDate,vispriority,visDescription,visStrikethrough,visdelete);
                title.append(taskDetails); 
            });
    };
}

export default function generateDOM() {
    writeProjectList();
};