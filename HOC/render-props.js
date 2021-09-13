// render props 通过一个函数将类组件的state传给子组件
import React, { Component } from 'react'

export default class Factory extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div>
                {this.props.render(this.state)}
            </div>
        )
    }
}

const App = () => {
    <Factory render={() => <p>{props.a}{props.b}</p>} />
}
