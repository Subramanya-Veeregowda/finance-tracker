import React, { useRef, useState, useEffect } from "react";

export default function HorizontalScroll({
  children,
  scroll = true,
  snap = false,
  showIndicators = false,
  className = "",
}) {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!containerRef.current) return;

    const scrollLeft = containerRef.current.scrollLeft;
    const width = containerRef.current.clientWidth;

    const index = Math.round(scrollLeft / width);
    setActiveIndex(index);
  };

  const scrollToIndex = (i) => {
  if (!containerRef.current) return;

  const width = containerRef.current.clientWidth;
  containerRef.current.scrollTo({
    left: i * width,
    behavior: "smooth",
  });
};

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className={`
          flex 
          ${scroll ? "overflow-x-auto scrollbar-hide" : ""}
          ${snap ? "snap-x snap-mandatory scroll-smooth" : ""}
          ${className}
        `}
      >
{React.Children.map(children, (child) => (
  <div className="flex-shrink-0 w-full snap-start px-2">
    {child}
  </div>
))}
      </div>

      {/* DOT INDICATORS */}
{showIndicators && (
  <div className="flex justify-center mt-2 gap-2">
    {React.Children.map(children, (_, i) => (
      <div
        onClick={() => scrollToIndex(i)}
        className={`h-2 w-2 rounded-full cursor-pointer transition-all ${
          i === activeIndex
            ? "bg-white scale-110"
            : "bg-gray-500 opacity-50"
        }`}
      />
    ))}
  </div>
)}
    </>
  );
}