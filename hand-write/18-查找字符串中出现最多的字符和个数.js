// 例: abbcccddddd -> 字符最多的是d，出现了5次

function foo(str) {
    const newStr = str.split('').sort().join('');
    console.log(newStr);
    let num = 0;
    let char = ''
    const reg = /(\w)\1+/g
    newStr.replace(reg, function ($0, $1) {
        console.log($0, $1);
        if (num < $0.length) {
            num = $0.length;
            char = $1
        }
    })
    return `字符最多的是${char}, 出现了${num}次`
}

let str = "abcabcabcbbcccccccc";
console.log(foo(str));