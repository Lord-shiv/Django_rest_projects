import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            posts: []
        }
    }

    componentDidMount() {
        // this.setState({ username: 'shivam' })
        fetch('http://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => this.setState({ posts: data }))
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
        const { posts } = this.state

        return (
            <div>
                <div className="section card shadow1">
                    <h3>Welcome back!</h3>
                    <input className="input" value={this.state.username} type="text" placeholder="username" onChange={this.usernameHandler} ></input>
                    <input className="input" value={this.state.password} type="password" placeholder="password" onChange={this.passwordHandler} ></input>
                    <button type="submit" className="button">Sign in </button>
                </div>
                {posts.map(post =>
                    <h2 key={post.id}>{post.title}</h2>
                )}
            </div>
        )
    }
}

export default Form
