import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; 

const Sidebar = () => {
    const [show, setShow] = useState(false);

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
                            <li><Link to="dashboard">Dashboard</Link></li>
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/loan">Loan</Link></li>
                            <li><Link to="/list">List</Link></li>
                        </ul>
                    </div>
                    <button>log out</button>
                </div>
            )}
        </div>
    );
};

export default Sidebar;
