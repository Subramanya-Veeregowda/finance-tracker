import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Analytics from "./pages/Analytics";
import Insights from "./pages/Insights"
import Footer from "./components/Footer";

export default function App() {

  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "true"
  })

  useEffect(() => {

    localStorage.setItem("theme", dark)

    if (dark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }

  }, [dark])

  return (
    <BrowserRouter>
       <main className="pt-20">
        <Routes>
       
          <Route path="/" element={<Dashboard dark={dark} setDark={setDark}/>} />
          <Route path="/transactions" element={<Transactions dark={dark} setDark={setDark}/>} />
          <Route path="/analytics" element={<Analytics dark={dark} setDark={setDark}/>} />
          <Route path="/insights" element={<Insights dark={dark} setDark={setDark}/>} />
          
        </Routes>
        </main>
    </BrowserRouter>
  );
}