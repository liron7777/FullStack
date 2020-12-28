/*!* ---------------------------------------------- filter ----------------------------------------------------- *!*/
/*!* ------ example1 ------ *!*/
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let BigNumbers = numbers
    .filter(item => item >= 5);
console.log('bigNumbers-', BigNumbers);

/*!* ------ example2 ------ *!*/
let people = [{
        name: 'liron',
        age: 23
    },
    {
        name: 'tal',
        age: 21
    },
    {
        name: 'noam',
        age: 21
    },
    {
        name: 'roni',
        age: 22
    }
];
let people_22_age = people.filter(person => person.age > 21);
console.log('biger from 21-', people_22_age);

/*!* ------ example3 ------*!*/
let users = [
    { name: "roy", isLoggedIn: true},
    { name: "david", isLoggedIn: false},
    { name: "neta", isLoggedIn: false},
    { name: "dor", isLoggedIn: true},
]

let new_users = users.filter(user => user.isLoggedIn == true)
console.log('filter , new users -', new_users);

/*!* -------------------------------------------- join --------------------------------------------------------- *!*/
let words = ['display','home','dog'];
console.log('join() -',words.join());
console.log('join( value ) -',words.join(' value '));

/*!* -------------------------------------------- split -------------------------------------------------------- *!*/
let string = 'why you think about job'
console.log('split -',string.split(' '));
console.log('split by t -',string.split('t'));

/*!* -------------------------------------------- findIndex ---------------------------------------------------- *!*/
let isLargeNumber = (element) => element == 'home';
console.log('findIndex', words.findIndex(isLargeNumber));

/*!* -------------------------------------------- reverse ------------------------------------------------------ *!*/
console.log('reverse', words.reverse());

/*!* -------------------------------------------- slice -------------------------------------------------------- *!*/
let animals = ['elephant', 'camel','bison', 'duck', 'ant'];
console.log('slice -', animals.slice(2, 4));

/*!* -------------------------------------------- splice ------------------------------------------------------- *!*/
let animals1 = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log('splice animals list after delete -', animals1.splice(3,1));
console.log('splice animals list', animals1);
console.log('splice enter animals list after delet',animals1.splice(3,1,'dog') );
console.log('splice enter animals',animals1);

/*!* -------------------------------------------- indexof -------------------------------------------------------- *!*/
console.log('indexOf', animals.indexOf('bison'));

/*!* -------------------------------------------- sort -------------------------------------------------------- *!*/
/*!* ------ example1 ------ *!*/
console.log('sort',animals.sort());

/*!* ------ example2 ------ *!*/
let num = [12 ,3 ,6 , 5 , 3]
function sort_f(a,b){
    return a - b 
}
console.log('sort + function', num.sort(sort_f) );

/*!* ------ example3 ------ *!*/
let names1 = ['b', 'd','c' ,'a']
function sortbystring(a,b){
    return a.localeCompare(b)
}
console.log('sort by string', names1.sort(sortbystring));

/*!* -------------------------------------------- includes ----------------------------------------------------- *!*/
let str = 'hello world welcome';
yes = str.includes('hello');
no = str.includes('liron');
console.log('yes-', yes, 'no-', no);

/* ---------------------------------------------- array Connection ----------------------------------------------- */
let list1 = [1, 2, 3, 4, 4];
let list2 = [5, 6, 7, 8, 9];

/*!* ------ concat -------- *!*/
let result_2_lists = list1.concat(list2);
console.log('concat', result_2_lists);

/*!* ------ [...] --------- *!*/
let result_2_lists_second_way = [...list1, ...list2];
console.log('[...]', result_2_lists_second_way);

/* -------------------------------------------- destructuring ---------------------------------------------------- */
let names = ['liron','omer','tali']
/*!* ------ example1 ------ *!*/
let [a,b] = names
console.log('a,b',a,b);

/*!* ------ example2 ------ *!*/
let user_roy = {
    name: 'roy',
    last_name: 'chan',
    email: 'test@gmail.com'
}

let {name} = user_roy
console.log('name -', name);

/*!* ------ example3 ------ *!*/
function get_name( {name} ){
    return name
}
console.log('get name function -', get_name(user_roy));

