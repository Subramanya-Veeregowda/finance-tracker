import { useState, useEffect } from "react";
import { useLoading } from "./components/loader/LoadingContext.jsx"
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

  const { loading } = useLoading();

  const { setLoading } = useLoading();

useEffect(() => {
  const fetchData = async () => {
    setLoading(true);

    const start = Date.now();

    await Promise.all([
      getTransactions(),
      getSummary()
    ]);

    const elapsed = Date.now() - start;
    const MIN_TIME = 1200;

    if (elapsed < MIN_TIME) {
      await new Promise(res => setTimeout(res, MIN_TIME - elapsed));
    }

    setLoading(false);
  };

  fetchData();
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