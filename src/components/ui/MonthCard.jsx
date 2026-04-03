import React from "react";

export default function MonthCard() {
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

  const sum = (obj) =>
    Object.values(obj).reduce((a, b) => a + b, 0);

  return (
    <div className="rounded-xl p-4 bg-green-300/50 dark:bg-green-400/70 backdrop-blur border text-center border-white/10 hover:scale-[1.02] shadow-lg hover:shadow-3xl">
      
      <h2 className="text-lg font-semibold mb-3 text-center">Monthly Overview</h2>

        <div className="flex flex-row justify-between">
                  {/* INCOME */}
      <div className="mb-3">
        <p className="text-10px font-bold text-green-700 font-medium">
          Income: ₹{sum(data.income)}
        </p>
        <div className="text-xs text-gray-600 dark:text-black">
          {Object.entries(data.income).map(([k, v]) => (
            <p key={k}>{k}: ₹{v}</p>
          ))}
        </div>
      </div>

      {/* EXPENSE */}
      <div className="mb-3">
        <p className="text-10px  font-bold text-red-700 font-medium">
          Expense: ₹{sum(data.expenses)}
        </p>
        <div className="text-xs text-gray-600 dark:text-black">
          {Object.entries(data.expenses).map(([k, v]) => (
            <p key={k}>{k}: ₹{v}</p>
          ))}
        </div>
      </div>

      {/* INVESTMENT */}
      <div>
        <p className="text-10px  font-bold text-blue-700 font-medium">
          Investments: ₹{sum(data.investments)}
        </p>
        <div className="text-xs text-gray-600 dark:text-black">
          {Object.entries(data.investments).map(([k, v]) => (
            <p key={k}>{k}: ₹{v}</p>
          ))}
        </div>
      </div>
     </div>

    </div>
  );
}