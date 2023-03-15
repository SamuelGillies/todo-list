export default function header () {

    const element = document.getElementById('container'); 

    const header = document.createElement('header'); 
    header.setAttribute('id', 'header'); 
    element.appendChild(header); 
    

    return element; 

}