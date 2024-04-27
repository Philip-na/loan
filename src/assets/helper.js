

export const calculateMonthlyInterest = (annualRate) => {
  return annualRate / 100 / 12;
};

export const calculateMonthlyRepayment = (amount, annualRate, duration) => {
  const monthlyInterest = calculateMonthlyInterest(annualRate);
  const numPayments = duration;
  const loanAmount = amount;

  const monthlyRepayment =
    (loanAmount *
      (monthlyInterest * Math.pow(1 + monthlyInterest, numPayments))) /
    (Math.pow(1 + monthlyInterest, numPayments) - 1);

  return monthlyRepayment.toFixed(2);
};
