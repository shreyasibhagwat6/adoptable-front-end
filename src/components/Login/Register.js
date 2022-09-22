import { useRef, useState, useEffect, React } from "react";
import { Link, useHistory } from "react-router-dom";
import './Register.scss';
import axios from 'axios';


const Register = () => {

    let history = useHistory();

    const [usenameReg, setusernameReg] = useState('');
    const [passwordReg, setpasswordReg] = useState('');
    const [user, setUser] = useState('');

    const submitUser = (event) => {
        event.preventDefault();
        
        const newUser = {
            name: event.target.name.value,
            email:event.target.email.value,
            username: event.target.username.value,
            password: event.target.password.value
        }

        setUser(newUser);
        console.log(user)
    }
        console.log(user);

useEffect(()=>{
    axios.post('http://localhost:5050/users', user)
        .then((response)=>{
            console.log(response)
        }).catch((error)=>{
            console.log(error.data)
        })
}, [user]);

console.log(user)

if(user != '') {
    history.push('/');
}
                 
        return(
            <div className="register">
                <div className="register__header">Register</div>
                <form onSubmit={submitUser}>
                    <div>
                        <label className="register__label">Name: </label>
                        <input name="name" className="register__input" placeholder="Full Name"></input>
                    </div>
                    <div>
                        <label className="register__label">E-mail: </label>
                        <input name="email" className="register__input" placeholder="E-mail"></input>
                    </div>
                    <div>
                        <label className="register__label">Username: </label>
                        <input name="username" className="register__input" placeholder="Username"></input>
                    </div>
                    <div>
                        <label className="register__label">Password: </label>
                        <input name="password" className="register__input" type='password' placeholder="Password"></input>
                    </div>
                    <div>
                        <label className="register__label">Confirm Password: </label>
                        <input className="register__input" type='password' placeholder="Password"></input>
                    </div>
                    <div className="container">
                        <button type="submit" className="register__button">Register</button>
                    </div>
                </form>
            </div>
        )
    }

export default Register;