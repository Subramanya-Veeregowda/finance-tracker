export default function WeekCard({ title }) {
  return (
    <div className="min-w-[260px] flex-shrink-0 rounded-xl p-4 bg-gray-400/20 backdrop-blur text-center shadow-lg hover:shadow-3xl hover:scale-[1.02]">
      
      <h3 className="text-sm text-black dark:text-white mb-2">{title}</h3>

      <p className="text-green-700 text-sm">Income: ₹42000</p>
      <p className="text-red-700 text-sm">Expense: ₹21000</p>
      <p className="text-blue-700 text-sm">Savings: ₹21000</p>

    </div>
  );
}