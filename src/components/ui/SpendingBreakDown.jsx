import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import FadeIn from "../animations/FadeIn";

const COLORS = [
  "#158d41", // green
  "#0e65f1", // blue
  "#fc9f00", // amber
  "#f50d0d", // red
  "#8d18fa", // purple
  "#06b6d4", // cyan
];

export default function SpendingBreakdown({ data }) {
  return (
    <div className="flex flex-col items-center bg-blue-300/70 dark:bg-blue-600/40 backdrop-blur-xl 
    border border-gray-200 dark:border-gray-800 hover:scale-[1.02]
    rounded-xl p-4 shadow-md hover:shadow-xl transition-all">

      <FadeIn delay={1.4}><h3 className="text-xl font-bold text-blue-400 mb-3 opacity-70">
        Spending Breakdown
      </h3></FadeIn>

      <div className="h-[220px] w-full">
        <ResponsiveContainer>
          <FadeIn delay={1.4}><PieChart>
            <defs>
                <filter id="pieGlow">
                 <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                 <feMerge>
                 <feMergeNode in="coloredBlur" />
                 <feMergeNode in="SourceGraphic" />
                 </feMerge>
                </filter>
                    {COLORS.map((color, index) => (
                      <linearGradient
                          key={index}
                          id={`grad-${index}`}
                          x1="0"
                          y1="0"
                          x2="1"
                          y2="1"
                      >
                     <stop offset="0%" stopColor={color} stopOpacity={1} />
                     <stop offset="100%" stopColor={color} stopOpacity={0.6} />
                </linearGradient>
                ))}
            </defs>
            <Pie
              data={data}
              innerRadius={60}
              outerRadius={90}
              paddingAngle={3}
              dataKey="value"
              filter="url(#pieGlow)"
            >
 
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={`url(#grad-${index})`}
                  stroke="#00"
                  strokeWidth={1.5}
                />
              ))}
            </Pie>
          </PieChart></FadeIn>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
       <FadeIn delay={1.4}><div className="flex flex-wrap overflow-x-auto scroll-hide gap-4 mt-3 text-xs">
        {data.map((item, i) => (
          <div key={i} className="flex items-center gap-1">
            <div
              className="w-2 h-2 rounded-full"
              style={{ background: COLORS[i % COLORS.length] }}
            />
            {item.name}
          </div>
        ))}
      </div></FadeIn>
    </div>
  );
}