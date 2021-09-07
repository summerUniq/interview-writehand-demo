Function.prototype.myBind = function () {
    // 参数
    const args = Array.prototype.slice.call(arguments)
    // this 指向
    const t = args.shift()
    const self = this;
    return function () {
        return self.apply(t, args)
    }
}

function fn1(a, b) {
    console.log(this);
}

const fn2 = fn1.myBind({ a: 'test' }, 1, 2)
fn2()
