import React, { Component } from "react";

class UserFormClass extends Component {
    render() {
        return (
            <div>
                <h1>My email is : {this.props.email}</h1>
                <button type="submit" onClick={this.props.myclick}>clicked</button>
            </div>
        )
    }
}

export default UserFormClass;