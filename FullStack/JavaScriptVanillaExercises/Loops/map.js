/*!* ------------------------------------ Example 1 ------------------------------------------------- *!*/
let numbers = [1, 2, 3, 4, 5];
numbers_result = numbers.map(
    number => { return number + 2 }
);
console.log('new list + 2-', numbers_result);

/*!* ------------------------------------ Example 2 ------------------------------------------------- *!*/
numbers_result_list = numbers.map(
    number => { return { value: number + 2 } }
);
console.log('new list + object-', numbers_result_list);

/*!* ------------------------------------ Example 3 ------------------------------------------------- *!*/
let names = {
    liron: 'liron',
    tal: 'tal',
    raz: 'raz'
};
let names_change = Object.values(names)
    .map(
        name => { return { name: name } }
    );
console.log('new list2 + object-', names_change);

/*!* ------------------------------------ Example 4 ------------------------------------------------- *!*/
var arr1 = ['ball', 'game', 'basketball'];
var value1 = "game";

function words(arr_f, value_f) {
    return arr_f.map(
        word_value => {
            if (word_value == value_f) {
                return "good"
            }
            return "not good"
        }
    )
}
console.log('words-', words(arr1, value1));