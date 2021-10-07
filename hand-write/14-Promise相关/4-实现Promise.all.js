Promise.all = function (promises) {
    return new Promise((resolve, reject) => {
        let results = []
        let len = promises.length;
        let count = 0;
        if (len === 0) {
            resolve(results)
            return;
        }
        for (let i = 0; i < len; i++) {
            Promise.resolve(promises[i]).then((data) => {
                results[i] = data;
                count++;
                if (count === len) {
                    resolve(results)
                }
            }).catch((error) => {
                reject(error)
            })
        }
    })
}