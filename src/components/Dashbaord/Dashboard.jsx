
import LoanCompute from "../calculator/LoanCompute";
import "./Dashbaord.css";
import Dashboardcard from "./Dashboardcards/Dashboardcard";

const Dashbaord = () => {
  return (
    <div className=" dash-container">
  
          <div className="small-hero">
            <div className="inner-width promo_card">
              <h1>Welcome to EasyPay</h1>
              <span>Lorem ipsum dolor sit amet.</span>
              <button>Learn More</button>
            </div>
          </div>
       
        <Dashboardcard />
       <LoanCompute />
     
    </div>
  );
};

export default Dashbaord;
