function clickme(){
    let h1 = document.querySelector('#main_title')
    let input1 = document.querySelector('input')
    console.log('value1:', input1.value);
    let input2 = document.querySelectorAll('input')
    console.log('value2:', input2[1].value = 'liron');
    input2[2].hidden = true
    h1.style.color = "red"
    let name = document.querySelector('#last_number')
    name.scrollIntoView();
}

let body = document.body
console.log('body', body);
console.log('body contans:', body.childNodes);
let div_of_body = body.children[0]
let name_list = div_of_body.children[5].children[1]
console.log('nextElement:', name_list.nextElementSibling);
console.log('2 nextElement:', name_list.nextElementSibling.nextElementSibling);

let add_h1 = document.createElement("h1")
add_h1.innerText = "append Child"
document.body.appendChild(add_h1)