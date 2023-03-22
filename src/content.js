import generateDOM from './DOM.js'; 


export default function content () {

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
    inbox.appendChild(inboxIcon); 
    inbox.appendChild(inboxLabel); 
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
    today.appendChild(todayIcon); 
    today.appendChild(todayLabel); 
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
    thisWeek.appendChild(thisWeekIcon); 
    thisWeek.appendChild(thisWeekLabel); 
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
    projectsExtra.appendChild(addProject); 
    addProject.appendChild(addProjectIcon); 
    addProject.appendChild(addProjectLabel); 
    addProjectLabel.innerHTML = 'Add'; 

    const listTitle = document.createElement('h2'); 
    listTitle.setAttribute('id', 'list--title'); 
    listTitle.setAttribute('class', 'title'); 
    list.appendChild(listTitle); 
    listTitle.innerHTML = 'Projects'; 

    generateDOM(); 

    return element; 

}

