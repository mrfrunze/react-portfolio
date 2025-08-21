import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
import { NAV_LINKS } from "../data/navLinks";
type NavProps = { scrolled: boolean };

export default function Nav({ scrolled }: NavProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const linkBase =
    "relative uppercase font-semibold  block cursor-pointer transition-colors duration-300";
  const linkUnderline = scrolled ? "after:bg-[#0078ff]" : "after:bg-white";
  const linkHoverText = scrolled
    ? "hover:text-[#0078ff]"
    : "hover:text-white/90";

  return (
    <>
      <div className="flex items-center">
        <ul className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((l) => (
            <li key={l.to} className="px-2.5 py-2">
              <ScrollLink
                to={l.to}
                spy
                smooth
                duration={400}
                offset={l.offset}
                // activeClass="after:w-[35px]"
                onClick={() => setOpen(false)}
                className={[
                  linkBase,
                  linkHoverText,
                  // подчёркивание как в твоём CSS (через ::before/::after)
                  "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 hover:after:w-[35px] hover:after:bg-[#0078ff]  after:transition-[width] after:duration-500",
                  linkUnderline,
                  scrolled ? "text-[#0078ff]" : "text-white",
                ].join(" ")}
              >
                {l.label}
              </ScrollLink>
            </li>
          ))}
        </ul>
        {/* Toggle (mobile) */}
        <button
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2"
        >
          {open ? (
            <FiX size={26} className={scrolled ? "text-[#0078ff]" : "text-white"} />
          ) : (
            <FiMenu size={26} className={scrolled ? "text-[#0078ff]" : "text-white"} />
          )}
        </button>
        {/* Mobile panel */}
      <div
        className={[
          "absolute left-0 right-0 top-full md:hidden transition-transform origin-top",
          open ? "scale-y-100" : "scale-y-0",
          scrolled ? "bg-white text-[#1e1e1e]" : "bg-black/80 text-white",
          "backdrop-blur-sm",
        ].join(" ")}
      >
        <ul className="container mx-auto px-4 py-4 space-y-2">
          {NAV_LINKS.map((l) => (
            <li key={l.to}>
              <ScrollLink
                to={l.to}
                spy
                smooth
                duration={400}
                offset={l.offset}
                onClick={() => setOpen(false)}
                className={[
                  "block uppercase font-semibold py-2",
                  scrolled ? "hover:text-[#0078ff]" : "hover:text-white/90",
                ].join(" ")}
              >
                {l.label}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>
      </div>
    </>
  );
}
