import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; 

const Sidebar = () => {
    const [show, setShow] = useState(true);

    const handleToggle = () => {
        setShow(!show);
    };

    return (
        <div className="sidebar">
            <span onClick={handleToggle}></span>
            
            {show && (
                <div className='side'>
                    <div className="top">
                        <h1>Dashbaord</h1>
                    </div>
                    <div className="links">
                        <ul>
                        <Link to="/"> <li>Dashboard</li></Link>
                        <Link to="/home">  <li>Home</li></Link>
                        <Link to="/loan"><li>Loan</li></Link>
                        <Link to="/list"> <li>List</li></Link>
                        </ul>
                    </div>
                    <button>log out</button>
                </div>
            )}
        </div>
    );
};

export default Sidebar;
