
import Brust from "./animations/Brust";
import Typewriter from "./animations/Typewriter";

export default function Hero() {
  return (
    <div className="relative flex flex-col items-center justify-center text-center py-20 px-10 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-emerald-500/20 blur-3xl opacity-50"></div>

      {/* Heading */}
      <Brust
        text="We Track. We Analyse. We Record. We Assist."
        className="pt-0 text-2xl md:text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400"
      />

      {/* Subtext */}
      <Typewriter
        text="Smart financial tracking with real-time insights, analytics and seamless control over your money."
        className="mt-3 text-gray-400 max-w-2xl text-sm md:text-sm"
      />

    </div>
  );
}