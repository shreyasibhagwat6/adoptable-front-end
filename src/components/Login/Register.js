import React from "react";
import { Link, useHistory } from "react-router-dom";
import './Register.scss';


const Register = () => {

    let history = useHistory();
                
        return(
            <div className="register">
                <div className="register__header">Register</div>
                <form>
                    <div>
                        <label className="register__label">Name: </label>
                        <input className="register__input" placeholder="Full Name"></input>
                    </div>
                    <div>
                        <label className="register__label">E-mail: </label>
                        <input className="register__input" placeholder="E-mail"></input>
                    </div>
                    <div>
                        <label className="register__label">Username: </label>
                        <input className="register__input" placeholder="Username"></input>
                    </div>
                    <div>
                        <label className="register__label">Password: </label>
                        <input className="register__input" type='password' placeholder="Password"></input>
                    </div>
                    <div>
                        <label className="register__label">Confirm Password: </label>
                        <input className="register__input" type='password' placeholder="Password"></input>
                    </div>
                    <div className="container">
                        <button className="register__button" onClick={()=>{
                            history.push('/')
                        }}>Register</button>
                    </div>
                </form>
            </div>
        )
    }

export default Register;