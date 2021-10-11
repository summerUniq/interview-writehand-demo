function isPhone(tel) {
    const reg = /^1[345678]\d{9}/
    return reg.test(tel)
}
console.log(isPhone('16601767293'));