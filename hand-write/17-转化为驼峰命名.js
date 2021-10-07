var s1 = "get-element-by-id"

// 转化为 getElementById

const foo = function (str) {
    const arr = str.split('-')
    const first = arr.shift()
    const result = []
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i][0].toUpperCase() + arr[i].slice(1))
    }
    result.unshift(first)
    return result.join('')
}

const foo2 = function (s1) {
    const reg = /-\w/g
    return s1.replace(reg, function (x) {
        return x.slice(1).toUpperCase()
    })
}
console.log(foo2(s1));