import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Cell, 
} from "recharts";
import FadeIn from "../animations/FadeIn";

const COLORS = ["#34d399", "#60a5fa", "#fbbf24", "#f87171", "#a78bfa"];

export default function MonthlyExpenditure({ data }) {
  return (
    <div className="flex flex-col justify-center items-center bg-green-300/70 dark:bg-green-600/40 backdrop-blur-xl
                    border border-gray-200 dark:border-gray-800 rounded-xl p-4 shadow-md hover:shadow-xl transition-all
                    shadow-md hover:shadow-xl hover:scale-[1.02]">
      
      <FadeIn delay={1.6}><h3 className="text-xl font-bold mb-3 opacity-70 text-black dark:text-white">Monthly Expenditure</h3></FadeIn>

      <div className="h-[250px] w-full">
        <ResponsiveContainer>
          <FadeIn delay={1.6}><BarChart data={data}>
            <defs>
  {COLORS.map((color, index) => (
    <linearGradient id={`barGrad-${index}`} key={index}>
      <stop offset="0%" stopColor={color} stopOpacity={1}/>
      <stop offset="100%" stopColor={color} stopOpacity={0.6}/>
    </linearGradient>
  ))}
</defs>
            {/* subtle grid */}
            <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.1} />

            <XAxis
              dataKey="month"
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

            <Bar dataKey="amount" radius={[6,6,0,0]}>
                {data.map((entry, index) => (
                      <Cell 
                            key={index} 
                            fill={COLORS[index % COLORS.length]} 
                       />
                  ))}
                </Bar>
            </BarChart></FadeIn>
        </ResponsiveContainer>
      </div>
    </div>
  );
}