export default function BudgetVsActual() {
  const budget = 20000;
  const spent = 24000;

  const isOver = spent > budget;

  return (
    <div className="min-w-[300px] flex-shrink-0 rounded-xl p-4 
                    bg-pink-200/50 dark:bg-pink-400/60 shadow-lg
                    hover:shadow-3xl hover:scale-[1.02] backdrop-blur text-center">
      <h3 className="text-md font-semibold mb-3">
        Budget vs Actual
      </h3>

      <p className="text-sm">Budget: ₹{budget}</p>
      <p className="text-sm mb-2">Spent: ₹{spent}</p>

      <p
        className={`font-semibold ${
          isOver ? "text-red-400" : "text-green-400"
        }`}
      >
        {isOver ? "❌ Over Budget" : "✅ Under Control"}
      </p>
    </div>
  );
}