import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }
    }
    usernameHandler = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    passwordHandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    render() {
        return (
            <div>
                <h2>Sign Up Form</h2>
                <div className="container">
                    <section>
                        <input className="input" value={this.state.username} type="text" placeholder="enter your username" onChange={this.usernameHandler} ></input>
                        <input className="input" value={this.state.password} type="password" placeholder="enter your password" onChange={this.passwordHandler} ></input>
                    </section>
                    <aside>
                        <button type="submit" class="button">Sign in </button>
                    </aside>
                </div>
            </div>
        )
    }
}

export default Form
