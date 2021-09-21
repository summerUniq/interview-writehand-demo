Function.prototype.myCall = function (context) {
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }
    context = context || window
    context.fn = this
    const result = context.fn(...[...arguments].slice(1))
    delete context.fn
    return result
}


Function.prototype.myApply = function (context) {
    if (typeof this !== 'function') {
        throw new TypeError('error')
    }
    context = context || window
    context.fn = this;
    let result;
    if (argumemts[1]) {
        result = context.fn(...arguments[1])
    } else {
        result = context.fn()
    }
    delete context.fn
    return result
}

Function.prototype.myBind = function (context) {
    if (typeof this !== 'function') {
        throw new TypeError('error')
    }
    context = context || window;
    _this = this;
    const args = [...arguments].slice(1)
    // 返回了一个新函数,需要考虑new F（）的场景 
    // 还需要考虑 fn.bind()(1)
    return function F() {
        if (this instanceof F) {
            return new _this(...args, ...arguments)
        }
        return _this.apply(context, args.concat(...arguments))
    }
}