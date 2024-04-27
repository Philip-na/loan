import  { useState } from 'react';
import './Login.css';
import { useMutation } from "@tanstack/react-query";
import { userlogin } from '../../api/Api';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const { mutateAsync: loginuser } = useMutation({
        mutationFn: userlogin,
    
    });


    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await loginuser({ username, password });
            console.log("API response:", result);
         if(result.id){
             localStorage.setItem('user', JSON.stringify(result));
             navigate('/');
             return;
             
            }else{
                throw new Error("Invalid login credentials");

            }
        }
        catch (error) {
            console.error("Error submitting form:", error);
        }
    }
    return ( 
        <div className="login-container">
            <div className="login-card">
                <div className="head">
                    <h1>Welcome back</h1>
                    <form onSubmit={handleSubmit} >
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
                            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
 
export default Login;
