function myInstanceOf(left, right) {
    let prototype = right.prototype
    let left = left._proto_
    while (true) {
        if (left === null || left === undefined) {
            return false
        }
        if (left === prototype) {
            return true
        }
        left = left._proto_
    }
}