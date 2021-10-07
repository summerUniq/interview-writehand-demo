// var a = ; b = ; // 返回 2
// var a = ''; b = ; // 返回 -1
// var a = '355'; b = '12354355'; // 返回 5
console.log(isContain1('34', '1234567'));
// console.log(isContain('35', '1234567'));
// console.log(isContain('355', '12354355'));

function isContain(a, b) {
    return b.indexOf(a) >= 0 ? b.indexOf(a) : -1
}

function isContain1(a, b) {
    for (let i in b) {
        if (a[0] === b[i]) {
            let tmp = true;
            for (let j in a) {
                console.log(~~i, ~~j);
                if (a[j] !== b[~~i + ~~j]) {
                    tmp = false;
                }
            }
            if (tmp) {
                return i;
            }
        }
    }
    return -1;
}