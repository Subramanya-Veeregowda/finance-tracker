import { useEffect, useState } from "react";

export default function Typewriter({ text = "", speed = 50, className = "" }) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (!text) return;

    let i = 0;

    const interval = setInterval(() => {
      setDisplayText(text.slice(0, i + 1));
      i++;

      if (i >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <p className={className}>{displayText}</p>;
}