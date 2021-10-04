/**
 * new 的作用
 * 1- 声明了一个空对象, 该对象的_proto_指向构造函数色prototype
 * 2- this 指向这个空对象
 * 3- 执行构造函数
 * 4- 返回this
 */

function myNew(fn, ...args) {
    if (typeof fn !== 'function') {
        throw Error('需要传入函数')
    }
    const instance = Object.create(fn.prototype)
    fn.apply(instance, args)
    return instance
}

function Person(name) {
    this.name = name
}

function add(a, b) {
    return a + b
}
let me = myNew(Person, 'lilei')
console.log(me);

let addRes = myNew(add, 1, 2)
console.log(addRes);
console.log(add.prototype);