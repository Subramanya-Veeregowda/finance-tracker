import { useState } from "react";

export default function RoleToggle() {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-bold text-black dark:text-white">
        {isAdmin ? "Admin" : "Viewer"}
      </span>

      <button
        onClick={() => setIsAdmin(!isAdmin)}
        className={`w-9 h-5 flex items-center items-left rounded-full p-1 transition shadow-md hover:shadow-xl hover:scale-105 ${
          isAdmin ? "bg-green-500" : "bg-blue-500"
        }`}
      >
        <div
          className={`bg-white w-6 h-6 rounded-full shadow-md transform transition shadow-md hover:shadow-xl  ${
            isAdmin ? "-translate-x-[6px]" : "translate-x-[8px]"
          }`}
        />
      </button>
    </div>
  );
}