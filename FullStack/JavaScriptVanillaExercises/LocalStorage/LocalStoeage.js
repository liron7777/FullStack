function set(){
    let name_value = document.querySelector(".name").value; 
    localStorage.setItem("names", name_value);
}

function remove(){
    localStorage.removeItem("lastname");
}

function get(){
    var get_names = localStorage.getItem("names");
    console.log('get names:', get_names);
}
