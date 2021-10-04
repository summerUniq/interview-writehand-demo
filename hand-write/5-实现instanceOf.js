// 循环终止条件是： 隐式原型不存在
/**
 * 判断左边实例是否在右边原型上
 * 终止条件： 左侧沿着原型链往上查找，一直到null
 * @param {*} example 
 * @param {*} classFunc 
 * @returns 
 */

function instanceOf(example, classFunc) {
    let proto = example._proto_;
    let target = classFunc.prototype;
    while (proto) {
        if (proto === target) {
            return true;
        } else {
            proto = proto._proto_
        }
    }
    return false
}

function Person(name) {
    this.name = name
}
Person.prototype.getName = function () {
    return this.name
}

var xiaoLi = new Person('xiaoli')
console.log(xiaoLi instanceof Array);
console.log(xiaoLi instanceof Object);
console.log(xiaoLi instanceof Person);