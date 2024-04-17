import React from 'react';
import './Card.css'
const Dashboardcard = () => {
  // Dummy data (replace with actual data from your backend or state management)
  const cardData = [
    { title: 'Total Account Balance', value: 1000000 },
    { title: 'Total Number of Clients', value: 500 },
    { title: 'Total Amount Borrowed', value: 750000 }
  ];

  return (
    <div className="loan-company-cards">
      {cardData.map((data, index) => (
        <div key={index} className="card">
          <h2>{data.title}</h2>
          <p>${data.value.toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboardcard;
