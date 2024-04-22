import { useState } from 'react';
import Card from './Card'



const Cards = () => {

   const[loan, setLoan]= useState(
    [{title:'Amount', intrest:1200, period:'In 2 weeks', id:1 },
    {title:'Amount', intrest:1250, period:'In 3 weeks', id:2},
    {title:'Amount', intrest:1260, period:'In 4 weeks' , id:3},
    {title:'Amount', intrest:1270, period:'In 4 weeks',id:4 }     
]
   );


    return ( 
        <div className="card-section">

        <Card loan={loan} head="Money"/>
            
        </div>

            
        
        
     );
}
 
export default Cards;