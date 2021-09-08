function throttle(fn, delay) {
    let timer = null;
    return function () {
        if (timer) {
            return;
        }
        timer = setTimeout(() => {
            fn.apply(this, arguments)
            timer = null
        }, delay)
    }
}