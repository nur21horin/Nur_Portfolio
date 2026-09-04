import React, { useState } from "react";
import { ArrowUpRight, Github, Linkedin, Mail, Menu, Moon, Sun, X } from "lucide-react";
import "./Navbaar.css";

const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Navbar = ({ dark, setDark }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <button className="brand" onClick={() => handleNav("#top")}>
          NUR<span>.</span>
        </button>

        <nav className="desktop-nav">
          {navItems.map((item) => (
            <button key={item.href} onClick={() => handleNav(item.href)} className="nav-link">
              {item.label}
            </button>
          ))}
        </nav>

        <div className="nav-actions">
          <div className="social-links">
            <a href="https://github.com/nur21horin" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github />
            </a>
            <a href="https://www.linkedin.com/in/nur-mohammod-9b63b4306/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin />
            </a>
            <a href="mailto:nurm98371@gmail.com" aria-label="Email">
              <Mail />
            </a>
          </div>

          <button className="theme-toggle" onClick={() => setDark(!dark)} aria-label="Toggle theme">
            {dark ? <Moon /> : <Sun />}
          </button>

          <button
            className={`hamburger ${menuOpen ? "is-open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`}>
        <div className="mobile-menu-inner">
          {navItems.map((item, idx) => (
            <button
              key={item.href}
              onClick={() => handleNav(item.href)}
              className="mobile-nav-link"
              style={{ animationDelay: `${idx * 0.06}s` }}
            >
              {item.label}
              <ArrowUpRight />
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
