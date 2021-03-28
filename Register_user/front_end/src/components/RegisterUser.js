import React from 'react'

export default function RegisterUser() {
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
