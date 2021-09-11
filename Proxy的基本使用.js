// 原始数据
const data1 = {
    name: 'zhangsan',
    age: 20,
}

const data2 = ['a', 'b', 'c']

const proxyData = new Proxy(data2, {
    get(target, key, receiver) {
        const ownKeys = Reflect.ownKeys(target)
        if (ownKeys.includes(key)) {
            // 处理监听
        }
        // Reflect.get可以返回是否赋值成功
        return Reflect.get(target, key, receiver)
    },
    set(target, key, val, receiver) {
        // 判断增改是否有变化，没有变化直接返回true
        if (val === target[key]) {
            return true
        }
        return Reflect.set(target, key, val, receiver)
    },
    deleteProperty(target, key) {
        return Reflect.deleteProperty(target, key)
    }
})


// console.log(proxyData.age);
// proxyData.age = 30
// console.log(proxyData.age);
// proxyData.test = 123
// console.log(proxyData.test);
// console.log(proxyData.name);
// delete proxyData.name
// console.log(proxyData.name);
proxyData.push('d')
console.log(proxyData); // get:push get:length set: d  set: length