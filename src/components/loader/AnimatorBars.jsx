const bars = [40, 80, 30, 100, 60];

export default function AnimatedBars() {
  return (
    <div className="flex items-end gap-2 h-32">
      {bars.map((h, i) => (
        <div
          key={i}
          className="w-4 bg-gradient-to-t from-emerald-400 via-blue-500 to-purple-500 rounded animate-pulse"
          style={{
            height: `${h}%`,
            animationDelay: `${i * 0.1}s`,
          }}
        />
      ))}
    </div>
  );
}