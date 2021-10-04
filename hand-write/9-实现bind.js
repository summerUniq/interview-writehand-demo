// 返回一个新函数
// 修改this指向对象 ｜｜ window
// 返回值还是当前函数的返回值

Function.prototype.myBind = function (...args) {
    let context = args.shift() || window;
    self = this;
    return function F(...innerArgs) {
        // 如果返回一个构造函数
        if (self instanceof F) {
            return new self(...args, ...innerArgs)
        }
        return self.apply(context, args.concat(innerArgs))
    }
}

function add(a, b) {
    return a + b
}


const fn = add.myBind({ name: 'll' }, 1)
console.log(fn(2));