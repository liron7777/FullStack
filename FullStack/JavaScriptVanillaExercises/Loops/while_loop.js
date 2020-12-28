let
    list_1 = [1, 2, 2, 3, 4, 5, 5],
    list_2 = [2, 4, 6, 7, 8, 9, 10, 9, 7, 3, 1],
    result_of_2_lists = [...list_1, ...list_2],
    len = (result_of_2_lists.length),
    new_list = [],
    check_list = {}

function connection(result_of_2_lists_f, len_f) {
    while (len_f--) {
        let item = result_of_2_lists_f[len_f];
        if (!check_list[item]) {
            new_list.push(item);
            check_list[item] = true
        }
    }
    return new_list
}

console.log('new list-', connection(result_of_2_lists, len));