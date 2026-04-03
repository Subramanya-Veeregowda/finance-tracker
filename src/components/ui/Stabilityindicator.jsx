import FadeIn from "../animations/FadeIn";

export default function StabilityIndicator({ income, expense }) {
  const percentage = Math.min((expense / income) * 100, 100);

  const getStatus = () => {
    if (expense > income) return "danger";
    if (percentage > 75) return "warning";
    return "good";
  };

  const status = getStatus();

  const statusConfig = {
    good: {
      color: "bg-green-500",
      text: "Healthy 👍",
    },
    warning: {
      color: "bg-yellow-400",
      text: "Be careful ⚠️",
    },
    danger: {
      color: "bg-red-500",
      text: "Over budget ❌",
    },
  };

  return (
    <div className="w-full md:w-[70%] mx-auto h-auto rounded-xl p-5 bg-green-300/80 
                   dark:bg-green-700/60 backdrop-blur border border-white/10 hover:scale-[1.02]
                   shadow-lg hover:shadow-3xl">
      
      <FadeIn delay={0.8}><h3 className="text-lg font-semibold mb-4 text-center">
        Financial Stability
      </h3></FadeIn>

      {/* Numbers */}
      <div className="flex justify-between text-sm mb-2">
        <span>Income: ₹{income}</span>
        <span>Expense: ₹{expense}</span>
      </div>

      {/* Progress Bar */}
       <FadeIn delay={0.8}><div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
        <div
          className={`${statusConfig[status].color} h-full transition-all duration-500`}
          style={{ width: `${percentage}%` }}
        />
      </div></FadeIn>

      {/* Status */}
      <div className="text-center mt-3 text-sm">
        {statusConfig[status].text} ({percentage.toFixed(0)}%)
      </div>
    </div>
  );
}