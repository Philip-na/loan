import { calculateMonthlyRepayment} from "../../../assets/helper"

const LoanCard = ({loan}) => {
  return (
    <div className="loan">
    <div className="loan-title">
      <h2>Loan UGX {loan?.amount}</h2>
      <p>Loan Account {loan?.user?.account_number}</p>
    </div>
    <div className="loan-details">
      <span>Start Date</span>
      <span>{loan?.approved_date}</span>
    </div>
    {/* <div className="loan-details">
      <span>End Date</span>
      <span>29/09/2022</span>
    </div> */}
    <div className="loan-details">
      <span>Interest Rate</span>
      <span>10%</span>
    </div>
    <div className="loan-details">
      <span>Loan Status</span>
      <span>{loan.status}</span>
    </div>

    <div className="loan-details">
      <span>payback per Month</span>
      <span>{calculateMonthlyRepayment(loan?.amount, 10, loan?.duration_months)}</span>
    </div>
  </div>
  )
}

export default LoanCard