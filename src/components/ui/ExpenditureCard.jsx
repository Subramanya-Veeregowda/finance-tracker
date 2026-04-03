import { formatCurrency } from "../../services/formatCurrency";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import FadeIn from "../animations/FadeIn";

export default function Card({ title, value, data }) {
  return (
    <div className="flex flex-col items-center bg-red-100/40 hover:bg-red-200/70 dark:bg-red-900/20 hover:dark:bg-red-900/40 text-black backdrop-blur-xl 
                    dark:text-white p-4 rounded-xl shadow-sm border border-red-500 dark:border-red-900 hover:scale-[1.02]
                    dark:border-gray-800 shadow-lg hover:shadow-3xl ">
      <p className="items-center text-sm font-bold opacity-90 mb-1 text-black dark:text-white">{title}</p>
      <FadeIn delay={1.2}><h2 className="text-2xl font-extrabold tracking-wide text-red-700">{formatCurrency(value, "expense")}</h2></FadeIn>
          <div className="mt-2 h-[60px] w-full">
            {data?.length > 0 && (
            <ResponsiveContainer width="100%" height={60}>
          <LineChart data={data}>
              <defs>
                  <filter id="glow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                  <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                  </feMerge>
                  </filter>
               </defs>

              <Line
                 type="monotone"
                 dataKey="value"
                 stroke="#cc0000"
                 strokeWidth={3}
                 dot={false}
                 filter="url(#glow)"
                 />
              </LineChart>
            </ResponsiveContainer>
            )}
          </div>
    </div>
  );
}