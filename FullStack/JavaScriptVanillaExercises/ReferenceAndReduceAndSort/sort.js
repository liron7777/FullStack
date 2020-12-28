/*!* ------------------------------------ Example 1 ------------------------------------------------- *!*/
let my_array = [{ name: 'liron', id: '2543' }, { name: 'Tom', id: '0953' }, { name: 'ron', id: '3289' }];

function name_sort(my_array) {
    return my_array.sort((x, y) => {
        if (x.name.toLowerCase() > y.name.toLowerCase()) {
            return 1
        } else {
            return -1
        }
    })
}

function id_sort(my_array) {
    return my_array.sort((x, y) => {
        if (x.id > y.id) {
            return 1
        } else {
            return -1
        }
    })
}

console.log(JSON.stringify(name_sort(my_array)));
console.log(JSON.stringify(id_sort(my_array)));

/*!* ------------------------------------ Example 2 ------------------------------------------------- *!*/
let list_a = [1, 34, 1];
let list_b = [3, 2, 6, 96, 7];

function merge_sort(list_1, list_2) {
    let post1 = 0;
    let post2 = 0;
    const list_1_length = list_1.length;
    const list_2_length = list_2.length;
    const total_length = list_1_length + list_2_length;
    let results = [];

    for (let i = 0; i < total_length; i++) {
        if (post1 < list_1_length && (post2 >= list_2_length || list_1[post1] <= list_2[post2])) {
            results.push(list_1[post1]);
            post1++;
        } else {
            results.push(list_2[post2]);
            post2++;
        }
    }
    return results
}

let merge_result = merge_sort(list_a, list_b);
console.log(merge_result);