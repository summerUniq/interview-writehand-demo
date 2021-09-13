import React, { Component } from 'react'


const withMouse = (Comp) => {

    export default class WithMouseConp extends Component {
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
                    <Comp {...this.props} mouse={this.state} />
                </div>
            )
        }
    }

}