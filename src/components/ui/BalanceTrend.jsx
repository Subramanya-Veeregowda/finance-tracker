import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { CartesianGrid } from "recharts";
import FadeIn from "../animations/FadeIn";

export default function BalanceTrend({ data }) {
  return (
    <div className="flex flex-col items-center bg-purple-300/70 dark:bg-purple-600/40 backdrop-blur-xl 
    border border-gray-200 dark:border-gray-800 hover:scale-[1.02]
    rounded-xl p-4 shadow-md hover:shadow-xl transition-all">

      <FadeIn delay={1.2}><h3 className="text-xl text-purple-600 font-bold items-center mb-3 opacity-70">Balance Trend</h3></FadeIn>

      <div className="h-[250px] w-full">
        <ResponsiveContainer width="100%" height="100%">
           <FadeIn delay={1.2}><LineChart data={data}>

            {/* Glow filter */}
            <defs>
                 <linearGradient id="balanceGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#ef4444" />
                    <stop offset="50%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#22c55e" />
                </linearGradient>
                <filter id="balanceGlow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                     <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                     </feMerge>
                </filter>
            </defs>

            <XAxis
                 dataKey="name"
                 interval={Math.floor(data.length/5)}
                 tick={{ fill: "#8d8a90", fontSize: 15 }}
                 axisLine={false}
                 tickLine={false}
            />

            <YAxis
                 tick={{ fill: "#8d8a90", fontSize: 12 }}
                 axisLine={false}
                 tickLine={false}
            />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="value"
              stroke="#962ae4"
              strokeWidth={3}
              dot={false}
              filter="url(#balanceGlow)"
            />
          </LineChart></FadeIn>
        </ResponsiveContainer>
      </div>
    </div>
  );
}