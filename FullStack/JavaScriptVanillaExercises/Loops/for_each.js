/*!* ------------------------------------ Example 1 ------------------------------------------------- *!*/
var numbers_list = [1, 2, 3, 4, 5, 6, 7];
numbers_list.forEach(function(number, index, numbers) {
    console.log('numbers-', numbers, 'index-', index, 'number-', number)
});

/*!* ------------------------------------ Example 2 ------------------------------------------------- *!*/
numbers_list.forEach(function(number, index, numbers) {
    console.log('number + 2-', number + 2);
});