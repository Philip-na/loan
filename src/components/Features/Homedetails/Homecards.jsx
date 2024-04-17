import React from 'react';
import './Homecards.css'
import Cards from './cards/cards';
import Button from './Form/Button';

const Homecards= () => {
   
    return (
        <div className="amount">
            <div className="home-top">
            <h1>Apply for our Quick loans available</h1>
            </div>
           <Cards/>
           <Button/>
            
        </div>
    );
};

export default Homecards;
