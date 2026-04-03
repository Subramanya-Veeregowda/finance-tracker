import FadeIn from "../animations/FadeIn";

const formatCurrency = (value) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(value);
};

export default function Card({ title, value }) {
  return (
    <div className="flex flex-col justify-center items-center h-[160px] w-full bg-blue-100/40 hover:bg-blue-200/70 dark:bg-blue-900/20 hover:dark:bg-blue-900/40 text-black backdrop-blur-xl 
                    dark:text-white p-4 rounded-xl shadow-sm border border-blue-500 dark:border-blue-900 hover:scale-[1.02]
                    dark:border-gray-800 shadow-lg hover:shadow-3xl ">
      <p className="text-sm font-bold opacity-90 mb-1 text-black dark:text-white">{title}</p>
      <FadeIn delay={0.8}><h2 className="text-4xl font-extrabold tracking-wide text-blue-400">{formatCurrency(value)}</h2></FadeIn>
    </div>
  );
}