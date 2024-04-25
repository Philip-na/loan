import { GiMoneyStack } from "react-icons/gi";
import "./LoanCompute.css";
import CustomModal from "../modal/CustomModal";
import ApplyForm from "./ApplyForm";
import { useState } from "react";

const LoanCompute = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toglemodle = ()=>{
        setIsOpen(prev => !prev);
    }
  return (
    <div className="inner-width loan-calc">
      <div className="loan-calc-left">
        <form className="loan-calc-form">
          <p>What is Your Loan Amount</p>
          <div className="input">
            <label htmlFor="amount">Amount Requested</label>
            <input type="text" id="ammout" />
          </div>

          <div className="input">
            <label htmlFor="intrest"> Intrest </label>
            <input type="text" value={10} disabled id="intrest" />
          </div>
          <div className="input">
            <label htmlFor="duration">Preffered Loan Duration</label>
            <select name="" id="duration">
              <option value="0">0</option>
              <option value="6">6</option>
              <option value="12">12</option>
              <option value="18">18</option>
              <option value="24">24</option>
            </select>
          </div>
        </form>
      </div>
      <div className="loan-calc-right">
        <div className="icon">
          <GiMoneyStack />
        </div>
        <p>Your estimated monthly repayment will be</p>
        <div className="pay-per-mouth">UGX 0.0</div>

        <div className="loan-data">
          <span>Total PayBack </span>
          <span>0</span>
        </div>
        <div className="loan-data">
          <span>Total intrest </span>
          <span>0</span>
        </div>

        <div className="aplly">
            <button onClick={toglemodle} >Apply Now</button>
        </div>
      </div>

      <ApplyForm isOpen={isOpen} onclose ={toglemodle}/>
    </div>
  );
};

export default LoanCompute;
