import { useRef, useState, useEffect, React } from "react";
import { Link, useHistory } from "react-router-dom";
import './Login.scss';
import axios from 'axios';
import { click } from "@testing-library/user-event/dist/click";


const Login = () => {
    let history = useHistory();

    const clickHandler = () => {
        history.push('/home');
        alert('Login successful');
    }

    const [user, setUser] = useState('');

    const submitUser = (event) => {
        event.preventDefault();

        const newUser = {
            username: event.target.username.value,
            password: event.target.password.value
        }

        setUser(newUser);
    }

    console.log(user)

    useEffect(()=>{
        axios.post('http://localhost:5050/login', user)
            .then((response)=>{
                console.log(response);
                if(response) {
                    // const clickHandler = () => {
                    //         history.push('/home');
                    //         alert('Login successful');
                    //     }
                    clickHandler();
                } else {
                    alert('User not registered');
                }
            }).catch((error)=>{
                console.log(error.data)
            })
    }, [user]);

        return(
            <div className="login">
                <div className="login__header">Log in</div>
                <form onSubmit={submitUser}>
                    <div className="container">
                        <div className="login__cont">
                            <label className="login__label">Username </label>
                            <input name="username" className="login__input" type='text' placeholder="Username"></input>
                        </div>
                        <div className="login__cont">
                            <label className="login__label">Password </label>
                            <input name="password" className="login__input" type='password' placeholder="Password"></input>
                        </div>
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