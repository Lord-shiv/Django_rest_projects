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

        }
    }
    render() {
        return (
            <div>
                <div class="wrapper">
                    <h3>ADD New User</h3>
                    <br></br>
                    {/* <div class="title">
                    Registration Form
                </div> */}
                    <div class="form">
                        <div class="inputfield">
                            <label>First Name</label>
                            <input type="text" class="input"></input>
                        </div>
                        <div class="inputfield">
                            <label>Last Name</label>
                            <input type="text" class="input"></input>
                        </div>
                        {/* <div class="inputfield">
                        <label>Password</label>
                        <input type="password" class="input"></input>
                    </div>
                    <div class="inputfield">
                        <label>Confirm Password</label>
                        <input type="password" class="input"></input>
                    </div> */}
                        <div class="inputfield gender">
                            <label>Gender</label>
                            <input type="radio" value="Male" name="gender" style={{ marginRight: "5px" }}></input>Male

                        <input type="radio" value="Female" name="gender" style={{ marginLeft: "18px", marginRight: "5px" }}></input>Female

                        <input type="radio" value="Other" name="gender" style={{ marginLeft: "18px", marginRight: "5px" }}></input>Other
                    </div>
                        <div class="inputfield">
                            <label>Email Address</label>
                            <input type="text" class="input"></input>
                        </div>
                        <div class="inputfield">
                            <label>Phone Number</label>
                            <input type="text" class="input"></input>
                        </div>
                        <div className="inputfield">
                            <label>Image</label>
                            <div class="image_me">
                                <input className="inputDocs" type="file" id="img" name="img" accept="image/*"></input>
                    Choose Image
                    </div>
                        </div>
                        <div className="inputfield">
                            <label>Docs Number</label>
                            <div class="image_me">
                                <input className="inputDocs" name="Upload Saved Replay" type="file"
                                    accept="application/pdf,application/msword,
  application/vnd.openxmlformats-officedocument.wordprocessingml.document"></input>
  Resume / CV *
                    </div>
                        </div>
                        <div class="inputfield">
                            <label>Select Profile</label>
                            <select className="custom_select">
                                <option value="Course">Course</option>
                                <option value="BCA">BCA</option>
                                <option value="BBA">BBA</option>
                                <option value="B.Tech">B.Tech</option>
                                <option value="MBA">MBA</option>
                                <option value="MCA">MCA</option>
                                <option value="M.Tech">M.Tech</option>
                            </select>
                        </div>
                        <div class="inputfield">
                            <label>About</label>
                            <textarea class="textarea"></textarea>
                        </div>
                        <div class="inputfield">
                            <label>Salary</label>
                            <input type="text" class="input"></input>
                        </div>
                        <div class="inputfield terms">
                            <label class="check">
                                <input type="checkbox"></input>
                                <span class="checkmark"></span>
                            </label>
                            <p>Agreed to terms and conditions</p>
                        </div>
                        <div class="inputfield">
                            <input type="submit" value="Register" class="btn"></input>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RegisterUser