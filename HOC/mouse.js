import React, { Component } from 'react'

class Mouse extends Component {
    constructor(props) {
        super(props)
        this.state = {
            x: 0,
            y: 0
        }
    }
    handleMouseMove = (event) => {
        this.setState({
            x: event.clientX,
            y: event.clientY
        })
    }
    render() {
        return (
            <div onMouseMove={this.handleMouseMove}>
                {this.props.render(this.state)}
            </div>
        )
    }
}

const App = (props) => (<div>
    <Mouse render={(props) => (<div>this position is {props.x} {props.y}</div>)} />
</div>)

export default App