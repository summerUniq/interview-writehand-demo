/**
 * 深拷贝
 */

function deepClone(obj) {
    // 判空
    if (typeof obj !== 'object' || obj == null) {
        return obj
    }

    // 初始化
    let result = null;
    if (obj instanceof Array) {
        result = []
    } else {
        result = {}
    }

    // 遍历对象属性
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = deepClone(obj[key])
        }
    }

    return result

}