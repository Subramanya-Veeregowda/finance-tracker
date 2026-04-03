import { useEffect, useState } from "react";
import { getSummary } from "../services/api";
import Balancechart from "../components/Balancechart";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";

export default function Transactions({ children, dark, setDark }) {
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    getSummary().then(setSummary);
  }, []);

  return (
   <div className="flex h-screen transition all">
       <div className="flex-1 flex flex-col relative">
            <Topbar dark={dark} setDark={setDark}/>
            <main className="p-4 flex-1"> {children}</main>


              <Footer/>
        </div>
    </div>
  );
}