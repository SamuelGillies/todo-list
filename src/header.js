export default function header () {

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