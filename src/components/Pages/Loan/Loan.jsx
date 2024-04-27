import LoanList from "./LoanList";
import './loan.css';

const Loan = () => {
  return (
    <div className=" dash-container">
      <div className="small-hero">
        <div className="inner-width promo_card">
          <h1>Welcome to EasyPay</h1>
          <span>Lorem ipsum dolor sit amet.</span>
          <button>Learn More</button>
        </div>
      </div>

      <LoanList />


    </div>
  );
};

export default Loan;
