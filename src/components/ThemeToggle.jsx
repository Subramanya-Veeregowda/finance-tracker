import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ dark, setDark }) {
  return (
    <div
      onClick={() => setDark(!dark)}
      className={`w-20 h-10 flex items-center rounded-full p-1 hover:scale-110 cursor-pointer transition hover:scale-105
        ${dark ? "bg-yellow-300/90" : "bg-purple-900/90"}`}
    >
      <div
        className={`w-9 h-9 flex items-center justify-center bg-white dark:bg-black border-white rounded-full shadow-md transform transition 
          ${dark ? "-translate-x-[2px]" : "translate-x-[36px]"}`}
      >
        {!dark ? <Sun size={12} /> : <Moon size={12} />}
      </div>
    </div>
  );
}