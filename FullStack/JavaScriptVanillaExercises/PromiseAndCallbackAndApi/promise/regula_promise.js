/*!* ------------------------------------ Example 1 ------------------------------------------------- *!*/
const setTimeoutPromise = (callback, delay) => {
    return new Promise(resolve => {
        setTimeout(() => {
            let value = callback()
            resolve(value)
        }, delay)
    })
};


let callback1 = () => {
    return 77
};
let prom = setTimeoutPromise(callback1, 3000);
prom.then(value => console.log(value));


/*!* ------------------------------------ Example 2 ------------------------------------------------- *!*/
const fetch = (url, func) => {
    setTimeout(() => func("result from" + url), 2000)
};
class Date_layer2_c {
    load(url) {
        return new Promise((result, reject) => {
            fetch(url, (data) => {
                if (data) {
                    result(data)
                } else {
                    reject("bad")
                }
            })
        })
    }
}
let data_layer2 = new Date_layer2_c();
let request_promise = data_layer2.load('walla.com');
console.log("this will be printer");
request_promise
    .then(request_data => {
        console.log('good ' + request_data)
    })
    .catch((error_string) => { console.log("error" + error_string) });
console.log('loading');







