import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getSummary, getTransactions } from "./services/api.js";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Analytics from "./pages/Analytics";
import Insights from "./pages/Insights";
import SkeletonLoader from "./components/loader/SkeletonLoader.jsx";


export default function App() {

  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "true"
  })

  const [role, setRole] = useState(
    localStorage.getItem("role") || "viewer"
  );

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadApp = async () => {
       try {
         await Promise.all([
         getTransactions(),
        getSummary(),
      ]);

      // intentional delay for smooth UX
      await new Promise((res) => setTimeout(res, 1200));

    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  loadApp();
}, []);

  useEffect(() => {
    localStorage.setItem("role", role)
  }, [role])

  useEffect(() => {

    localStorage.setItem("theme", dark)

    if (dark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }

  }, [dark])

  if (loading) {
     return <SkeletonLoader dark={dark} />;
  } 
  return (
    <BrowserRouter>
       <main className="pt-20 pb-0 md:pb-20">
        <Routes>
       
          <Route path="/" element={<Dashboard dark={dark} setDark={setDark}/>} />
          <Route path="/transactions" element={<Transactions dark={dark} setDark={setDark} role={role} setRole={setRole}/>} />
          <Route path="/analytics" element={<Analytics dark={dark} setDark={setDark}/>} />
          <Route path="/insights" element={<Insights dark={dark} setDark={setDark}/>} />
          
        </Routes>
        </main>
    </BrowserRouter>
  );
}