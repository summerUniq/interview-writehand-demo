const data = {};
let name = 'zhangsan'
Object.defineProperty(data, 'name', {
    get: function () {
        console.log('get');
        return name
    },
    set: function (newName) {
        name = newName
    }
})

console.log(data.name);
data.name = 'xq'
console.log(data.name);