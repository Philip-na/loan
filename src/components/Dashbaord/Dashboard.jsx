import Cards from "../Features/Homedetails/cards/Card";
import Pagelayout from "../Pagelayout/Pagelayout";
import Sidebar from "../Sidebar/Sidebar";
import './Dashbaord.css';
import Dashboardcard from "./Dashboardcards/Dashboardcard";

const Dashbaord = () => {
    return ( 
        <div className="dash-container">
          <div className="sider">
           
          </div>
          <div className="content">
            <div className="head-content">
            <h1>Dashboard</h1>
            <div className="small-hero">
            <div className="promo_card">
            <h1>Welcome to EasyPay</h1>
            <span>Lorem ipsum dolor sit amet.</span>
            <button>Learn More</button>
          </div>
            </div>
            </div>
           <Dashboardcard/> 
          
          </div>
        </div>
     );
}
 
export default Dashbaord;