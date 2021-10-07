const allSettled = function (promises) {
    return new Promise((resolve, reject) => {
        let len = promises.length;
        let results = [];
        let count = 0;
        if (len === 0) {
            resolve(results)
            return
        }
        function addElementToResult(i, ele) {
            results[i] = ele
            count++
            if (count === len) {
                resolve(results)
            }
        }
        let index = 0
        for (const promise of promises) {
            let currentIndex = index;
            promise.then((res) => {
                addElementToResult(currentIndex, {
                    status: 'fulfilled',
                    value: res
                })
            }, (reason) => {
                addElementToResult(currentIndex, {
                    status: 'rejected',
                    reason: reason
                })
            })
            index++
        }
    })
}


const resolved = Promise.resolve(42);
const rejected = Promise.reject(-1);

const allSettledPromise = allSettled([resolved, rejected]);

allSettledPromise.then(function (results) {
    console.log(results);
});