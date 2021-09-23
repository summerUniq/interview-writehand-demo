function throttle(fn, wait) {
    let start = Date.now();
    return function () {
        const now = Date.now();
        const duration = now - start;
        if (duration > wait) {
            start = now
            fn.apply(this, arguments)
        }
    }
}

// test
const log = function () {
    console.log(1);
}
const fn = throttle(log, 1000)
setInterval(() => {
    fn()
}, 1);
