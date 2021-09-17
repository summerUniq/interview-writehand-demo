import React, { Component } from 'react'
import store from './store'
export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        store.subscribe(() => {
            this.setState(store.getState())
        })
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}
