import React, { useState } from "react";
import { GiMoneyStack } from "react-icons/gi";
import "./LoanCompute.css";
import ApplyForm from "./ApplyForm";

const LoanCompute = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loanAmount, setLoanAmount] = useState(0);
  const [loanDuration, setLoanDuration] = useState(6);

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const calculateMonthlyInterest = (annualRate) => {
    return (annualRate / 100) / 12; 
  };

  const calculateMonthlyRepayment = (amount, annualRate, duration) => {
    const monthlyInterest = calculateMonthlyInterest(annualRate);
    const numPayments = duration; 
    const loanAmount = amount;
    
    const monthlyRepayment = loanAmount * (monthlyInterest * Math.pow(1 + monthlyInterest, numPayments)) / (Math.pow(1 + monthlyInterest, numPayments) - 1);

    return monthlyRepayment.toFixed(2);
  };

  const handleAmountChange = (event) => {
    const amount = parseFloat(event.target.value) || 0;
    setLoanAmount(amount);
  };

  const handleDurationChange = (event) => {
    const duration = parseInt(event.target.value) || 0;
    setLoanDuration(duration);
  };

  return (
    <div className="inner-width loan-calc">
      <div className="loan-calc-left">
        <form className="loan-calc-form">
          <p>What is Your Loan Amount</p>
          <div className="input">
            <label htmlFor="amount">Amount Requested</label>
            <input
              type="text"
              id="amount"
              value={loanAmount}
              onChange={handleAmountChange}
            />
          </div>
          <div className="input">
            <label htmlFor="interest">Annual Interest Rate (%)</label>
            <input type="text" value={10} disabled id="interest" />
          </div>
          <div className="input">
            <label htmlFor="duration">Preferred Loan Duration (months)</label>
            <select id="duration" value={loanDuration} onChange={handleDurationChange}>
              <option value="6">6 months</option>
              <option value="12">12 months</option>
              <option value="18">18 months</option>
              <option value="24">24 months</option>
              <option value="36">36 months</option>
            </select>
          </div>
        </form>
      </div>
      <div className="loan-calc-right">
        <div className="icon">
          <GiMoneyStack />
        </div>
        <p>Your estimated monthly repayment will be</p>
        <div className="pay-per-month">
          UGX {calculateMonthlyRepayment(loanAmount, 10, loanDuration)}
        </div>
        <div className="loan-data">
          <span>Total Payback</span>
          <span>
            UGX {calculateMonthlyRepayment(loanAmount, 10, loanDuration) * loanDuration}
          </span>
        </div>
        <div className="loan-data">
          <span>Total Interest</span>
          <span>
            UGX {(calculateMonthlyRepayment(loanAmount, 10, loanDuration) * loanDuration) - loanAmount}
          </span>
        </div>
        <div className="apply">
          <button onClick={toggleModal}>Apply Now</button>
        </div>
      </div>
      <ApplyForm amt={loanAmount} isOpen={isOpen} onClose={toggleModal} />
    </div>
  );
};

export default LoanCompute;
