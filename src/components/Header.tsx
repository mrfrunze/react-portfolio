import { useEffect, useState } from "react";
import Nav from "./Nav";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "bg-white shadow-md py-3 text-[#0078ff]" : "bg-transparent py-6 text-white",
      ].join(" ")}
      id="mainNav"
      role="navigation"
      aria-label="Primary"
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a 
          href="#home"
          className={[
            "text-[1.6rem] font-semibold tracking-tight transition-colors",
            scrolled ? "text-[#0078ff]" : "text-white",
          ].join(" ")}
        >
          IFrontend
        </a>
        <Nav scrolled={scrolled} />
      </div>
    </header>
  );
}
