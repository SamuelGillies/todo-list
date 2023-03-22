export default function footer() {

    const element = document.getElementById('container'); 

    const footer = document.createElement('footer'); 
    footer.setAttribute('id', 'footer'); 
    element.appendChild(footer); 

    return element; 

}