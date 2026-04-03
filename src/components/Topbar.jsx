import { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Menu, X, Settings } from "lucide-react";
import { Sun, Moon } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import RoleToggle from "./RoleToggle";
import LogoDark from "../assets/LogoDark.png"
import LogoLight from "../assets/LogoLight.png"

function Topbar({ dark, setDark }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <div className="relative z-50">

      {/* TOPBAR */}
      <div className="
        flex justify-between items-center px-4 md:px-8 py-3
        bg-gradient-to-r from-purple-400/20 via-blue-400/20 to-emerald-400/20 dark:bg-black backdrop-blur-xl
        border-b border-black/10 dark:border-white/10
        transition-all duration-300
      ">

        {/* LEFT: LOGO  */}
        <div className="flex items-center">
            <img src={LogoLight} alt="logo" className="h-10  md:h-10 p-0 m-0 block dark:hidden transition transform duration-300 hover:scale-105"/>
            <img src={LogoDark} alt="logo" className="h-10 md:h-10 p-0 m-o  hidden dark:block transition transform duration-300 hover:scale-105"/>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-black dark:text-white">

          <NavLink to="/" className={({ isActive }) => `px-4 py-2 rounded-lg cursor-pointer transition-all duration-300
                hover:text-purple-600 dark:hover:text-purple-700 hover:scale-105
                hover:bg-purple-900/20 dark:hover:bg-purple-500/20 ${isActive ? "bg-purple-900/20 text-purple-500 scale-105" : ""}`}>Dashboard</NavLink>
          <NavLink to="/transactions" className={({ isActive }) => `px-4 py-2 rounded-lg cursor-pointer transition-all duration-300
                hover:text-yellow-600 dark:hover:text-yellow-700 hover:scale-105
                hover:bg-yellow-900/20 dark:hover:bg-yellow-500/20 ${isActive ? "bg-yellow-900/20 text-yellow-500 scale-105" : ""}`}>Transactions</NavLink>
          <NavLink to="/analytics" className={({ isActive }) => `px-4 py-2 rounded-lg cursor-pointer transition-all duration-300
                hover:text-blue-600 dark:hover:text-blue-700 hover:scale-105
                hover:bg-blue-900/20 dark:hover:bg-blue-500/20 ${isActive ? "bg-blue-900/20 text-blue-500 scale-105" : ""}`}>Analytics</NavLink>
          <NavLink to="/insights" className={({ isActive }) => `px-4 py-2 rounded-lg cursor-pointer transition-all duration-300
                hover:text-green-600 dark:hover:text-green-700 hover:scale-105
                hover:bg-green-900/20 dark:hover:bg-green-500/20 ${isActive ? "bg-green-900/20 text-green-500 scale-105" : ""}`}>Insights</NavLink>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* PROFILE */}
          <div className="hidden md:flex items-center gap-2 ">
            <span className="text-sm text-gray-700 dark:text-gray-300 hover:scale-105">
              Hi, Myself Subbu
            </span>
            {/* Gradient DP */}
            <div className="
              w-5 h-5 rounded-full hover:scale-105
              bg-gradient-to-br from-blue-500 via-purple-500 to-teal-400
            " />
          </div>

          {/* SETTINGS */}
          <div className="relative">
            <button
              onClick={() => setSettingsOpen(!settingsOpen)}
              className="hidden md:block p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition hover:scale-105"
            >
              <Settings size={18} />
            </button>

            {/* SETTINGS DROPDOWN */}
            {settingsOpen && (
              <div className="hidden md:block
                absolute right-0 mt-3 w-45 p-4
                rounded-xl
                backdrop-blur-xl
                bg-blue-300/70 dark:bg-gray-700/40
                border border-white/20 dark:border-white/10
                shadow-lg hover:shadow-xl
              ">

                <div className="mb-4 flex flex-col items-center">
                  <p className="text-s whitespace-nowrap text-black dark:text-white mb-1">Role</p>
                  <RoleToggle />
                </div>

                <div className="mb-4 flex flex-col items-center">
                  <p className="text-s text-black dark:text-white mb-2">Theme</p>
                  <ThemeToggle dark={dark} setDark={setDark}/>
                </div>

                <button className="
                  mx-auto block mt-2 w-32 py-2 rounded-lg text-white font-medium
                  bg-red-500/80 backdrop-blur-lg border border-red-500/40 shadow-md hover:shadow-xl 
                  hover:bg-red-800/90 transition hover:scale-105 transition-all duration-300 
                ">
                  Logout
                </button>

              </div>
            )}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 "
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className=" 
          fixed top-15 h-full w-[80%] right-0
          md:hidden px-4 py-4 space-y-4
          bg-gray-400/60 dark:bg-gray-900/70
          backdrop-blur-lg
          border-r border-white/20
          dark:border-white/10
        ">

          {/* PROFILE (mobile only) */}
          <div className="flex items-center gap-3 right-0 w-[60%]">

            <div className="
              w-10 h-10 rounded-full
              bg-gradient-to-br from-blue-500 via-purple-500 to-teal-400 hover:scale-105
            " />

            <span className="flex text-sm text-gray-700 dark:text-gray-300 hover:scale-105">
              Hello, Subbu
            </span>
          </div>

          {/* NAV ITEMS */}
          <div className="flex flex-col gap-3 text-sm font-medium">
          <NavLink to="/" className={({ isActive }) => `px-4 py-2 rounded-lg cursor-pointer transition-all duration-300
                hover:text-purple-600 dark:hover:text-purple-700 hover:scale-105
                hover:bg-purple-900/20 dark:hover:bg-purple-500/20 ${isActive ? "bg-purple-900/20 text-purple-500 scale-105" : ""}`}>Dashboard</NavLink>
          <NavLink to="/transactions" className={({ isActive }) => `px-4 py-2 rounded-lg cursor-pointer transition-all duration-300
                hover:text-yellow-600 dark:hover:text-yellow-700 hover:scale-105
                hover:bg-yellow-900/20 dark:hover:bg-yellow-500/20 ${isActive ? "bg-yellow-900/20 text-yellow-500 scale-105" : ""}`}>Transactions</NavLink>
          <NavLink to="/analytics" className={({ isActive }) => `px-4 py-2 rounded-lg cursor-pointer transition-all duration-300
                hover:text-blue-600 dark:hover:text-blue-700 hover:scale-105
                hover:bg-blue-900/20 dark:hover:bg-blue-500/20 ${isActive ? "bg-blue-900/20 text-blue-500 scale-105" : ""}`}>Analytics</NavLink>
          <NavLink to="/insights" className={({ isActive }) => `px-4 py-2 rounded-lg cursor-pointer transition-all duration-300
                hover:text-green-600 dark:hover:text-green-700 hover:scale-105
                hover:bg-green-900/20 dark:hover:bg-green-500/20 ${isActive ? "bg-green-900/20 text-green-500 scale-105" : ""}`}>Insights</NavLink>
          </div>

          {/* SETTINGS INSIDE MOBILE */}
          <div className="pt-3 border-t border-white/20 dark:border-white/10">

            <div className="mb-3">
              <p className="text-xs text-gray-500 mb-1 ">Role</p>
              <RoleToggle />
            </div>

            <div className="mb-3">
              <p className="text-xs text-gray-500 mb-2">Theme</p>
              <ThemeToggle dark={dark} setDark={setDark}/>
            </div>

            <button className="
              w-[40%] py-2 rounded-lg
              bg-red-500 text-white shadow-md hover:shadow-xl
              hover:bg-red-600 transition hover:scale-105
            ">
              Logout
            </button>

          </div>
        </div>
      )}
    </div>
  );
}

export default Topbar;