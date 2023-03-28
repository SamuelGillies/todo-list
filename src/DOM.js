import myProject from './projects.js';
import todo from './todo.js'; 

todo().addProject('Gerhard', 'Edit Audio', '22/04/2024', 3, 'Edit audio, remove hum');
todo().addTaskToProject(0, 'Create metadata', '15/05/2023', 4, 'Create metadata as per HQ guidelines')
todo().addTaskToProject(0, 'Create metadata', '15/05/2023', 4, 'Create metadata as per HQ guidelines')
todo().addTaskToProject(0, 'Create metadata', '15/05/2023', 4, 'Create metadata as per HQ guidelines')
todo().addTaskToProject(0, 'Create metadata', '15/05/2023', 4, 'Create metadata as per HQ guidelines')
todo().addTaskToProject(0, 'Create metadata', '15/05/2023', 4, 'Create metadata as per HQ guidelines')
todo().addProject('Berk');
todo().addTaskToProject(1, 'Build digital studio', '25/05/2024', 4, 'Learn React, then build studio as necessary')
todo().addProject('Judd');
todo().addTaskToProject(2, 'Create digital studio', '21/08/2023', 2, 'knock up rough draft of alternative option')
// todo().deleteProject(1); 
console.log(todo().listProjects()); 


function header() {
    const element = document.getElementById('container'); 
    const header = document.createElement('header'); 
    header.setAttribute('id', 'header'); 
    element.appendChild(header); 

    const title = document.createElement('h1'); 
    title.setAttribute('id', 'header--title'); 
    title.innerHTML = 'ToDo List'; 
    const icon = document.createElement('img'); 
    icon.setAttribute('id', 'header--icon');
    icon.setAttribute('src', '../src/icons/list.svg'); 

    header.append(icon, title);

    return element; 
}

function footer() {
    const element = document.getElementById('container'); 
    const footer = document.createElement('footer'); 
    footer.setAttribute('id', 'footer'); 
    element.appendChild(footer); 

    return element; 
}

function fixedContent() {

    const element = document.getElementById('container'); 

    const content = document.createElement('div'); 
    content.setAttribute('id', 'content'); 
    element.appendChild(content); 

    const nav = document.createElement('div'); 
    nav.setAttribute('id', 'sidebar'); 
    content.appendChild(nav); 

    const projectsBase = document.createElement('div'); 
    projectsBase.setAttribute('id', 'sidebar--projectsBase'); 
    nav.appendChild(projectsBase); 

    const list = document.createElement('div'); 
    list.setAttribute('id', 'list'); 
    content.appendChild(list); 

    const inbox = document.createElement('button'); 
    const inboxIcon = document.createElement('img'); 
    const inboxLabel = document.createElement('p'); 
    inbox.setAttribute('id', 'sidebar--inbox'); 
    inbox.setAttribute('class', 'button'); 
    inboxIcon.setAttribute('id', 'sidebar--inboxIcon'); 
    inboxIcon.setAttribute('class', 'icon'); 
    inboxIcon.setAttribute('src', '../src/icons/inbox.svg'); 
    inboxLabel.setAttribute('id', 'sidebar--inboxLabel'); 
    inboxLabel.setAttribute('class', 'label'); 
    projectsBase.appendChild(inbox); 
    inbox.append(inboxIcon,inboxLabel); 
    inboxLabel.innerHTML = 'All Tasks'; 


    const today = document.createElement('button'); 
    const todayIcon = document.createElement('img'); 
    const todayLabel = document.createElement('p'); 
    today.setAttribute('id', 'sidebar--today'); 
    today.setAttribute('class', 'button'); 
    todayIcon.setAttribute('id', 'sidebar--todayIcon'); 
    todayIcon.setAttribute('class', 'icon'); 
    todayIcon.setAttribute('src', '../src/icons/today.svg'); 
    todayLabel.setAttribute('id', 'sidebar--todayLabel'); 
    todayLabel.setAttribute('class', 'label'); 
    projectsBase.appendChild(today); 
    today.append(todayIcon,todayLabel); 
    todayLabel.innerHTML = 'Today'; 

    const thisWeek = document.createElement('button'); 
    const thisWeekIcon = document.createElement('img'); 
    const thisWeekLabel = document.createElement('p'); 
    thisWeek.setAttribute('id', 'sidebar--thisWeek'); 
    thisWeek.setAttribute('class', 'button'); 
    thisWeekIcon.setAttribute('id', 'sidebar--thisWeekIcon'); 
    thisWeekIcon.setAttribute('class', 'icon'); 
    thisWeekIcon.setAttribute('src', '../src/icons/calendar.svg'); 
    thisWeekLabel.setAttribute('id', 'sidebar--thisWeekLabel'); 
    thisWeekLabel.setAttribute('class', 'label'); 
    projectsBase.appendChild(thisWeek); 
    thisWeek.append(thisWeekIcon,thisWeekLabel); 
    thisWeekLabel.innerHTML = 'This Week'; 

    const projectsTitle = document.createElement('h2'); 
    projectsTitle.setAttribute('id', 'sidebar--projectsTitle'); 
    projectsTitle.setAttribute('class', 'title'); 
    nav.appendChild(projectsTitle); 
    projectsTitle.innerHTML = 'Projects'; 

    const projectsExtra = document.createElement('div'); 
    projectsExtra.setAttribute('id', 'sidebar--projectsExtra'); 
    nav.appendChild(projectsExtra);

    const addProject = document.createElement('button'); 
    const addProjectIcon = document.createElement('img'); 
    const addProjectLabel = document.createElement('p'); 
    addProject.setAttribute('id', 'sidebar--addProject'); 
    addProject.setAttribute('class', 'button'); 
    addProjectIcon.setAttribute('id', 'sidebar--addProjectIcon'); 
    addProjectIcon.setAttribute('class', 'icon'); 
    addProjectIcon.setAttribute('src', '../src/icons/add.svg'); 
    addProjectLabel.setAttribute('id', 'sidebar--addProjectLabel'); 
    addProjectLabel.setAttribute('class', 'label'); 
    projectsTitle.insertAdjacentElement("afterend", addProject); 
    addProject.append(addProjectIcon,addProjectLabel); 
    addProjectLabel.innerHTML = 'Add'; 

    return element; 
}

