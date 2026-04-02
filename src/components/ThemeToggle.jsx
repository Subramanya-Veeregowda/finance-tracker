import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ dark, setDark }) {
  return (
    <div
      onClick={() => setDark(!dark)}
      className={`w-11 h-7 flex items-center rounded-full p-1 hover:scale-110 cursor-pointer transition hover:scale-115
        ${dark ? "bg-yellow-900/90" : "bg-purple-900/90"}`}
    >
      <div
        className={`w-7 h-7 flex items-center justify-center bg-white dark:bg-black/80 border-white rounded-full shadow-md transform transition 
          ${dark ? "-translate-x-[9px]" : "translate-x-[12px]"}`}
      >
        {!dark ? <Sun size={12} /> : <Moon size={12} />}
      </div>
    </div>
  );
}