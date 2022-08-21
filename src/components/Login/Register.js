import React from "react";
import { Link, useHistory } from "react-router-dom";


const Register = () => {

    let history = useHistory();
                
        return(
            <div>
                <div>Register</div>
                <form>
                    <div>
                        <label>Full Name: </label>
                        <input placeholder="Full Name"></input>
                    </div>
                    <div>
                        <label>E-mail: </label>
                        <input placeholder="E-mail"></input>
                    </div>
                    <div>
                        <label>Username: </label>
                        <input placeholder="Username"></input>
                    </div>
                    <div>
                        <label>Password: </label>
                        <input type='password' placeholder="Password"></input>
                    </div>
                    <div>
                        <label>Confirm Password: </label>
                        <input type='password' placeholder="Password"></input>
                    </div>
                    <button onClick={()=>{
                        history.push('/')
                    }}>Register</button>
                </form>
            </div>
        )
    }

export default Register;