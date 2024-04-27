import { Outlet } from "react-router-dom";
import './Pagelayout.css'
import Navbar from "../navigation/Navbar";

const Pagelayout = () => {
    return ( 
       <>
        <Navbar />
       
        <div className="outlet">
        
        <Outlet/>
        
        </div>
        {/* <Navbar /> */}
        </>
     );
}
 
export default Pagelayout;