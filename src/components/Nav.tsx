import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
import { NAV_LINKS } from "../data/navLinks";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className={`navbar-toggler ${open ? "" : "collapsed"}`}
        type="button"
        aria-controls="navbarDefault"
        aria-expanded={open}
        aria-label="Toggle navigation"
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      <div
        id="navbarDefault"
        className={`navbar-collapse collapse justify-content-end ${open ? "show" : ""}`}
      >
        <ul className="navbar-nav">
          {NAV_LINKS.map((item) => (
            <li className="nav-item" key={item.to}>
              <ScrollLink
                className="nav-link js-scroll"
                activeClass="active"   
                to={item.to}           
                spy={true}             
                smooth={true}          
                duration={400}        
                offset={item.offset ?? -80} 
                onClick={() => setOpen(false)} 
              >
                {item.label}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
