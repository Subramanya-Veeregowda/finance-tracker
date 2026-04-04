import AnimatedBars from "./AnimatorBars";
import LogoDark from "../../assets/LogoDark.png"
import LogoLight from "../../assets/LogoLight.png"

export default function SkeletonLoader({ dark }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100dvh] gap-6">
      
      {/* Graph Animation */}
      <AnimatedBars />

      {/* Logo */}
      <img
        src={dark ? LogoDark : LogoLight}
        alt="logo"
        className="w-40 opacity-80"
      />

    </div>
  );
}