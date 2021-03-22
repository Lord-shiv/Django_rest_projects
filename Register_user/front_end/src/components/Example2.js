import React, { Component } from 'react'

class Example2 extends Component {
    myElement(names) {
        return names.map(name =>
            <div key={name}>
                {`${name}`}
            </div>
        )
    }
    render() {
        return (
            <h3>
                {this.myElement(this.props.names)}
            </h3>
        )
    }
}

export default Example2
