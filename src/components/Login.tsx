import React from "react";
import { Link } from "react-router-dom";

class Login extends React.Component {
    render() {
        return <div className="Login">
            <h1>Wikipedia Random Articles</h1>
            <input type="text" />
            <input type="password" />
            <Link to="/list">Login</Link>
        </div>
    }
}

export default Login
