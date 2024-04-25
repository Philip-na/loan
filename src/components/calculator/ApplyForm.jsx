import CustomModal from "../modal/CustomModal"

const ApplyForm = ({isOpen, onclose}) => {
  return (
    <CustomModal isOpen={isOpen} onClose={onclose}>
    <div className="modal-content">
      <h2>Loan Application</h2>
      <form action="">
        <div className="input">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div className="input">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div className="input">
          <label htmlFor="phone">Phone</label>
          <input type="text" id="phone" />
        </div>
        <div className="input">
          <label htmlFor="amount">Amount Requested</label>
          <input type="text" id="amount" />
        </div>
        <div className="input">
          <label htmlFor="duration">Duration</label>
          <input type="text" id="duration" />
        </div>
        <div className="input">
          <label htmlFor="reason">Reason</label>
          <textarea name="" id="reason" cols="2" rows="2"></textarea>
        </div>
        <div className="input">
          <button>Submit</button>
        </div>
      </form>
    </div>
  </CustomModal>
  )
}

export default ApplyForm