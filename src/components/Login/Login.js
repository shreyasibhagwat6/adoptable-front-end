import React from "react";
import { Link, useHistory } from "react-router-dom";


const Login = () => {
    let history = useHistory();

        return(
            <div>
                <div>Login</div>
                <form>
                    <div>
                        <label>Username: </label>
                        <input type='text' placeholder="Username"></input>
                    </div>
                    <div>
                        <label>Password: </label>
                        <input type='password' placeholder="Password"></input>
                    </div>
                    <button onClick={()=> {
                        history.push('/home')
                    }}>Login</button>
                </form>
                <div>Not a member yet? <Link to={'/register'}>Register</Link></div>
            </div>
        )
}

export default Login;