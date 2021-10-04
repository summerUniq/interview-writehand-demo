Function.prototype.myApply = function (...args) {
    if (!Array.isArray(args[1])) {
        throw Error('参数需要是数组')
    }
    const context = args.shift() || window;
    const key = Symbol('key')
    context[key] = this;
    const res = context[key](...args[0])
    delete context[key]
    return res
}

function add(a, b) {
    // console.log(this);
    return a + b
}

const res = add.myApply({}, [1, 2])
console.log('res>>>', res);