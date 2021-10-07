// 保留三位小数
var a = parseToMoney(1234.56); // return '1,234.56'
var b = parseToMoney(123456789); // return '123,456,789'
var c = parseToMoney(1087654.321); // return '1,087,654.321'

function parseToMoney(number) {
    number = parseFloat(number.toFixed(3))
    let [inter, digital] = String.prototype.split.call(number, '.')
    inter = inter.replace(/\d(?=(\d{3})+$)/g, '$&,')
    return inter + (digital ? '.' + digital : '')
}

console.log(a, b, c);