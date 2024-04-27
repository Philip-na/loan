const baseUrl = "http://127.0.0.1:8000/api";
// const baseUrl = "http://localhost:3000";

const fetachLoans = async () => {
  const response = await fetch(baseUrl + "/loans/");
  return response.json();
};

const fetchLoan = async (id) => {
  const response = await fetch(baseUrl + `/loans/${id}`);
  
  return response.json();
};

const createLoan = async (loan) => {
  const response = await fetch(baseUrl + "/loans/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loan),
  });
  return response.json();
};

const updateLoan = async (id, loan) => {
  const response = await fetch(baseUrl + `/loans/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loan),
  }); 
  return response.json();
};

const deleteLoan = async (id) => {
  const response = await fetch(baseUrl + `/${id}`, {
    method: "DELETE",
  });
  return response.json();
};

// login function
export const userlogin = async (user) => {
  const response = await fetch(baseUrl + "/login/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  return response.json();
};

// signup function
export const usersignup = async (user) => {
  const response = await fetch(baseUrl + "/auth/register/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  return response.json();
};


export {
    fetachLoans, createLoan,updateLoan, deleteLoan, fetchLoan
}