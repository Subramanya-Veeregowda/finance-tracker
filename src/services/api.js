const BASE_URL = "https://finance-api-2qow.onrender.com/";

export const getTransactions = async () => {
  const res = await fetch("http://localhost:3001/transactions");
  return res.json();
};

export const getSummary = async () => {
  const res = await fetch("http://localhost:3001/summary");
  return res.json();
};