import { useEffect, useState } from "react";
import { getTransactions } from "../services/api";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import RoleToggle from "../components/RoleToggle";
import FadeIn from "../components/animations/FadeIn";
import BalanceCard from "../components/ui/BalanceCard";
import ExpenditureCard from "../components/ui/ExpenditureCard";
import IncomeCard from "../components/ui/IncomeCard";
import HorizontalScroll from "../components/features/HorizontalScroll";
import { div } from "framer-motion/client";

export default function Transactions({ dark, setDark, role, setRole}) {

  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [type, setType] = useState("all");
  const [paymentMethod, setPaymentMethod] = useState("all");
  const [date, setDate] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState("");

  // 🔥 FETCH DATA
  useEffect(() => {
    const load = async () => {
      try {
        const res = await getTransactions();
        setData(res.data || res);
        setFiltered(res.data || res);
      } catch (e) {
        console.error(e);
      }
      setLoading(false);
    };

    load();
  }, []);

  // 🔥 FILTERING (LIVE)
  useEffect(() => {
  let temp = [...data];

  // 🔍 SEARCH (ALL FIELDS)
  if (query.trim() !== "") {
    temp = temp.filter((item) =>
      Object.values(item)
        .join(" ")
        .toLowerCase()
        .includes(query.toLowerCase())
    );
  }

  // 📂 CATEGORY
  if (category !== "all") {
    temp = temp.filter((i) => i.category?.toLowerCase() === category.toLowerCase()
    );
  }

  // 💰 TYPE (FIXED: derive from amount)
  if (type !== "all") {
    temp = temp.filter((i) => i.type?.toLowerCase() === type.toLowerCase()
  );
  }

  // 💳 PAYMENT (FIXED FIELD NAME)
  if (paymentMethod !== "all") {
    temp = temp.filter((i) => i.paymentMethod?.toLowerCase() === paymentMethod.toLowerCase()
    );
  }

  // 📅 DATE
  setFiltered(temp);
  }, [query, category, type, paymentMethod, date, data]);

  
useEffect(() => {
  getTransactions().then((data) => {
    console.log("API DATA:", data);
    if (!Array.isArray(data)) {
         console.error("API ERROR:", data);
         return;
    }
    setTransactions(data);
  });
}, [])

  const income = transactions
    .filter(t => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const expense = transactions
    .filter(t => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = income - expense;

  const incomeData = transactions
  .filter(t => t.type === "income")
  .map(t => ({ value: t.amount }));

  const expenseData = transactions
  .filter(t => t.type === "expense")
  .map(t => ({ value: t.amount }));

  const handleEdit = (transaction) => {
   setEditingId(transaction.id);
   setEditValue(transaction.amount);
  };

const handleSave = (id) => {
  const updated = filtered.map((t) =>
    t.id === id ? { ...t, amount: Number(editValue) } : t
  );

  setFiltered(updated);
  setEditingId(null);
};

  const handleRoleChange = (newRole) => {
    setRole(newRole);
    localStorage.setItem("role", newRole);
  }

  const monthlyData = [
   { month: "Jan", amount: 12000 },
   { month: "Feb", amount: 18000 },
   { month: "Mar", amount: 9000 },
   { month: "Apr", amount: 22000 },
   { month: "May", amount: 15000 },
 ];

  const yearlyData = [
   { year: "2021", amount: 120000 },
   { year: "2022", amount: 180000 },
   { year: "2023", amount: 150000 },
   { year: "2024", amount: 210000 },
   { year: "2025", amount: 190000 },
  ];

  return (
    <div className="flex min-h-screen overflow-y-hidden">
      <div className="flex-1 flex flex-col overflow-x-hidden">
        <Topbar dark={dark} setDark={setDark} />
                       {/**DESKTOP */}
                       <div className="hidden md:grid grid-cols-3 gap-5 pt-2 pl-3 pr-3">
                          <FadeIn delay={0.4}><BalanceCard title="Total Balance" value={balance} /></FadeIn>
                          <FadeIn delay={0.6}><IncomeCard title="Monthly Income" value={income}  data={incomeData}/></FadeIn>
                          <FadeIn delay={0.8}><ExpenditureCard title="Monthly Expenditure" value={expense} data={expenseData}/></FadeIn>
                       </div>

                         {/**MOBILE */}
                       <div className="md:hidden pt-2 px-3">
                          <HorizontalScroll snap showIndicators>
                              <FadeIn delay={0.4}><BalanceCard title="Total Balance" value={balance} /></FadeIn>
                              <FadeIn delay={0.6}><IncomeCard title="Monthly Income" value={income}  data={incomeData}/></FadeIn>
                              <FadeIn delay={0.8}><ExpenditureCard title="Monthly Expenditure" value={expense} data={expenseData}/></FadeIn>
                          </HorizontalScroll>
                       </div>
        <div className="p-4 md:p-6 space-y-6 w-full">

          {/* 🔍 SINGLE SEARCH BAR */}
          <input
            type="text"
            placeholder="Search transactions..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-white/20 bg-white/60 dark:bg-black/40 hover:scale-[1.01]"
          />

          {/* 🎯 FILTERS (ROW - DESKTOP, GRID - MOBILE) */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div className="flex flex-wrap gap-3">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="p-2 rounded text-sm bg-blue-300/40 hover:bg-blue-400/70 dark:bg-blue-600/40 hover:dark:bg-blue-900/40 hover:scale-[1.02]"
            >
              <option value="all">Category</option>
              <option value="Groceries">Groceries</option>
              <option value="Transport">Transport</option>
              <option value="Dining">Dining</option>
              <option value="Shopping">Shopping</option>
              <option value="Salary">Salary</option>
              <option value="Investment">Investment</option>
              <option value="Health">Health</option>
            </select>

            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="p-2 rounded text-sm bg-green-300/40 hover:bg-green-400/70 dark:bg-green-600/40 hover:dark:bg-green-900/40 hover:scale-[1.02]"
            >
              <option value="all">type</option>
              <option value="income">income</option>
              <option value="expense">expense</option>
            </select>

            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="p-2 rounded text-sm bg-purple-300/40 hover:bg-purple-400/70 dark:bg-purple-600/40 hover:dark:bg-purple-900/40 hover:scale-[1.02]"
            >
              <option value="all">PaymentMethod</option>
              <option value="UPI">UPI</option>
              <option value="Bank">Bank</option>
              <option value="Credit">Credit</option>
              <option value="Debit">Debit</option>
            </select>
            </div>

            {/* 🔥 ROLE TOGGLE (SYNCED) */}
            <div className="mr-5 flex justify-end md:justify-end">
            <RoleToggle role={role} setRole={handleRoleChange} />
            </div>
          </div>

          {/* 📊 TABLE */}
          <div className="flex-1 overflow-x-auto rounded-lg">

            {loading ? (
              <p>Loading transactions...</p>
            ) : (
              <table className="w-full text-center text-sm shadow-lg hover:shadow-3xl">

                <thead className="bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-emerald-500/20">
                  <tr>
                    <th className="p-3">Date</th>
                    <th className="p-3">Title</th>
                    <th className="p-3">Category</th>
                    <th className="p-3">Payment</th>
                    <th className="p-3">Amount</th>
                    {role === "admin" && 
                    <th className="p-3">Actions</th>}
                  </tr>
                </thead>

                <tbody>
                  {filtered.map((t) => (
                    <tr
                      key={t.id}
                      className="bg-blue-100/70 dark:bg-gray-700/60 backdrop-blur-xl 
                      hover:dark:bg-gray-800/40 hover:bg-blue-200/70 dark:hover:bg-gray-700/40"
                    >
                      <td className="p-3">{t.date}</td>
                      <td className="p-3">{t.title}</td>
                      <td className="p-3">{t.category}</td>
                      <td className="p-3">{t.paymentMethod}</td>

                      <td className="p-3">
                        {role === "admin" && editingId === t.id ? (
                          <input
                            type="number"
                            value={editValue}
                            onChange={(e) => setEditValue(e.target.value)}
                            className="border p-1 w-24 rounded-lg border border-gray-300 dark:border-white/20 bg-white/60 
                                       dark:bg-black/40 hover:scale-[1.01]"
                            autoFocus
                          />
                        ) : (
                          <span
                            className={`font-bold ${
                              t.amount > 0 ? "text-green-500" : "text-red-500"
                            }`}
                          >
                            ₹{t.amount}
                          </span>
                        )}
                      </td>
                    
                        {role === "admin" && (
                          <td className="p-2">
                               {editingId === t.id ? (
                                  <button
                                     onClick={() => handleSave(t.id)}
                                     className="text-green-500  mx-auto block mt-2 w-25 py-2 rounded-lg text-white font-medium
                                                bg-green-500/80 dark:bg-green-500/40 backdrop-blur-xl border border-green-500/40 shadow-md hover:shadow-xl 
                                                hover:bg-green-800/90 dark:hover:bg-green-800/90 transition hover:scale-105 transition-all duration-300"
                                  >
                                   Save
                                </button>
                                  ) : (
                                     <button
                                     onClick={() => handleEdit(t)}
                                     className="text-green-500  mx-auto block mt-2 w-32 py-2 rounded-lg text-white font-medium
                                                bg-red-500/80 dark:bg-red-500/40 backdrop-blur-lg border border-red-500/40 shadow-md hover:shadow-xl 
                                                hover:bg-red-800/90 dark:hover:bg-red-800/90 transition hover:scale-105 transition-all duration-300"
                                    >
                                    Edit
                                    </button>
                                )}
                            </td>
                          )}
                    </tr>
                  ))}
                </tbody>

              </table>
            )}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}