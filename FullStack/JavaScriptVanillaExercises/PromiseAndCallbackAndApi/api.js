/* ------------------------------------------------ fetch --------------------------------------------- */
fetch('https://itunes.apple.com/search?term=jack+johnson').then(data => { console.log('data -', data) });

/* ------------------------------------------------ json ---------------------------------------------- */
let list_o = {
    name: 'liron',
    player: 'basketball'
};
json_str = JSON.stringify(list_o);
console.log('json_str -', json_str);
console.log('JSON.parse(json_str) -', JSON.parse(json_str));