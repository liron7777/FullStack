function add(){
    let node = document.createElement("div"); 
    let value = (document.querySelector(".input").value)
    let button = document.createElement("BUTTON")
    node.innerHTML = value;
    button.innerHTML = 'delete';
    node.appendChild(button)
    button.addEventListener("click",  ()=>node.remove());
    document.body.appendChild(node);
}

