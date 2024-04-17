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
    // Handle form submission here, you can access form data from the formData state.
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
          <div className="column">
              <div className="input-box">
                <label>Phone Number</label>
                <input 
                  required
                  placeholder="Enter phone number"
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="input-box">
                <label>Birth Date</label>
                <input 
                  required
                  placeholder="Enter birth date"
                  type="date"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleChange}
                />
              </div>
          </div>
          <div className="gender-box">
            <label>Gender</label>
            <div className="gender-option">
              <div className="gender">
                <input 
                  checked={formData.gender === 'male'}
                  name="gender"
                  id="check-male"
                  type="radio"
                  value="male"
                  onChange={handleChange}
                />
                <label htmlFor="check-male">Male</label>
              </div>
              <div className="gender">
                <input 
                  checked={formData.gender === 'female'}
                  name="gender"
                  id="check-female"
                  type="radio"
                  value="female"
                  onChange={handleChange}
                />
                <label htmlFor="check-female">Female</label>
              </div>
              <div className="gender">
                <input 
                  checked={formData.gender === 'preferNotToSay'}
                  name="gender"
                  id="check-other"
                  type="radio"
                  value="preferNotToSay"
                  onChange={handleChange}
                />
                <label htmlFor="check-other">Prefer not to say</label>
              </div>
            </div>
          </div>
          <div className="input-box address">
            <label>Address</label>
            <input 
              required
              placeholder="Enter street address"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
            <div className="column">
              <div className="select-box">
                <select
                  value={formData.country}
                  name="country"
                  onChange={handleChange}
                >
                  <option hidden>Country</option>
                  <option>USA</option>
                  <option>UK</option>
                  <option>Germany</option>
                  <option>Japan</option>
                </select>
              </div>
              <input 
                required
                placeholder="Enter your city"
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
            </div>
          </div>
          <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Form;
