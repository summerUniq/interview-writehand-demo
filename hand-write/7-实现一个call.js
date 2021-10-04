/**
 * 将函数设置为这个对象的属性
 * 执行这个函数，传入参数
 * 删除这个函数
 * 返回函数执行结果
 */

Function.prototype.myCall = function (...args) {
    const context = args.shift() || window;
    // 注意： 使用symbol 对象做键值保值不影响context
    const key = Symbol('key')
    // 函数挂载到对象上
    context[key] = this;
    // 执行函数
    const res = context[key](...args)
    // 移除挂载
    delete context[key]
    return res
}

function add(a, b) {
    console.log(this.name);
    return a + b
}

const res = add.myCall({ name: 'uu' }, 1, 2)
console.log(res);