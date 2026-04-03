export const formatCurrency = (value, type) => {
  const formatted = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(value);

  if (type === "income") return `+${formatted}`;
  if (type === "expense") return `-${formatted}`;
  return formatted;
};