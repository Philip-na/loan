import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission here
    };

    return ( 
        <div className="login-container">
            <div className="login-card">
                <div className="head">
                    <h1>Welcome back</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="input-fields">
                            <input
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={handleUsernameChange}
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                            <button className="btn" type="submit">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
 
export default Login;