function clearSidebar() {
    const projectsExtra = document.getElementById('sidebar--projectsExtra'); 
    projectsExtra.innerHTML = ''; 
}

function writeProjectSidebar() {

    const sidebar = document.getElementById('sidebar--projectsExtra'); 
    let projects = todo().listProjects(); 

    for (let i = 0; i < projects.length; i++) {
        let projectBtnContainer = document.createElement('div');
        let titleSidebar = document.createElement('button'); 
        let iconSidebar = document.createElement('img');
        let deleteProjectSidebar = document.createElement('button');
        let deleteProjectIcon = document.createElement('img');
        let labelSidebar = document.createElement('p'); 

        projectBtnContainer.setAttribute('class', 'sidebar--projectContainer');
        titleSidebar.setAttribute('class', 'sidebar--title, button'); 
        titleSidebar.setAttribute('id', `project--title${i}`); 
        iconSidebar.setAttribute('class', 'icon'); 
        iconSidebar.setAttribute('id', `project--title${i}`); 
        iconSidebar.setAttribute('src', '../src/icons/checklist.svg'); 
        deleteProjectSidebar.setAttribute('class', 'icon, deleteProject'); 
        deleteProjectSidebar.setAttribute('id', `deleteProject${i}`)
        deleteProjectIcon.setAttribute('class', 'icon, deleteProjectIcon'); 
        deleteProjectIcon.setAttribute('id', `deleteProject${i}`);
        deleteProjectIcon.setAttribute('src', '../src/icons/delete.svg');
        labelSidebar.setAttribute('class', 'label'); 
        labelSidebar.setAttribute('id', `project--title${i}`); 
        labelSidebar.innerHTML = projects[i].project;

        deleteProjectSidebar.append(deleteProjectIcon); 
        projectBtnContainer.append(titleSidebar,deleteProjectSidebar);
        titleSidebar.append(iconSidebar,labelSidebar); 

        sidebar.append(projectBtnContainer); 
    };

};

function clearTaskList() {
    const element = document.getElementById('list'); 
    element.innerHTML = ''; 
}

