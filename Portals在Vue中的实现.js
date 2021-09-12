import Component from './modile'

export default {
    install(Vue) {
        // 继承Vue创建一个类
        const MessageError = Vue.extends(Component)
        // 初始化继承类的实例
        const instance = new MessageError()
        // 创建继承类实例的挂载点
        instance.$mount(document.createElement('div'))
        // 将该挂载点添加到body
        document.body.appendChild(instance.$el)
    }
}


// 外部通过Vue.use(xx)的形式按照该组件