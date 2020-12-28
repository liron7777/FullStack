/*!* ------------------------------------ let ---------------------------------------- *!*/
/*!* ---------------- example1 ------------------------- *!*/
let x = 6
x = 7
console.log('let', x)

/*!* ---------------- example2 of error ---------------- *!*/
// function let (){
//     let number = 7
// }
// console.log(number);

/*!* ------------------------------------ const --------------------------------------- *!*/
/*!* ---------------- example1 of error ---------------- *!*/
// const w = 6
// w = 7
// console.log('let', w);

/*!* ---------------- example2 ------------------------- *!*/
const user = {
    name:'liron'
}
user.name = 'tom'
console.log('const user-',user.name );

/*!* ---------------- example3 of error ---------------- *!*/
// user = {}
// console.log('new user', user);