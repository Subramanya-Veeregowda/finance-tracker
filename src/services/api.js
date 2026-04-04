const BASE_URL = "https://finance-api-2qow.onrender.com/";

export const getTransactions = async () => {
  const res = await fetch(`${BASE_URL}/transactions`);
  return res.json();
};

export const getSummary = async () => {
  const res = await fetch(`${BASE_URL}/summary`);
  return res.json();
};