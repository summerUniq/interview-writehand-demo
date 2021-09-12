import React, { Component } from 'react'

const connect = (mapStateToProps, mapDispatchToProps) => (Comp) => {

    class Connect extends Component {
        constructor(props) {
            super(props)
            this.state = {
                allProps: {}
            }
        }
        // ....
        render() {
            return <Comp {...this.state.allProps} />
        }
    }
    return Connect
}

export default connect