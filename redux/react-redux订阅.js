import React, { Component } from 'react'
import store from './store'

import { Provider } from 'react-redux'
export default class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Provider store={store}>
                {/* 子组件 */}
            </Provider>
        )
    }
}
