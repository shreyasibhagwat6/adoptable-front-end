import { useRef, useState, useEffect, React , useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import './Login.scss';
import axios from 'axios';
import { click } from "@testing-library/user-event/dist/click";
import { UserContext } from '../../Context/UserContext';
import logoOne from '../../Assets/Logo/logoOne.png';


const Login = () => {
    let history = useHistory();

    // const clickHandler = () => {
    //     history.push('/home');
    //     alert('Login successful');
    // }

    const { value, setValue } = useContext(UserContext);
    const [users, setUsers] = useState('');
    const [loginStatus, setLoginStatus] = useState('');

    axios.defaults.withCredentials = true;

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
                // console.log(response.data.message);
                setLoginStatus(response.data.message);
            }).catch((error)=>{
                console.log(error)
            })
    }, [users]);

    useEffect(()=>{
        axios.get("http://localhost:5050/login")
        .then((response)=>{
          if (response.data.loggedIn == true) {
            console.log(response.data.user[0].username)
            setLoginStatus(response.data.user[0].username)
          }
        })
      }, [])

        return(
            <div className="login">
                <div className="login__container">
                    <img className="login__container--img" src={logoOne}></img>
                    <div className="login__container--text">
                        <h3>{loginStatus}</h3>
                        <h2 className="login__header">Log in</h2>
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
                </div>
            </div>
        )
}

export default Login;