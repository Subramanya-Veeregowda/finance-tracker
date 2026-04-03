import React from "react";

export default function YearCard() {
  const multiplier = 10;

  const data = {
    income: {
      business: 40000,
      salary: 120000,
      interests: 5000,
      others: 3000,
    },
    expenses: {
      groceries: 8000,
      transport: 4000,
      dining: 6000,
      shopping: 7000,
      travel: 5000,
      subscriptions: 2000,
      rent: 15000,
      health: 3000,
      entertainment: 2500,
    },
    investments: {
      insurance: 10000,
      stocks: 20000,
      mfs: 15000,
      funds: 5000,
    },
  };

  const multiply = (obj) =>
    Object.fromEntries(
      Object.entries(obj).map(([k, v]) => [k, v * multiplier])
    );

  const sum = (obj) =>
    Object.values(obj).reduce((a, b) => a + b, 0);

  const yearlyIncome = multiply(data.income);
  const yearlyExpense = multiply(data.expenses);
  const yearlyInvestment = multiply(data.investments);

  return (
    <div className="rounded-xl p-4 bg-yellow-300/50 dark:bg-yellow-400/70 backdrop-blur text-center border border-white/10 shadow-lg hover:shadow-3xl hover:scale-[1.02]">
      
      <h2 className="text-lg font-semibold mb-3">Yearly Overview</h2>

        <div className="flex flex-row justify-between">
                  {/* INCOME */}
      <div className="mb-3">
        <p className="text-10px  font-bold text-green-700 font-medium">
          Income: ₹{sum(yearlyIncome)}
        </p>
        <div className="text-xs text-gray-600 dark:text-black">
          {Object.entries(yearlyIncome).map(([k, v]) => (
            <p key={k}>{k}: ₹{v}</p>
          ))}
        </div>
      </div>

      {/* EXPENSE */}
      <div className="mb-3">
        <p className="text-10px  font-bolder text-red-700 font-medium">
          Expense: ₹{sum(yearlyExpense)}
        </p>
        <div className="text-xs text-gray-600 dark:text-black">
          {Object.entries(yearlyExpense).map(([k, v]) => (
            <p key={k}>{k}: ₹{v}</p>
          ))}
        </div>
      </div>

      {/* INVESTMENT */}
      <div>
        <p className="text-10px font-bold text-blue-700 font-medium">
          Investments: ₹{sum(yearlyInvestment)}
        </p>
        <div className="text-xs text-gray-600 dark:text-black">
          {Object.entries(yearlyInvestment).map(([k, v]) => (
            <p key={k}>{k}: ₹{v}</p>
          ))}
        </div>
      </div>
        </div>

    </div>
  );
}