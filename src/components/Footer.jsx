import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import FadeIn from "./animations/FadeIn";

export default function Footer() {
  return (
    <footer className="w-full mt-10 px-4 py-6 text-sm text-gray-600 dark:text-gray-300">

      {/* TECH STACK (SEPARATE ROW ALWAYS) */}
      <div className="w-full text-center text-[9px] md:text-sm mb-3 opacity-80 break-words hover:scale-[1.02]">
        React 18 • Vite 5 • Tailwind CSS 3 • Recharts 2 • Node.js 20
      </div>

      {/* MAIN FOOTER ROW */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">

        {/* LEFT (© + NAME) */}
        <div className="md:ml-10 text-center md:text-left">
          <span className="font-semibold block">
            © 2026 Finance Tracker
          </span>
          <FadeIn delay={2}><span className="opacity-80 block hover:scale-[1.03]">
            Designed by Subramanya V
          </span></FadeIn>
        </div>

        {/* RIGHT (ICONS) */}
        <div className="md:mr-10 flex justify-center hover:scale-[1.02] md:justify-end gap-4 text-lg">

          <a
            href="https://www.linkedin.com/in/subramanyav2002"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-blue-500 hover:scale-[1.3] transition" />
          </a>

          <a href="mailto:subramanyav2002@gmail.com">
            <MdEmail className="hover:text-red-400 hover:scale-[1.3] transition" />
          </a>

          <a
            href="https://github.com/Subramanya-Veeregowda"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-white hover:scale-[1.3] transition" />
          </a>

          <a
            href="https://wa.me/qr/IH3W2XLDW7FHE1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="hover:text-green-500 hover:scale-[1.3] transition" />
          </a>

          <a
            href="https://www.instagram.com/subbu.7_?igsh=MWRicmJjNGo0NW5ydg=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="hover:text-pink-500 transition hover:scale-[1.3]" />
          </a>

          <a
            href="https://x.com/SubramanyaV_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter className="hover:text-gray-400 hover:scale-[1.3] transition" />
          </a>

        </div>
      </div>
    </footer>
  );
}