class jQuery {
    constructor(selector) {
        const elements = document.querySelectorAll(selector)
        for (let i = 0; i < elements.length; i++) {
            this[i] = elements[i]
        }
        this.length = elements.length
        this.selector = selector
    }
    get(index) {
        return this[index]
    }
    each(fn) {
        for (let i = 0; i < this.length; i++) {
            const ele = this[i]
            fn(ele)
        }
    }
    on(type, fn) {
        return this.each((ele) => {
            ele.addEventListener(type, fn, false)
        })
    }
}


