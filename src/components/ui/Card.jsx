export default function Card({ children }) {
  return (
    <div className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800">
      {children}
    </div>
  );
}