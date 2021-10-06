function jsonParse(jsonStr) {
    return new Function('return' + jsonStr)()
}
var jsonStr = '{ "age": 20, "name": "jack" }'
console.log(jsonParse(jsonStr));
console.log(eval(JSON.stringify(jsonStr)));