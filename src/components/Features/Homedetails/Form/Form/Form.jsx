import React, { useState } from 'react';
import './Form.css'

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    birthDate: '',
    gender: '',
    address: '',
    city: '',
    country: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    
<section className="container">
      <header>Registration Form</header>
      <form className="form" onSubmit={handleSubmit}>
          <div className="input-box">
              <label>Full Name</label>
              <input 
                required
                placeholder="Enter full name"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />
          </div>
          
          <button type="submit">Submit</button>
      </form>
    </section>
    
    
  );
};

export default Form;
