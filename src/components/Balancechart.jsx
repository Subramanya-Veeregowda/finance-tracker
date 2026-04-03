import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

import { motion } from "framer-motion";

export default function BalanceChart({ data }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl"
    >
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart data={data}>
          
          {/* 🔥 Gradient goes INSIDE chart */}
          <defs>
            <linearGradient id="colorGlow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
            </linearGradient>
          </defs>

          <XAxis dataKey="name" stroke="#aaa" />
          <Tooltip />

          {/* 🔥 Main glowing area */}
          <Area
            type="monotone"
            dataKey="value"
            stroke="#22c55e"
            strokeWidth={3}
            fill="url(#colorGlow)"
            dot={false}
            style={{
              filter: "drop-shadow(0px 0px 8px rgba(34,197,94,0.7))"
            }}
          />

        </AreaChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
