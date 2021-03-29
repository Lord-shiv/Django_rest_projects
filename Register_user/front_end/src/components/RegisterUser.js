import React, { Component } from 'react'

export class RegisterUser extends Component {
    constructor() {
        super();
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            gender: '',
            phone: '',
            status: '',
            profile_pic: '',
            docs: '',
            salary: '',
            about: '',
            signup_confirmation: '',

        }
    }

    // input change
    changeHandler(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
        // console.log(this.state);
    }
    // submit
    submitForm() {
        fetch('http://127.0.0.1:8000/employee/', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(response => response.json())
            .then((data) => console.log(data));
        this.setState({
            first_name: '',
            last_name: '',
            email: '',
            gender: '',
            phone: '',
            status: '',
            profile_pic: '',
            docs: '',
            salary: '',
            about: '',
            signup_confirmation: '',
        });

    }
    render() {
        return (
            <div>
                <div className="wrapper">
                    <h3>ADD New User</h3>
                    <br></br>
                    {/* <div className="title">
                    Registration Form
                </div> */}
                    <div className="form">
                        <div className="inputfield">
                            <label>First Name</label>
                            <input type="text" value={this.state.first_name} name="first_name" onChange={this.changeHandler} className="input"></input>
                        </div>
                        <div className="inputfield">
                            <label>Last Name</label>
                            <input type="text" value={this.state.last_name} name="last_name" onChange={this.changeHandler} className="input"></input>
                        </div>
                        {/* <div className="inputfield">
                        <label>Password</label>
                        <input type="password" className="input"></input>
                    </div>
                    <div className="inputfield">
                        <label>Confirm Password</label>
                        <input type="password" className="input"></input>
                    </div> */}
                        <div className="inputfield gender">
                            <label>Gender</label>
                            <input type="radio" value={this.state.gender} onChange={this.changeHandler} name="gender" style={{ marginRight: "5px" }}></input>Male

                        <input type="radio" value={this.state.gender} onChange={this.changeHandler} name="gender" style={{ marginLeft: "18px", marginRight: "5px" }}></input>Female

                        <input type="radio" value={this.state.gender} onChange={this.changeHandler} name="gender" style={{ marginLeft: "18px", marginRight: "5px" }}></input>Other
                    </div>
                        <div className="inputfield">
                            <label>Email Address</label>
                            <input type="text" name="email" value={this.state.email} onChange={this.changeHandler} className="input"></input>
                        </div>
                        <div className="inputfield">
                            <label>Phone Number</label>
                            <input type="text" name="phone" value={this.state.phone} onChange={this.changeHandler} className="input"></input>
                        </div>
                        <div className="inputfield">
                            <label>Image</label>
                            <div className="image_me">
                                <input className="inputDocs" value={this.state.profile_pic} onChange={this.changeHandler} name="profile_pic" type="file" id="img" name="img" accept="image/*"></input>
                    Choose Image
                    </div>
                        </div>
                        <div className="inputfield">
                            <label>Docs Number</label>
                            <div className="image_me">
                                <input className="inputDocs" value={this.state.docs} onChange={this.changeHandler} name="docs" type="file"
                                    accept="application/pdf,application/msword,
  application/vnd.openxmlformats-officedocument.wordprocessingml.document"></input>
  Resume / CV *
                    </div>
                        </div>
                        <div className="inputfield">
                            <label>Select Profile</label>
                            <select className="custom_select" value={this.state.status} onChange={this.changeHandler} name="status">
                                <option value="Course">Frontend Developer</option>
                                <option value="BCA">Junior Python Developer</option>
                                <option value="BBA">Data Scientist</option>
                                <option value="B.Tech">Java Developer</option>
                                <option value="MBA">Python Developer</option>
                            </select>
                        </div>
                        <div className="inputfield" >
                            <label>About</label>
                            <textarea name="about" value={this.state.about} onChange={this.changeHandler} className="textarea"></textarea>
                        </div>
                        <div className="inputfield">
                            <label>Salary</label>
                            <input type="text" value={this.state.salary} onChange={this.changeHandler} name="salary" className="input"></input>
                        </div>
                        <div className="inputfield terms">
                            <label className="check">
                                <input onChange={this.changeHandler} value={this.state.signup_confirmation} type="checkbox"></input>
                                <span className="checkmark"></span>
                            </label>
                            <p>Agreed to terms and conditions</p>
                        </div>
                        <div className="inputfield">
                            <input type="submit" onClick={this.submitForm} value="Register" className="btn"></input>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RegisterUser