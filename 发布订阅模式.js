class Publisher {
    constructor() {
        this._subMap = {}
    }
    // 消息订阅
    subscribe(type, cb) {
        if (this._subMap[type]) {
            if (!this._subMap[type].includes(cb)) {
                this._subMap[type].push(cb)
            } else {
                this._subMap[type] = [cb]
            }
        }
    }
    // 取消订阅
    unsubscribe(type, cb) {
        if (!this._subMap[type] || !this._subMap[type][cb]) {
            return;
        }
        const index = this._subMap[type].indexOf(cb);
        this._subMap[type].splice(index, 1)
    }
    // 消息发布
    notify(type, ...playload) {
        if (!this._subMap[type]) {
            return;
        }
        this._subMap[type].forEach(cb => cb(...playload))
    }
}
