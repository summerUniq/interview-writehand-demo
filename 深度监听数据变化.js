const data = {
    name: 'zhangsan',
    age: 20,
    info: {
        address: '北京' // info的内部属性需要深度监听
    },
    numArr: [1, 2, 3] // 对于数组类型value，只定义几个常用的数组操作函数具有双向绑定能力
}

function observer(target) {
    // target 是值类型，不需要深度监听
    if (typeof target !== 'object' || target === null) {
        return target
    }
    if (Array.isArray(target)) {
        target._proto_ = userArrayPhoto
    }
    for (let key in target) {
        defineReactive(target, key, target[key])
    }

}

function defineReactive(target, key, value) {
    // 深度监听
    observer(value)

    // 双向绑定
    Object.defineProperty(target, key, {
        get: function () {
            return value
        },
        set: function (newValue) {
            if (newValue !== value) {
                // 深度监听
                observer(newValue)
                value = newValue
            }
        }
    })

}

const userArrayPhoto = Object.create(Array.prototype)
['push', 'pop', 'shift', 'unshift', 'splice'].forEach(method => {
    userArrayPhoto[method] = () => {
        Array.prototype[method].call(this, ...arguments)
    }
});

observer(data)

data.name = 123