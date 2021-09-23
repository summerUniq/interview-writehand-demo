
// 1
function deepClone(params) {
    if (typeof params !== 'object' || params !== null) {
        return params
    }
    let result = Array.isArray(params) ? [] : {}
    for (let k in params) {
        if (params.hasOwnProperty(k)) {
            result[k] = deepClone(params[k])
        }
    }
    return result
}

