
import './Cards.css'
const Cards = ({loan,head}) => {
     

    return ( 
        <>
        <h1>{head}</h1>
        <div className="cards">
        
            {loan.map ((loans) =>(
             <div className="animated-card" key={loans.id}>
               <h1>{loans.title}</h1>
               <h2>{loans.intrest}</h2>
               <h3>{loans.period}</h3>
               
             </div>

            )) 
       
            }
       </div>
        </>
       

     );
}
 
export default Cards;