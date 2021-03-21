import React, { Component } from "react";

class UserFormClass extends Component {
    render() {
        return (
            <h1>My email is : {this.props.email}</h1>
        )
    }
}

export default UserFormClass;