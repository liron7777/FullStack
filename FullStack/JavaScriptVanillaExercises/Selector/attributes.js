var element = document.querySelector('#main_title')
console.log('getAttribute', element.getAttribute("class"));

element.setAttribute("class","setAttribute")
console.log('setAttribute', element);

element.setAttribute("name","setAttribute name")
console.log('new setAttribute', element);

element.setAttribute("title","selector title")
console.log('title setAttribute', element);

element.removeAttribute('name')
console.log('removeAttribute', element);






