import React, { Component } from 'react';

class Name extends Component {
    constructor() {
        super()
        this.state = {
            name: "Loard Shiv"
        }
    }

    clickMe = () => {
        this.setState({
            // name: "Rick & Morty"
            name: this.state.name === "Loard Shiv" ? "Rick & Morty" : "Loard Shiv"
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <div className="container">
                    <aside>
                        <button onClick={this.clickMe} type="submit" className="button">Change text</button>
                    </aside>
                </div>
            </div>
        )
    }
}

export default Name;