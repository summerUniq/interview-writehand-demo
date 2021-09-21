const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'
// new Promise((resolve, reject) => {
//     if (xxx) {
//         resolve(value)
//     } else {
//         reject(value)
//     }
// }).then((res) => {
//     console.log(res);
// }).catch((error) => {
//     console.log(error);
// })
function MyPromise(fn) {
    const that = this;
    this.state = PENDING;

    // 用于保存resolve/reject传入的值
    this.value = null;

    this.resolvedCallbacks = []
    this.rejectedCallbacks = []


    function resolve(value) {
        if (that.state === PENDING) {
            that.state = RESOLVED
            that.value = value
            that.resolvedCallbacks.map((cb) => cb(that.value))

        }
    }

    function reject(value) {
        if (that.state === PENDING) {
            that.state = REJECTED
            that.value = value
            that.rejectedCallbacks.map((cb) => cb(that.value))
        }
    }
    try {
        fn(resolve, reject)
    } catch (error) {
        console.log(error);
    }
}

MyPromise.prototype.then = function (onFulFilled, onRejected) {
    const that = this;
    onFulFilled = typeof onFulFilled === 'function' ? onFulFilled : v => v;
    onRejected = typeof onRejected === 'function' ? onRejected : e => { throw e }
    if (this.state === PENDING) {
        this.rejectedCallbacks.push(onRejected)
        this.resolvedCallbacks.push(onFulFilled)
    }
    if (this.state === RESOLVED) {
        onFulFilled(that.value)
    }
    if (this.state === REJECTED) {
        onRejected(that.value)
    }
}