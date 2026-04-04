import { useState } from "react";

export default function RoleToggle({ role, setRole }) {

  const handleRoleChange = (newRole) => {
    setRole(newRole);
    localStorage.setItem("role", newRole);
  }
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-bold text-black dark:text-white">
        {role === "admin" ? "Admin" : "Viewer"}
      </span>

      <button
        onClick={() => handleRoleChange(role === "admin"? "viewer" : "admin")}
        className={`w-12 h-7 flex items-center items-left rounded-full p-1 transition shadow-md hover:shadow-xl hover:scale-105 ${
          role === "admin" ? "bg-green-500" : "bg-blue-500"
        }`}
      >
        <div
          className={`bg-white w-6 h-6 rounded-full shadow-md transform transition shadow-md hover:shadow-xl  ${
            role === "admin" ? "-translate-x-[2px]" : "translate-x-[18px]"
          }`}
        />
      </button>
    </div>
  );
}