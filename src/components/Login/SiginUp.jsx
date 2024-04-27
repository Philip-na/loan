import  { useState } from 'react';
import './Login.css';
import { useMutation } from "@tanstack/react-query";
import {  usersignup } from '../../api/Api';
import { useNavigate } from 'react-router-dom';


const SiginUp = () => {
    // {
    //     "username": "",
    //     "password": "",
    //     "email": "",
    //     "date_of_birth": null,
    //     "account_number": ""
    // }
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [date_of_birth, setDate_of_birth] = useState('');
    const [account_number, setAccount_number] = useState('');

    const navigate = useNavigate();
    const { mutateAsync: signup } = useMutation({
        mutationFn: usersignup,
    
    });
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handleDate_of_birthChange = (e) => {
        setDate_of_birth(e.target.value);
    }
    const handleAccount_numberChange = (e) => {
        setAccount_number(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await signup({ username, password, email, date_of_birth, account_number });
            console.log("API response:", result);
         if(result.username){
    
             navigate('/login');
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
          <h1>Create Your Account Whith Group 1 Loan</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-fields">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={handleUsernameChange}
                required
              />
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={handlePasswordChange}
              />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                />
                <input
                    type="date"
                    placeholder="Date of Birth"
                    value={date_of_birth}
                    required
                    onChange={handleDate_of_birthChange}
                />
                <input
                    type="text"
                    placeholder="Account Number"
                    required
                    value={account_number}
                    onChange={handleAccount_numberChange}
                />

              <button className="btn" type="submit">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SiginUp;
