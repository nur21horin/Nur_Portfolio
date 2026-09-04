// import { Github, Linkedin, Mail } from "lucide-react";
// import { NavLink } from "react-router-dom";

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   const socialLinks = [
//     { icon: Github, href: "https://github.com", label: "GitHub" },
//     {
//       icon: Linkedin,
//       href: "https://www.linkedin.com/in/nur-mohammod-9b63b4306/",
//       label: "LinkedIn",
//     },
//     { icon: Mail, href: "mailto:nur98371@gmail.com", label: "Email" },
//   ];

//   const navLinks = [
//     { path: "/about-me", label: "About" },
//     { path: "/skills", label: "Skills" },
//     { path: "/works", label: "Projects" },
//     { path: "/cp", label: "Problem Solving" },
//     { path: "/contact", label: "Contact" },
//   ];

//   return (
//     <footer className="bg-muted/30 border-t border-border/50 py-12">
//       <div className="container mx-auto px-4">
//         <div className="max-w-6xl mx-auto">
//           {/* Top Section */}
//           <div className="grid md:grid-cols-3 gap-8 mb-8">
//             {/* Brand */}
//             <div>
//               <NavLink to="/">
//                 <h3 className="text-2xl font-bold font-display text-blue-500 mb-3">
//                   NM.
//                 </h3>
//               </NavLink>
//               <p className="text-muted-foreground">
//                 Full Stack Web Developer passionate about creating modern,
//                 scalable web solutions.
//               </p>
//             </div>

//             {/* Quick Links */}
//             <div>
//               <h4 className="font-semibold font-display mb-4">Quick Links</h4>
//               <ul className="space-y-2">
//                 {navLinks.map((link) => (
//                   <li key={link.path}>
//                     <NavLink
//                       to={link.path}
//                       className={({ isActive }) =>
//                         isActive
//                           ? "text-accent font-semibold"
//                           : "text-muted-foreground hover:text-accent transition-colors duration-300"
//                       }
//                     >
//                       {link.label}
//                     </NavLink>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Social Links */}
//             <div>
//               <h4 className="font-semibold font-display mb-4">Connect</h4>
//               <div className="flex gap-3">
//                 {socialLinks.map((social) => (
//                   <a
//                     key={social.label}
//                     href={social.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="p-3 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-all"
//                     aria-label={social.label}
//                   >
//                     <social.icon className="h-5 w-5" />
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Bottom Section */}
//           <div className="pt-8 mx-auto text-center">
//             <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm">
//               <p className="flex items-center justify-center text-center">
//                 © {currentYear} Nur Mohammod. All rights reserved.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowUp } from "lucide-react";

const footerItems = [
  "WEB DEVELOPMENT",
  "DATA SCIENCE",
  "AI",
  "RESEARCH",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#11110f] px-[5vw] pt-20 pb-6 text-[#f1f0ea]">
      
      {/* Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.15 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#cef95b] blur-[150px]"
      />

      {/* Top */}
      <div className="relative flex flex-col gap-5 border-b border-white/10 pb-6 md:flex-row md:items-center md:justify-between">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-mono text-xs tracking-[0.15em]"
        >
          NUR MOHAMMOD
        </motion.span>

        <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.12em] text-white/50">
          <motion.span
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-2 w-2 rounded-full bg-[#cef95b] shadow-[0_0_12px_#cef95b]"
          />
          AVAILABLE FOR WORK
        </div>
      </div>

      {/* Main */}
      <div className="relative py-20 md:py-28">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-6xl text-[clamp(3rem,8vw,8rem)] font-semibold leading-[0.82] tracking-[-0.09em]"
        >
          BUILDING IDEAS.
          <br />
          <span className="font-serif font-normal italic text-[#cef95b]">
            RESEARCHING THE FUTURE.
          </span>
        </motion.h2>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-wrap gap-2"
        >
          {footerItems.map((item, index) => (
            <motion.span
              key={item}
              whileHover={{
                y: -4,
                borderColor: "#cef95b",
                color: "#f1f0ea",
              }}
              transition={{ duration: 0.2 }}
              className="cursor-default border border-white/10 px-3 py-2 font-mono text-[10px] tracking-[0.1em] text-white/50"
            >
              {item}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Bottom */}
      <div className="relative flex flex-col gap-4 border-t border-white/10 pt-5 font-mono text-[10px] tracking-[0.08em] text-white/40 md:flex-row md:items-center md:justify-between">
        <span>© 2026 NUR MOHAMMOD</span>

        <span className="hidden md:block">
          DESIGNED & BUILT WITH CODE
        </span>

        <motion.button
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.95 }}
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="flex items-center gap-2 self-start text-[#cef95b] md:self-auto"
        >
          BACK TO TOP
          <ArrowUp size={14} />
        </motion.button>
      </div>
    </footer>
  );
}
