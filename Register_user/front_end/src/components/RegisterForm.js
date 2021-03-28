import React, { Component } from 'react'

export class RegisterForm extends Component {
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
                <div className="RegiForm card shadow1">
                    <h2>New User</h2>
                    <br></br>
                    <input id="c1" className="input" value={this.state.username} type="text" placeholder="first name" onChange={this.usernameHandler} ></input>
                    <input id="c2" className="input" value={this.state.password} type="text" placeholder="last name" onChange={this.passwordHandler} ></input>
                    <label for="Gender">Gender</label>
                    <div class="gender">
                        <input type="radio" value="Male" name="gender"></input>Male
                        <input type="radio" value="Female" name="gender"></input>Female
                        <input type="radio" value="Other" name="gender"></input>Other
                    </div>
                    <div>
                        <label>Select image</label>
                        <div class="image_me">
                            <input className="inputDocs" type="file" id="img" name="img" accept="image/*"></input>
                    Choose Images
                    </div>
                    </div>

                    <label>Upload Resume</label>
                    <div class="image_me">
                        <input className="inputDocs" name="Upload Saved Replay" type="file"
                            accept="application/pdf,application/msword,
  application/vnd.openxmlformats-officedocument.wordprocessingml.document"></input>
  Choose File
                    </div>
                    <div>
                        <br></br>
                        <label>Select Course :</label>
                        <select className="inputLable">
                            <option value="Course">Course</option>
                            <option value="BCA">BCA</option>
                            <option value="BBA">BBA</option>
                            <option value="B.Tech">B.Tech</option>
                            <option value="MBA">MBA</option>
                            <option value="MCA">MCA</option>
                            <option value="M.Tech">M.Tech</option>
                        </select>
                    </div>
                    <label>Phone</label>
                    <input id="c4" className="input" type="text" name="phone" placeholder="phone no" size="10" onChange={this.passwordHandler}></input>
                    <br></br>
                    <label>Salary</label>
                    <input id="c4" className="input" value={this.state.password} type="text" placeholder="00.00 Rs" onChange={this.passwordHandler} ></input>
                    <br></br>
                    <label>Email </label>
                    <input id="c4" className="input" value={this.state.password} type="email" placeholder="your@gmail.com" onChange={this.passwordHandler} ></input>
                    <label>About</label>
                    <br></br>
                    <textarea className="inputarea" onChange={this.passwordHandler}> </textarea>
                    <br></br>
                    <button type="submit" className="btno">Submit</button>
                </div>
            </div >
        )
    }
}

export default RegisterForm
