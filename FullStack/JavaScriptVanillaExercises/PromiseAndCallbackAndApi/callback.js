/* ------------------------------------------------ general callback ---------------------------------- */
const run = (callback, delay) => { setTimeout(callback, delay) };
run(() => { console.log('good job!') }, 4000);

/* ------------------------------------------------ set interval -------------------------------------- */
const function_run = () => {
    console.log('yes, set interval')
};
const interval = (setInterval(function_run, 2000));
console.log(interval);
const clear = () => {
    clearInterval(interval);
};
setTimeout(clear, 6000);

/* ------------------------------------------------ set timeout -------------------------------------- */
const function_timeout = () => {
    console.log('yes , set timeout')
};
console.log(setTimeout(function_timeout, 3000));

/* ------------------------------------------------ call function ------------------------------------- */
const fetch = (url, func) => {
    setTimeout(() => func(275), 2000)
};
const print = (data_f) => {
    console.log('data print', data_f)
};
const act = (name, printer) => {
    fetch("test.com/" + name, printer)
};
act('test', print);