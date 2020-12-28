/*!* --------------- number for-loop ---------------------------- *!*/
for (i = 0; i < 10; i++) {
    console.log('index-', i);
}
/*!* --------------- object for-loop ---------------------------- *!*/
let user = {
    name: 'liron',
    age: '22',
    city: 'or yehuda'
};

/*!* --- in for-loop --- *!*/
for (key in user) {
    console.log('key-', key);
}
for (key in user) {
    console.log(key + ':' + user[key])
}
// /*!* --- of for-loop --- *!*/
let names = ['liron', 'pnina', 'raz', 'tal'];
for (key of names) {
    console.log('names key-', key)
}

/*!* --------------- object each for-loop ----------------------- *!*/
var fruits = ["apple", "orange", "cherry"];
fruits.forEach((data) => { console.log('fruits-', data) });