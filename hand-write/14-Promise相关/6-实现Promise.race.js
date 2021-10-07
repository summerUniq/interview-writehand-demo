Promise.race = function (promises) {
    return new Promise((resolve, reject) => {
        if (promises.length === 0) {
            return;
        }
        for (let i in promises) {
            Promise.resolve(i).then((res) => {
                resolve(res)
                return;
            }).catch((error) => {
                reject(error)
                return;
            })
        }
    })
}