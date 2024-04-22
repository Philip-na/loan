import React, { useState } from 'react';
import './Form.css'

const Form = () => {

const [formData, setFormData] = useState({
  fullName: '',
  idNumber: '',
  email: '',
  amount: ''
});


const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value
  });
};


const handleSubmit = (e) => {
  e.preventDefault();
  console.log('Form submitted:', formData);

 
};

  return (
    
<section className="container">
<div>
      <h2>Loan Application Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="idNumber">ID Number:</label>
          <input
            type="text"
            id="idNumber"
            name="idNumber"
            value={formData.idNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="amount">Amount to Borrow:</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
    </section>
    
    
  );
};

export default Form;
