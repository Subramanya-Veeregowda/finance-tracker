import { motion } from "framer-motion";

export default function FadeIn({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 0.95  }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}