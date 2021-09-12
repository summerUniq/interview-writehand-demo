import React from 'react'
import ReactDom from 'react-dom'

class Portals extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return ReactDom.createPortal(<div>{this.props.children}</div>, document.body)
    }
}

export default Portals