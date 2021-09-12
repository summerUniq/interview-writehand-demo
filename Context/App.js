import React, { Component } from 'react'
import ThemeContext from './context'
import ToolBar from './ToolBar'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            theme: 'light'
        }
    }
    changeTheme = () => {
        this.setState({
            theme: this.state.theme === 'light' ? 'dark' : 'light'
        })
    }
    render() {
        return (
            <ThemeContext.Provider value={this.state.theme}>
                {/* .... */}
                <ToolBar />
                <button onClick={this.changeTheme}>change theme</button>
            </ThemeContext.Provider>
        )
    }
}
