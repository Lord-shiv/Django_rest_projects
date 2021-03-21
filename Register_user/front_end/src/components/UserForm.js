import React from 'react';

function Hello(props) {
    function Clickme() {
        alert("button is Clicked")
    }
    return (
        <div>
            <h1>My name is {props.name} and my last name is {props.lastname}</h1>
            <button type="submit" onClick={Clickme}>click me</button>
        </div>
    )
}

export default Hello;