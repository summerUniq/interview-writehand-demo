// 场景： 搜索框，输入停止后达到多长时间出发函数

function debounce(fnc, wait) {
    let timer = 0;
    return function () {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fnc.apply(this, [...arguments])
        }, wait)
    }
}

// test
function add(a, b) {
    console.log(a + b);
    return a + b
}

const addDelay = debounce(add, 1000)
setTimeout(() => {
    addDelay(1, 2)
}, 100)