function writeAllTasks() {
    const element = document.getElementById('list'); 
    let projects = todo().listProjects(); 

    for (let i = 0; i < projects.length; i++) {

        let title = document.createElement("h3");
        let addTaskBtn = document.createElement("button");
        title.setAttribute('class', 'project--title'); 
        addTaskBtn.setAttribute('class', 'list--button');
        addTaskBtn.setAttribute('id', `addTaskBtn${i}`);
        addTaskBtn.innerHTML = '+ Add';
        title.innerHTML = projects[i].project;
        title.append(addTaskBtn);
        element.append(title); 

        let tasksList = projects[i].tasks;

        tasksList.forEach( 
            function (item, index) {
                let taskDetails = document.createElement("div");
                taskDetails.setAttribute('class', 'task--display'); 
                taskDetails.setAttribute('id', `task--display${i}-${index}`); 
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
                visStrikethrough.setAttribute('id', `task--strikethrough${i}-${index}`); 
                let strikethroughIcon = document.createElement("img"); 
                strikethroughIcon.setAttribute('class', 'task--strikeIcon');
                strikethroughIcon.setAttribute('src', '../src/icons/strikethrough.svg');
                strikethroughIcon.setAttribute('id', `task--strikethroughIcon${i}-${index}`); 
                visStrikethrough.appendChild(strikethroughIcon); 

                let visdelete = document.createElement("button");
                visdelete.setAttribute('class', 'task--delete'); 
                visdelete.setAttribute('id', `task--delete${i}-${index}`); 
                let deleteIcon = document.createElement("img"); 
                deleteIcon.setAttribute('class', 'task--deleteIcon');
                deleteIcon.setAttribute('src', '../src/icons/delete.svg');
                deleteIcon.setAttribute('id', `task--deleteIcon${i}-${index}`); 
                visdelete.appendChild(deleteIcon); 

                visTask.innerHTML = `${item.task}`;
                visDueDate.innerHTML = `${item.dueDate}`;
                vispriority.innerHTML = `${item.priority}`;
                visDescription.innerHTML = `${item.description}`;

                taskDetails.append(visTask,visDueDate,vispriority,visDescription,visStrikethrough,visdelete);
                title.append(taskDetails); 
            });
    };
};

