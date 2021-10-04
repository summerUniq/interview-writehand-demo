class EventEmeitter {
    constructor() {
        // 储存事件回调键值对
        this._events = this._events || new Map();
        // 设置监听上限
        this._maxListeners = this._maxListeners || 10;
    }
}

EventBus.prototype.emit = function (type, ...args) {
    let fns = this._events.get(type)
    if (!fns) {
        return;
    }
    fns.map((fn) => {
        fn.apply(this, args)
    })
}
// 监听事件
EventBus.prototype.addEventListener = function (type, fn) {
    let fns = this._events.get(type)
    if (fns) {
        fns.push(fn)
    }
    this._events.set(type, [fn])
}