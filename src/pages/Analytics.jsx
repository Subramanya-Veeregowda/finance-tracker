import { useEffect, useState } from "react";
import { getSummary, getTransactions } from "../services/api";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import FadeIn from "../components/animations/FadeIn";
import BalanceTrend from "../components/ui/BalanceTrend";
import SpendingBreakdown from "../components/ui/SpendingBreakDown";
import BalanceCard from "../components/ui/BalanceCard";
import ExpenditureCard from "../components/ui/ExpenditureCard"
import IncomeCard from "../components/ui/IncomeCard"
import MonthlyExpenditure from "../components/ui/MonthlyExpenditure";
import YearlyExpenditure from "../components/ui/yearlyExpenditure";
import HorizontalScroll from "../components/features/HorizontalScroll";
import MonthCard from "../components/ui/MonthCard";
import YearCard from "../components/ui/YearCard";
import WeekCard from "../components/WeekCard";
import WeeklyTrendIndicator from "../components/ui/WeeklyTrendIndicator";
import ComparisonIndicator from "../components/ui/ComparisonIndicator";
import BudgetVsActual from "../components/ui/BudgetVsActual";
import DragDropContent from "../components/features/dragDrop/DragDropContent";
import SortableItem from "../components/features/dragDrop/SortableItem";
import ScrollToTop from "../components/features/ScrollToTop";

export default function Analytics({ children, dark, setDark }) {
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    getSummary().then(setSummary);
  }, []);

    const [transactions, setTransactions] = useState([]);

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

  console.log("INCOME DATA:", incomeData);

  // Balance trend data (simple running values)
const trendData = transactions.map((t, i) => ({
  name: i,
  value: t.amount,
}));

// Spending breakdown (group categories)
const categoryMap = {};

transactions.forEach((t) => {
  if (t.type === "expense") {
    categoryMap[t.category] =
      (categoryMap[t.category] || 0) + t.amount;
  }
});

const breakdownData = Object.keys(categoryMap).map((key) => ({
  name: key,
  value: categoryMap[key],
}));

const [cardOrder, setCardOrder] = useState([
    { id: "balance" },
    { id: "income" },
    { id: "expense" }
]);

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
   <div className="flex min-h-screen transition all">
       <div className="flex-1 flex flex-col overflow-x-hidden overflow-y-hidden">
            <Topbar dark={dark} setDark={setDark}/>
                        {/**DESKTOP */}

        <DragDropContent items={cardOrder} setItems={setCardOrder}>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2 pl-3 pr-3">

          {cardOrder.map((card, index) => (
           <SortableItem key={card.id} id={card.id}>

           {card.id === "balance" && (
            <FadeIn delay={0.4}>
               <BalanceCard title="Total Balance" value={balance} />
            </FadeIn>
           )}

           {card.id === "income" && (
             <FadeIn delay={0.6}>
                 <IncomeCard title="Monthly Income" value={income} data={incomeData} />
             </FadeIn>
           )}

           {card.id === "expense" && (
             <FadeIn delay={0.8}>
                 <ExpenditureCard title="Monthly Expenditure" value={expense} data={expenseData} />
             </FadeIn>
           )}
           </SortableItem>
             ))}
          </div>
        </DragDropContent>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-3 px-3">
                          <FadeIn delay={0.9}>
                                    <MonthCard />
                          </FadeIn>

                          <FadeIn delay={1.0}>
                                     <YearCard />
                          </FadeIn>
                      </div>

                      {/**DESKTOP */}
                      <div className="hidden md:grid grid-cols-4 gap-5 px-3 mt-3">
                            <FadeIn delay={1.0}><WeekCard title="Week 1" /></FadeIn>
                            <FadeIn delay={1.0}><WeekCard title="Week 2" /></FadeIn>
                            <FadeIn delay={1.0}><WeekCard title="Week 3" /></FadeIn>
                            <FadeIn delay={1.0}><WeekCard title="Week 4" /></FadeIn>
                      </div>

                      {/**MOBILE */}
                      <div className="md:hidden px-3 mt-3">
                        <HorizontalScroll snap showIndicators>
                             <FadeIn delay={1.0}><WeekCard title="Week 1" /></FadeIn>
                             <FadeIn delay={1.0}><WeekCard title="Week 2" /></FadeIn>
                             <FadeIn delay={1.0}><WeekCard title="Week 3" /></FadeIn>
                             <FadeIn delay={1.0}><WeekCard title="Week 4" /></FadeIn>
                        </HorizontalScroll>
                      </div>

                       <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-2 px-3">
                                        <FadeIn delay={1}><BalanceTrend data={trendData} /></FadeIn>
                                        <FadeIn delay={1.2}><SpendingBreakdown data={breakdownData} /></FadeIn>
                       </div>

                       <div className="px-3 mt-3">
                           <HorizontalScroll snap showIndicators>
                                        <FadeIn delay={1}> <ComparisonIndicator /></FadeIn>
                                         <FadeIn delay={1}><WeeklyTrendIndicator /></FadeIn>
                                        <FadeIn delay={1}> <BudgetVsActual /></FadeIn>
                            </HorizontalScroll>
                        </div>
           
                          <div className="grid grid-cols-1 mt-2 pt-2 pl-3 pr-3 ml-3 mr-3">
                              <FadeIn delay={1.4}><MonthlyExpenditure data={monthlyData}/></FadeIn>
                          </div>
                                   
                          <div className="grid grid-cols-1 mt-2 pt-2 pl-3 pr-3 ml-3 mr-3">
                               <FadeIn delay={1.6}><YearlyExpenditure data={yearlyData}/></FadeIn>
                          </div>
                          <ScrollToTop/>
             <Footer/>
        </div>
    </div>
  );
}