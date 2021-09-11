function reactive(target = {}) {
    if (typeof target !== 'object' || target === null) {
        return target
    }
    const proxyConfig = {
        get(target, key, receiver) {
            const ownKeys = Reflect.ownKeys(target)
            if (ownKeys.includes(key)) {
                // 更新视图
            }
            const result = Reflect.get(target, key, receiver)
            return reactive(result)
        },
        set(target, key, val, receiver) {
            if (val === target[key]) {
                // 没有发生改变
                return true
            }
            const ownKeys = Reflect.ownKeys(target)
            if (ownKeys.includes(key)) {
                // 执行变更
            } else {
                // 执行新增
            }
            return Reflect.set(target, key, val, receiver)
        },
        deleteProperty(target, key) {
            Reflect.deleteProperty(target, key)
        }
    }
    return new Proxy(target, proxyConfig)
}