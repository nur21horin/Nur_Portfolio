import { Github, Linkedin, Mail } from "lucide-react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/nur-mohammod-9b63b4306/",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:nur98371@gmail.com", label: "Email" },
  ];

  const navLinks = [
    { path: "/about-me", label: "About" },
    { path: "/skills", label: "Skills" },
    { path: "/works", label: "Projects" },
    { path: "/cp", label: "Problem Solving" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <footer className="bg-muted/30 border-t border-border/50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Top Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <NavLink to="/">
                <h3 className="text-2xl font-bold font-display text-blue-500 mb-3">
                  NM.
                </h3>
              </NavLink>
              <p className="text-muted-foreground">
                Full Stack Web Developer passionate about creating modern,
                scalable web solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold font-display mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        isActive
                          ? "text-accent font-semibold"
                          : "text-muted-foreground hover:text-accent transition-colors duration-300"
                      }
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold font-display mb-4">Connect</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 mx-auto text-center">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm">
              <p className="flex items-center justify-center text-center">
                © {currentYear} Nur Mohammod. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
