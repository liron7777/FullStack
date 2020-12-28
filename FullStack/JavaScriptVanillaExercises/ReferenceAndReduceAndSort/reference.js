let a = 7;
let b = a;
console.log('b', b);

a = 8;
console.log('after change a, b -', b);

let a_object = { name: 'liron', age: '22' };
let b_object = a_object;
let c_object = {...a_object };
console.log('b object', b_object, 'c object', c_object);

a_object.name = 'liron parente';
console.log('after change a object b -', b_object, 'after change a object c -', c_object);