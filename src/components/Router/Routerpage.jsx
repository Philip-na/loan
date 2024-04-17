import React from 'react';
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Dashboard from '../Dashbaord/Dashbaord';
import Home from '../Pages/Home/Home';
import Loan from '../Pages/Loan/Loan';
import Sidebar from '../Sidebar/Sidebar';
import Dashbaord from '../Dashbaord/Dashbaord';
import Pagelayout from '../Pagelayout/Pagelayout';

const Routerpage = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route index component={<Pagelayout/>} /> 
                <Route path="/home" component={<Home/>} />
                <Route path="/loan" component={<></>} />
            </Routes>
        </BrowserRouter>
     );
}
 
export default Routerpage;
