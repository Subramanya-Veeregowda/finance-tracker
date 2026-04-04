import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";


export default function Footer() {
  return (
    <footer
      className="
        w-full 
        px-4 py-3
        bg-gradient-to-r from-purple-400/20 via-blue-400/20 to-emerald-400/20 dark:bg-black backdrop-blur-xl
        border-b border-black/10 dark:border-white/10
        md:fixed md:bottom-0 md:left-0 md:z-50
      "
    >
      {/* DESKTOP */}
      <div className="hidden md:flex items-center justify-between text-sm">

        {/* LEFT */}
        <div className="text-left">
          <span className="font-semibold">© 2026 Finance Tracker</span>
          <span className="opacity-70 ml-2">
            Designed by Subramanya V
          </span>
        </div>

        {/* CENTER */}
        <div className="text-xs opacity-60 text-center">
          React 18 • Vite 5 • Tailwind CSS 3 • Recharts 2 • Git • Docker
        </div>

        {/* RIGHT */}
        <div className="flex gap-4 text-lg">
          <a href="https://github.com/Subramanya-Veeregowda" target="_blank">
            <FaGithub className="hover:text-gray-400 hover:scale-125 transition duration-300 ease-in-out cursor-pointer"/>
          </a>
          <a href="https://www.linkedin.com/in/subramanyav2002" target="_blank">
            <FaLinkedin className="hover:text-blue-600 hover:scale-125 transition duration-300 ease-in-out cursor-pointer"/>
          </a>
          <a href="mailto:subramanyav2002@gmail.com">
            <MdEmail className="hover:text-red-600 hover:scale-125 transition duration-300 ease-in-out cursor-pointer"/>
          </a>
          <a href="https://www.instagram.com/subbu.7" target="_blank">
            <FaInstagram className="hover:text-purple-600 hover:scale-125 transition duration-300 ease-in-out cursor-pointer"/>
          </a>
          <a href="https://x.com/Subramanyav" target="_blank">
            <FaXTwitter className="hover:text-gray-600 hover:scale-125 transition duration-300ease-in-out cursor-pointer"/>
          </a>
           <a href="https://wa.me/qr/IH3W2XLDW7FHE1" target="_blank">
            <FaWhatsapp className="hover:text-green-600 hover:scale-125 transition duration-300 ease-in-out cursor-pointer"/>
          </a>
        </div>
      </div>

      {/* MOBILE */}
      <div className="flex md:hidden flex-col items-center text-center gap-1 text-sm">

        {/* LINE 1 */}
        <div className="font-semibold">
          © 2026 Finance Tracker
        </div>

        {/* LINE 2 */}
        <div className="opacity-70">
          Designed by Subramanya V
        </div>

        {/* LINE 3 */}
        <div className="flex gap-4 text-lg mt-1 ">
          <a href="https://github.com/Subramanya-Veeregowda" target="_blank">
            <FaGithub className="hover:text-gray-800 hover:scale-125 transition duration-300 ease-in-out cursor-pointer"/>
          </a>
          <a href="https://www.linkedin.com/in/subramanyav2002" target="_blank">
            <FaLinkedin className="hover:text-blue-600 hover:scale-125 transition duration-300 ease-in-out cursor-pointer"/>
          </a>
          <a href="mailto:subramanyav2002@gmail.com">
            <MdEmail className="hover:text-red-600 hover:scale-125 transition duration-300 ease-in-out cursor-pointer"/>
          </a>
          <a href="https://www.instagram.com/subbu.7" target="_blank">
            <FaInstagram className="hover:text-purple-600 hover:scale-125 transition duration-300 ease-in-out cursor-pointer"/>
          </a>
          <a href="https://x.com/Subramanyav" target="_blank" >
            <FaXTwitter className="hover:text-gray-600 hover:scale-125 transition duration-300 ease-in-out cursor-pointer"/>
          </a>
          <a href="https://wa.me/qr/IH3W2XLDW7FHE1" target="_blank">
            <FaWhatsapp className="hover:text-green-600 hover:scale-125 transition duration-300 ease-in-out cursor-pointer"/>
          </a>
        </div>

      </div>
    </footer>
  );
}