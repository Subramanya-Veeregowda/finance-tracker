import FadeIn from "../animations/FadeIn";

export default function CategoryDominance({ title, data }) {
  const getTopCategory = (obj) => {
    let maxKey = "";
    let maxValue = 0;

    for (let key in obj) {
      if (obj[key] > maxValue) {
        maxValue = obj[key];
        maxKey = key;
      }
    }

    return { name: maxKey, value: maxValue };
  };

  const topExpense = getTopCategory(data.expense);
  const topIncome = getTopCategory(data.income);

  const emojiMap = {
    salary: "💼",
    business: "🏢",
    interests: "📈",
    groceries: "🛒",
    dining: "🍔",
    transport: "🚗",
    shopping: "🛍️",
    rent: "🏠",
    health: "🏥",
    entertainment: "🎮",
  };

  const monthlyData = {
  income: {
    salary: 250000,
    business: 40000,
    interests: 5000,
  },
  expense: {
    groceries: 8000,
    dining: 12500,
    transport: 4000,
    shopping: 7000,
  },
};

const yearlyData = {
  income: {
    salary: 3000000,
    business: 500000,
    interests: 80000,
  },
  expense: {
    groceries: 120000,
    dining: 180000,
    transport: 70000,
    shopping: 150000,
  },
}

  return (
    <FadeIn delay={0.4}><div className="w-full rounded-xl p-5 bg-yellow-300/40 dark:bg-yellow-300/40 backdrop-blur 
                    border border-white/10 shadow-lg hover:shadow-3xl
                    hover:scale-[1.02]">
       <FadeIn delay={0.4}><h3 className="text-lg font-semibold mb-4 text-center">{title}</h3></FadeIn>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span>
            Top Spending:
            <span className="ml-2">
              {emojiMap[topExpense.name] || "💸"} {topExpense.name}
            </span>
          </span>
          <span className="text-red-400">₹{topExpense.value}</span>
        </div>

        <div className="flex justify-between">
          <span>
            Top Income:
            <span className="ml-2">
              {emojiMap[topIncome.name] || "💰"} {topIncome.name}
            </span>
          </span>
          <span className="text-green-400">₹{topIncome.value}</span>
        </div>
      </div>
    </div></FadeIn>
  );
}