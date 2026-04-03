import { motion } from "framer-motion";

export default function Brust({ text, className = "" }) {
  if (!text) return null;

  return (
    <h1 className={className}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: index * 0.06 }}
        >
          {char}
        </motion.span>
      ))}
    </h1>
  );
}