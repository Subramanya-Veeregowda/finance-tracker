export default function WeeklyTrendIndicator() {
  const weeks = [
    { week: "Week 1", value: 12000, trend: "none" },
    { week: "Week 2", value: 15000, trend: "up" },
    { week: "Week 3", value: 9000, trend: "down" },
    { week: "Week 4", value: 18000, trend: "strong-up" },
  ];

  const getArrow = (trend) => {
    if (trend === "up") return "↑";
    if (trend === "down") return "↓";
    if (trend === "strong-up") return "↑↑";
    return "";
  };

  const getColor = (trend) => {
    if (trend === "down") return "text-red-400";
    return "text-green-400";
  };

  return (
    <div className="min-w-[300px] flex-shrink-0 rounded-xl p-4 bg-purple-200/50 dark:bg-purple-400/60 shadow-lg hover:shadow-3xl 
                    hover:scale-[1.02] backdrop-blur ">
      <h3 className="text-md font-semibold mb-3 text-center">
        Weekly Trend
      </h3>

      <div className="space-y-2 text-sm font-bold text-center">
        {weeks.map((w, i) => (
          <div key={i}>
            {w.week}: ₹{w.value}{" "}
            <span className={`ml-1 ${getColor(w.trend)}`}>
              {getArrow(w.trend)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}