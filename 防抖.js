function debounce(fn, delay = 300) {
    let timer = null;
    return function () {
        if (timer) {
            clearInterval(timer)
        }
        timer = setInterval(() => {
            fn.apply(this, arguments)
        }, delay);
    }
}