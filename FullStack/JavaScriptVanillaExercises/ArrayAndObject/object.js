/*!* ------------------------------------ Example 1 ------------------------------------------------- *!*/
let user = {
    name: 'liron',
    age: 22,
    liron_birthday: '28.1.98',
    address: {
        city: 'or yehouda',
        street: {
            name: 'tzalon',
            number: 6
        }
    }
};
console.log('object-', user);

/*!* ------------------------------------ Example 2 ------------------------------------------------- *!*/
user.name = 'liron parente';
user['age'] = 23;
let birthday = 'liron_birthday';
user[birthday] = 'date - 28.1.98';
console.log('object after change-', user);

delete user.address.street.number;
console.log('object after delete number-', user);