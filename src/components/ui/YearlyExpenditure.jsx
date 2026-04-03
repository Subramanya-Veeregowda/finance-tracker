import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import FadeIn from "../animations/FadeIn";

export default function YearlyExpenditure({ data }) {
  return (
    <div className="flex flex-col justify-center items-center bg-yellow-300/70 dark:bg-yellow-300/40 backdrop-blur-xl 
                    border border-gray-200 dark:border-gray-800 rounded-xl p-4 shadow-md hover:shadow-xl transition-all
                    shadow-md hover:shadow-xl hover:scale-[1.02]">
      
      <FadeIn delay={1.8}><h3 className="text-xl font-bold mb-3 opacity-70 text-black dark:text-white">Yearly Expenditure</h3></FadeIn>

      <div className="h-[250px] w-full">
        <ResponsiveContainer>
          <FadeIn delay={1.8}><AreaChart data={data}>

            <defs>
              <linearGradient id="yearGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#c81515" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#e58080" stopOpacity={0.05} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.1} />

            <XAxis
              dataKey="year"
              tick={{ fill: "#888", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tick={{ fill: "#888", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="amount"
              stroke="#b70000"
              fill="url(#yearGradient)"
              strokeWidth={2}
            />
          </AreaChart></FadeIn>
        </ResponsiveContainer>
      </div>
    </div>
  );
}