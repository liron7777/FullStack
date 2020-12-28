let number_list = [1, 2, 3, 4, 5];
console.log('number list reduce -', number_list.reduce(function(pre, curr) { return pre + curr }, 0));

const name_list = ['liron', 'pnina', 'raz', 'tal'];
const new_list = name_list.reduce(function(pre, curr) {
    pre[curr] = curr;
    return pre;
}, {});
console.log('new list -', new_list);