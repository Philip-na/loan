import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import './Pagelayout.css'
import Navbar from "../navigation/Navbar";

const Pagelayout = () => {
    return ( 
       <>
        <Navbar />
        <div className="outlet">
        
        <Outlet/>
        
        </div></>
     );
}
 
export default Pagelayout;