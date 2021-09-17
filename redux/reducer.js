const defaultState = {

}

const reducer = (state = defaultState, action) => {
    switch (action.key) {
        case 'add':
            return { ...state, data }
        default:
            return state
    }
}
export default reducer

// 一次完整的redux单向数据流
// 先通过store.dispatch(action), 提交数据到reducer中
// reducer返回新的数据
// store.subscribe(() => {
//     this.setState(store.getState())
// })
// 组件接收到新的state, 执行render