const BASE_URL = "http://localhost:3001";

export const getTransactions = async () => {
  const res = await fetch("http://localhost:3001/transactions");
  return res.json();
};

export const getSummary = async () => {
  const res = await fetch("http://localhost:3001/summary");
  return res.json();
};