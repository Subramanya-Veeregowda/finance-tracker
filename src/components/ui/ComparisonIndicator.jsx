export default function ComparisonIndicator() {
  const data = [
    { name: "Groceries", amount: 5000, change: 12 },
    { name: "Transport", amount: 2000, change: -5 },
    { name: "Dining", amount: 3000, change: 8 },
    { name: "Shopping", amount: 7000, change: -10 },
  ];

  return (
    <div className="min-w-[300px] flex-shrink-0 rounded-xl p-4 bg-orange-200/50 dark:bg-orange-400/60 shadow-lg
                    hover:shadow-3xl hover:scale-[1.02] backdrop-blur ">
      <h3 className="text-md font-semibold mb-3 text-center">
        Comparison Indicator
      </h3>

      <div className="space-y-2 font-bold text-sm">
        {data.map((item, i) => (
          <div key={i} className="flex justify-between">
            <span>{item.name}: ₹{item.amount}</span>
            <span
              className={`font-large font-bold ${
                item.change > 0 ? "text-green-400" : "text-red-400"
              }`}
            >
              {item.change > 0 ? "↑" : "↓"} {Math.abs(item.change)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}