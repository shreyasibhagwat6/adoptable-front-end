import React from "react";
import { Link } from "react-router-dom";

class Login extends React.Component {

    constructor(props) {
        super(props)

    }

    render(){
        return(
            <div>
                <div>Login</div>
                <form>
                    <div>
                        <label>Username: </label>
                        <input placeholder="Username"></input>
                    </div>
                    <div>
                        <label>Password: </label>
                        <input placeholder="Password"></input>
                    </div>
                    <button>Login</button>
                </form>
                <div>Not a member yet? <Link to={`/register`}>Register</Link></div>
            </div>
        )
    }
}

export default Login;