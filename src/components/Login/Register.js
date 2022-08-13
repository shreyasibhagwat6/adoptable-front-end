import React from "react";

class Register extends React.Component {

    constructor(props) {
        super(props)

    }

    render(){
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
                        <input placeholder="Password"></input>
                    </div>
                    <div>
                        <label>Confirm Password: </label>
                        <input placeholder="Password"></input>
                    </div>
                    <button>Register</button>
                </form>
            </div>
        )
    }
}

export default Register;