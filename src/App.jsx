import { useState, useEffect } from "react";
import Layout from "./layout/Layout";

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

  return( 
  <Layout dark={dark} setDark={setDark} />
);
}