function create() {
    // 创建空对象
    const obj = {}
    // 获取构造函数
    const _constructor = [].shift.call(arguments);
    // 修改this的指向
    obj._proto_ = _constructor.prototype
    let result = _constructor.apply(obj, arguments)
    return result instanceof Object ? result : obj
}