import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer, Area, AreaChart,} from "recharts";

const data = [
  { name: "Jan", value: 100 },
  { name: "Feb", value: 200 },
  { name: "Mar", value: 150 },
  { name: "Apr", value: 300 },
  { name: "May", value: 250 },
];

export default function CustomLineChart() {
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorGlow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
            </linearGradient>
          </defs>

          <XAxis dataKey="name" stroke="#aaa" />
          <Tooltip />

          <Area
            type="monotone"
            dataKey="value"
            stroke="#22c55e"
            fill="url(#colorGlow)"
            strokeWidth={3}
            dot={false}
            style={{
              filter: "drop-shadow(0px 0px 8px rgba(34,197,94,0.7))",
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}