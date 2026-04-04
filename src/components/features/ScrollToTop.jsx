import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const height =
        document.documentElement.scrollHeight - window.innerHeight;

      const scrolled = scrollTop / height;

      setVisible(scrolled > 0.5);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
      fixed bottom-6 md:bottom-20 right-6 z-50
      p-3 rounded-full
     shadow-lg backdrop-blur-md
     transition-all duration-300 ease-in-out
     bg-gradient-to-r from-purple-400/20 via-blue-400/20 to-emerald-400/20 dark:bg-black backdrop-blur-xl text-black border border-gray-300
     dark:bg-purple-300/40 dark:text-white dark:border-white/20
     hover:bg-purple-500/70 hover:text-white hover:scale-110
     dark:hover:bg-gray-800 dark:hover:text-black active:scale-95
      ${visible 
         ? "opacity-100 scale-100" 
         : "opacity-0 scale-75 pointer-events-none"       /**bg-yellow-300/70 dark:bg-purple-300/40 */
      }
   `}
    >
     <ArrowUp size={15}/>
    </button>
  );
}