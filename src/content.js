export default function content () {

    const element = document.getElementById('container'); 

    const content = document.createElement('div'); 
    content.setAttribute('id', 'content'); 
    element.appendChild(content); 

    

    return element; 

}