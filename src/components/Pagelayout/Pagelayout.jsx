import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import './Pagelayout.css'

const Pagelayout = () => {
    return ( 
        <div className="outlet">
        <Sidebar/>
        <Outlet/>
        
        </div>
     );
}
 
export default Pagelayout;