function curry(fn) {
    function _c(rest_num, arr_list) {
        if (rest_num <= 0) {
            return fn(...arr_list)
        }
        return (...args) => { return _c(rest_num - args.length, [...arr_list, ...args]) }
    }
    return _c(fn.length, [])
}