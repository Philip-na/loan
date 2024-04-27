import LoanCard from "./LoanCard";
import { fetachLoans } from "../../../api/Api";
import { useQuery } from "@tanstack/react-query";

const LoanList = ({s}) => {
  const user = JSON.parse(localStorage.getItem("user")) || null;
  const { data: loans, isLoading, error } = useQuery({
    queryFn: () => fetachLoans(),
    queryKey: ["loans"],
  });

if (isLoading) {
  return <p>Loading...</p>;
}

if (error) {
  return <p>Error: {error.message}</p>;
}

const filteredLoans = loans.filter((loan) => loan?.user?.id === user.id);

 
  return (
    <div className="inner-width loan-list">
      
        {filteredLoans?.map((loan) => (
            <LoanCard key={loan.id} loan={loan} />
            ))}
    </div>
  );
};

export default LoanList;
