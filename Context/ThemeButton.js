import React, { Component } from 'react'
import ThemeContext from './context'
export default class ThemeButton extends Component {
    constructor(props) {
        super(props)
    }
    // 静态属性
    static contextType = ThemeContext
    render() {
        const theme = this.context
        return (
            <div>
                <p>{theme}</p>
            </div>
        )
    }
}


// 静态属性挂载方式二
ThemeButton.contextType = ThemeContext

