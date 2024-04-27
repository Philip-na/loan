import React from 'react';
import './Card.css'
import { useQuery } from '@tanstack/react-query';
import { fetachLoans } from '../../../api/Api';

const Dashboardcard = () => {
  
  const user = JSON.parse(localStorage.getItem("user")) || null;
  const { data: loans, isLoading, error } = useQuery({
    queryFn: () => fetachLoans(),
    queryKey: ["loansc"],
  });
  if (isLoading) {
    return <p>Loading...</p>;
  }
  
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  const filteredLoans = loans.filter((loan) => loan?.user?.id === user.id);

  // chenge the amount to int

  const totalAmountBorrowed = filteredLoans.reduce((acc, loan) => acc + parseInt(loan.amount), 0);
  const loanCount = filteredLoans.length;
  const completedLoan = filteredLoans.filter((loan)=>loan?.status === "completed");
  const cstatus = completedLoan.length > 2 ? "GOOD": "VERY LOW";


  const cardData = [
    { title: 'Your Credit Status', value: cstatus },
    { title: 'Total Number of Loan', value: loanCount },
    { title: 'Total Amount Borrowed', value: totalAmountBorrowed }
  ];

  return (
    <div className="inner-width loan-company-cards">
      {cardData.map((data, index) => (
        <div key={index} className="card">
          <h2>{data.title}</h2>
          <p>{data.value.toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboardcard;