function writeProjectTasks(i) {
    const element = document.getElementById('list'); 
    let projects = todo().listProjects(); 

    let title = document.createElement("h3");
    let addTaskBtn = document.createElement("button");
    title.setAttribute('class', 'project--title'); 
    addTaskBtn.setAttribute('class', 'list--button');
    addTaskBtn.setAttribute('id', `addTaskBtn${i}`);
    addTaskBtn.innerHTML = '+ Add';
    title.innerHTML = projects[i].project;
    
    title.append(addTaskBtn);

    element.append(title); 

    let tasksList = projects[i].tasks;

    tasksList.forEach( 
        function (item, index) {
            let taskDetails = document.createElement("div");
            taskDetails.setAttribute('class', 'task--display'); 
            taskDetails.setAttribute('id', `task--display${i}-${index}`); 
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
            visStrikethrough.setAttribute('id', `task--strikethrough${i}-${index}`); 
            let strikethroughIcon = document.createElement("img"); 
            strikethroughIcon.setAttribute('class', 'task--strikeIcon');
            strikethroughIcon.setAttribute('id', `task--strikethroughIcon${i}-${index}`); 
            strikethroughIcon.setAttribute('src', '../src/icons/strikethrough.svg');
            visStrikethrough.appendChild(strikethroughIcon); 

            let visdelete = document.createElement("button");
            visdelete.setAttribute('class', 'task--delete'); 
            visdelete.setAttribute('id', `task--delete${i}-${index}`); 
            let deleteIcon = document.createElement("img"); 
            deleteIcon.setAttribute('class', 'task--deleteIcon');
            deleteIcon.setAttribute('id', `task--deleteIcon${i}-${index}`); 
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

function createProjectForm() {
    const sidebar = document.getElementById('sidebar--projectsExtra'); 
    const addProjectForm = document.createElement('form'); 
    addProjectForm.setAttribute('id', 'createProjectForm-form'); 
    const addProjectInput = document.createElement('input'); 
    addProjectInput.setAttribute('id', 'project-name'); 
    addProjectInput.setAttribute('placeholder', 'new project'); 
    const addProjectSubmit = document.createElement('input'); 
    addProjectSubmit.setAttribute('id', 'project-submit'); 
    addProjectSubmit.setAttribute('type', 'submit'); 
    addProjectSubmit.setAttribute('value', 'Add'); 
    addProjectForm.append(addProjectInput, addProjectSubmit);
    sidebar.appendChild(addProjectForm); 
}

function createTaskForm(i) {
    const addTaskBtn = document.getElementById(`addTaskBtn${i}`); 
    const addTaskForm = document.createElement('form'); 
    addTaskForm.setAttribute('id', `createTaskForm${i}`);
    addTaskForm.setAttribute('class', 'createTaskForm-form'); 

    const addTaskInput = document.createElement('input'); 
    addTaskInput.setAttribute('id', 'task-name'); 
    addTaskInput.setAttribute('class', 'task-addInput'); 
    addTaskInput.setAttribute('placeholder', 'Task title'); 

    const addDueDateInput = document.createElement('input'); 
    addDueDateInput.setAttribute('id', 'task-dueDate'); 
    addDueDateInput.setAttribute('class', 'task-addInput'); 
    addDueDateInput.setAttribute('placeholder', 'dd/mm/yyyy'); 

    const addPriorityInput = document.createElement('input'); 
    addPriorityInput.setAttribute('id', 'task-priority'); 
    addPriorityInput.setAttribute('class', 'task-addInput'); 
    addPriorityInput.setAttribute('placeholder', 'Priority (1-5)'); 

    const addDescriptionInput = document.createElement('input'); 
    addDescriptionInput.setAttribute('id', 'task-description'); 
    addDescriptionInput.setAttribute('class', 'task-addInput'); 
    addDescriptionInput.setAttribute('placeholder', 'Description'); 

    const addTaskSubmit = document.createElement('input'); 
    addTaskSubmit.setAttribute('id', 'task-submit'); 
    addTaskSubmit.setAttribute('type', 'submit'); 
    addTaskSubmit.setAttribute('value', 'Add Task'); 

    addTaskForm.append(addTaskInput, addDueDateInput, addPriorityInput, addDescriptionInput, addTaskSubmit);
    addTaskBtn.insertAdjacentElement("afterend", addTaskForm); 
}

function addProjectToDo() {
    document.getElementById('createProjectForm-form').addEventListener('submit', (e) => {
        e.preventDefault();
        let project = document.getElementById('project-name').value;
        todo().addProject(project); 
        clearSidebar();
        writeProjectSidebar();   
        clearTaskList(); 
        let newProj = Number((todo().listProjects().length) - 1); 
        writeProjectTasks(newProj);
    });
}

function addTaskToDo(i, selectedProject) {
    document.getElementById(`createTaskForm${i}`).addEventListener('submit', (e) => {
        e.preventDefault();

        let task = document.getElementById('task-name').value;
        let dueDate = document.getElementById('task-dueDate').value;
        let priority = document.getElementById('task-priority').value;
        let description = document.getElementById('task-description').value;

        todo().addTaskToProject(i, task, dueDate, priority, description); 
        clearTaskList();
        if (selectedProject >= 0) {
            writeProjectTasks(i);
        } else {
            writeAllTasks(); 
        };
    });
}


function projectButtons() {
    const allTasksBtn = document.getElementById('sidebar--inbox'); 
    const todayTasksBtn = document.getElementById('sidebar--today'); 
    const weekTasksBtn = document.getElementById('sidebar--thisWeek'); 
    const addProjectBtn = document.getElementById('sidebar--addProject'); 
    const projectsExtra = document.getElementById('sidebar--projectsExtra');
    const list = document.getElementById('list');

    let selectedProject = -1; 

    allTasksBtn.addEventListener('click', (e) => {
        selectedProject = -1;
        clearTaskList();
        writeAllTasks(); 
    });

    addProjectBtn.addEventListener('click', (e) => {
        selectedProject = Number((todo().listProjects().length) - 1);
        createProjectForm();
        addProjectToDo(); 
    });

    projectsExtra.addEventListener('click', (e) => {                // select project
        for (let i = 0; i < todo().listProjects().length; i++) {
            if (e.target.id === `project--title${i}`) {
                selectedProject = i; 
                clearTaskList();
                writeProjectTasks(i);
            };
        };
    });

    projectsExtra.addEventListener('click', (e) => {                // delete project
        for (let i = 0; i < todo().listProjects().length; i++) {
            if (e.target.id === `deleteProject${i}`) {
                todo().deleteProject(i); 
                clearSidebar();
                writeProjectSidebar();  
                clearTaskList();
                writeAllTasks();  
            };
        };
    });

    list.addEventListener('click', (e) => {                // add task to project
        for (let i = 0; i < todo().listProjects().length; i++) {
            if (e.target.id === `addTaskBtn${i}`) {
                createTaskForm(i); 
                addTaskToDo(i, selectedProject); 
            };
        };
    });

    list.addEventListener('click', (e) => {                // add strikethrough class
        for (let i = 0; i < todo().listProjects().length; i++) {
            for (let j = 0; j < todo().listProjects()[i].tasks.length; j++) {
                let taskDisplay = document.getElementById(`task--display${i}-${j}`);
                if ((e.target.id === `task--strikethrough${i}-${j}`) || (e.target.id === `task--strikethroughIcon${i}-${j}`)) {
                    console.log(`testing${i}${j}`); 
                    todo().changeTaskStatus(i, j); 
                    if (todo().listProjects()[i].tasks[j].status == true) {
                        taskDisplay.classList.add('task--strikethrough');
                    } else if (todo().listProjects()[i].tasks[j].status == false) {
                        taskDisplay.classList.remove('task--strikethrough');
                    }
                };
            };
        };
    });

}

export default function generateDOM() {
    document.body.append(
        header(), 
        fixedContent(), 
        footer(),
        projectButtons(),
    );

    writeProjectSidebar();
    writeAllTasks();

};