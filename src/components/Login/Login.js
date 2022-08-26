import React from "react";
import { Link, useHistory } from "react-router-dom";
import './Login.scss';


const Login = () => {
    let history = useHistory();

    const clickHandler = () => {
        history.push('/home');
        alert('Login successful');
    }

        return(
            <div className="login">
                <div className="login__header">Log in</div>
                <form>
                    <div className="login__cont">
                        <label className="login__label">Username </label>
                        <input className="login__input" type='text' placeholder="Username"></input>
                    </div>
                    <div className="login__cont">
                        <label className="login__label">Password </label>
                        <input className="login__input" type='password' placeholder="Password"></input>
                    </div>
                    <div className="container">
                        <button className="login__button" onClick={clickHandler}>Login</button>
                    </div>
                </form>
                <div className="login__link">Not a member yet? <Link to={'/register'}>Register</Link></div>
            </div>
        )
}

export default Login;