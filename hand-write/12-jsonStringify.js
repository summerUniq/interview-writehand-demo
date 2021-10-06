console.log(josnStringfiy(1));
const a = {
    a: 1,
    b: 'string',
    c: false,
    d: null,
    e: undefined,
    f: Symbol(1),
    g: function () {

    },
    h: ['a', 'b']
}


console.log(josnStringfiy('string')); // 原始值
console.log(josnStringfiy(false)); // 原始值
console.log(josnStringfiy(null)); // 原始值
console.log(josnStringfiy(undefined)); // 忽略
// console.log(josnStringfiy(Symbol(1))); // 忽略
console.log(josnStringfiy(function () { })); // 忽略
console.log(josnStringfiy(a));
console.log(josnStringfiy(['a', 2]));


function josnStringfiy(obj) {
    const type = typeof obj
    if (type !== 'object') {
        if (/string|undefined|function/.test(obj)) {
            obj = '"' + obj + '"'
        }
        return String(obj)
    } else {
        let json = []
        let isArr = Array.isArray(obj)
        for (let k in obj) {
            let val = obj[k]
            const type = typeof val
            if (/string|undefined|function/.test(type)) {
                val = '"' + val + '"'
            } else if (type === 'object') {
                val = josnStringfiy(val)
            }
            json.push((isArr ? "" : '"' + k + '"' + ":") + String(val))
        }
        return (isArr ? "[" : "{") + String(json) + (isArr ? "]" : "}")
    }
}