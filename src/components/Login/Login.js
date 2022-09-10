import { useRef, useState, useEffect, React , useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import './Login.scss';
import axios from 'axios';
import { click } from "@testing-library/user-event/dist/click";
import { UserContext } from '../../Context/UserContext';


const Login = () => {
    let history = useHistory();

    // const clickHandler = () => {
    //     history.push('/home');
    //     alert('Login successful');
    // }

    const { value, setValue } = useContext(UserContext);

    const [users, setUsers] = useState('');

    const submitUser = (event) => {
        event.preventDefault();

        const newUsers = {
            username: event.target.username.value,
            password: event.target.password.value
        }

        setUsers(newUsers);
    }

    console.log(users)

    useEffect(()=>{
        axios.post('http://localhost:5050/login', users)
            .then((response)=>{
                console.log(response.data[0].name);
                setValue(response.data[0].name);
            }).catch((error)=>{
                console.log(error)
            })
    }, [users]);

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
                        <button className="login__button">Login</button>
                    </div>
                </form>
                <div className="login__link">Not a member yet? <Link to={'/register'}>Register</Link></div>
            </div>
        )
}

export default Login;