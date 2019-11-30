import React from "react";
import { Link } from "react-router-dom";

class Login extends React.Component {
    render() {
        return <div>
            <input type="text" />
            <input type="password" />
            <Link to="/list">Login</Link>
        </div>
    }
}

export default Login