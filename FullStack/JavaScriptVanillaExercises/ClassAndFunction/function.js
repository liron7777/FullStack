/*!* ------------------------------------ function -------------------------------------------------- *!*/
name_value = 'out';
/* ------------- legacy --------------- */
const legacy_obj = {
    name_value: 'into',
    function_o: function() {
        console.log(this.name_value + ' is the name value (legacy obj)')
    }
};
legacy_obj.function_o();

/* ------------- arrow --------------- */
const arrow_obj = {
    name_value: 'out',
    function_o: () => {
        console.log(this.name_value + ' is the name value (arrow obj)')
    }
};
arrow_obj.function_o();


/* ------------ change this with bind ------------ */
/* ------------- bind --------------- */
let new_obj = { name_value: 'change_bind' };
legacy_obj.function_o.bind(new_obj)();
/* ------------- call --------------- */
let new_obj2 = { name_value: 'change_call' };
legacy_obj.function_o.call(new_obj2);

/*!* ------------------------------------ error function -------------------------------------------- *!*/
let act = {
    name: 'liron',
    name_f: function() { console.log(this.name + ' name running') },
    name_n_f: () => { console.log(this.name + 'name not running') }
};
act.name_f();
act.name_n_f();


/*!* ------------------------------------ try catch ------------------------------------------------- *!*/
function try_catch(){
    try{
        console.log(test);
    }catch(error){console.log('try catch - error');}
}

try_catch()

/*!* ------------------------------------ throw error ----------------------------------------------- *!*/
function throw_error(){
    throw new Error("throw error")
}
throw_error()