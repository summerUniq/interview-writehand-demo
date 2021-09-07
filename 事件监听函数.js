function bindEvent(element, type, selector, fn) {
    if (fn == null) {
        fn = selector;
        selector = null
    }
    element.addEventListener(type, event => {
        const target = event.target
        if (selector) {
            if (target.matches(selector)) {
                fn.call(target, event)

            }
        } else {
            fn.call(target, event)
        }
    })
}