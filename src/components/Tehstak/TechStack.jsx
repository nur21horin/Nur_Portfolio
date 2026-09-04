import React from "react";
import "./TechStack.css";

const techStack = [
  { name: "React", icon: "⚛️", category: "Frontend" },
  { name: "JavaScript", icon: "JS", category: "Language" },
  { name: "TypeScript", icon: "TS", category: "Language" },
  { name: "Tailwind CSS", icon: "🌊", category: "Styling" },
  { name: "Node.js", icon: "⬢", category: "Runtime" },
  { name: "Express.js", icon: "Ex", category: "Backend" },
  { name: "MongoDB", icon: "🍃", category: "Database" },
  { name: "Firebase", icon: "🔥", category: "BaaS" },
  { name: "Git", icon: "⎇", category: "Version Control" },
  { name: "GitHub", icon: "⌨", category: "Platform" },
  { name: "Vite", icon: "⚡", category: "Build Tool" },
  { name: "REST APIs", icon: "🔗", category: "Architecture" },
  { name: "C++", icon: "C++", category: "Language" },
  { name: "Java", icon: "☕", category: "Language" },
  { name: "Python", icon: "🐍", category: "Language" },
  { name: "HTML5", icon: "</>", category: "Markup" },
  { name: "CSS3", icon: "🎨", category: "Styling" },
  { name: "VS Code", icon: "💻", category: "Tool" },
];

const tickerOne = ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"];
const tickerTwo = ["Python", "Scikit-learn", "LangChain", "Mistral AI", "Streamlit", "Git", "Postman", "Vite"];

const stack = {
  Frontend: ["React", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS"],
  Backend: ["Node.js", "Express.js", "Laravel"],
  Database: ["MongoDB", "MySQL", "PostgreSQL", "SQLite"],
  "AI / Data": ["Python", "Machine Learning", "Scikit-learn", "LangChain", "Mistral AI", "Streamlit"],
  Tools: ["Git", "VS Code", "Postman", "Vite"],
};

const TechStack = () => {
  return (
    // <section
    //   id="tech-stack"
    //   className="py-20 md:py-28 relative overflow-hidden bg-slate-950 text-white border-y border-white/5"
    // >
    //   <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-950 to-slate-900/50 pointer-events-none"></div>

    //   <div className="absolute top-10 left-6 md:left-20 text-[10px] tracking-[0.3em] text-white/30 font-mono uppercase">
    //     [ 03 / Tools ]
    //   </div>
    //   <div className="absolute top-10 right-6 md:right-20 text-[10px] tracking-[0.3em] text-white/30 font-mono uppercase">
    //     Auto · Loop · ∞
    //   </div>

    //   <div className="container mx-auto px-6 relative z-10 mb-14">
    //     <div className="text-center">
    //       <div className="inline-flex items-center gap-3 mb-5">
    //         <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-400"></div>
    //         <span className="text-[11px] tracking-[0.4em] text-cyan-400/80 font-mono uppercase">
    //           Tech Stack
    //         </span>
    //         <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-400"></div>
    //       </div>
    //       <h2 className="text-4xl md:text-5xl font-bold font-display mb-5 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
    //         Tools & Technologies
    //       </h2>
    //       <p className="text-gray-400 max-w-xl mx-auto leading-relaxed text-sm">
    //         The craft, the instruments — a continuously evolving stack refined
    //         through every commit.
    //       </p>
    //     </div>
    //   </div>

    //   <div className="relative">
    //     <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-slate-950 to-transparent z-20 pointer-events-none"></div>
    //     <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-slate-950 to-transparent z-20 pointer-events-none"></div>

    //     <div className="overflow-hidden">
    //       <div className="marquee-track">
    //         {[...techStack, ...techStack].map((item, idx) => (
    //           <TechCard key={`${item.name}-${idx}`} item={item} />
    //         ))}
    //       </div>
    //     </div>
    //   </div>

    //   <div className="mt-10 flex items-center justify-center gap-3 text-[10px] tracking-[0.3em] text-white/30 font-mono uppercase">
    //     <div className="h-px w-12 bg-white/20"></div>
    //     <span>Infinite Loop · 28s · Linear</span>
    //     <div className="h-px w-12 bg-white/20"></div>
    //   </div>
    // </section>
    <section id="skills" className="pad stack">
  <p className="label">TECH STACK</p>

  <h2>
    TOOLS I USE
    <br />
    TO <i>THINK &amp; BUILD.</i>
  </h2>

  {/* First Infinite Row */}
  <div
    className="marquee"
    aria-label="Technology stack marquee"
  >
    <div className="marquee-track">
      {[...tickerOne, ...tickerOne].map((x, i) => (
        <article className="stack-tile" key={`marquee1-${x}-${i}`}> 
          <span className="stack-tile-name">{x}</span>
        </article>
      ))}
    </div>
  </div>

  {/* Second Infinite Row - Reverse */}
  <div
    className="marquee"
    aria-label="Technology stack marquee secondary"
  >
    <div className="marquee-track marquee-track-reverse">
      {[...tickerTwo, ...tickerTwo].map((x, i) => (
        <article
          className="stack-tile stack-tile-alt"
          key={`marquee2-${x}-${i}`}
        >
          <span className="stack-tile-name">{x}</span>    
        </article>
      ))}
    </div>
  </div>

  <div className="stack-grid">
    {Object.entries(stack).map(([k, v]) => (
      <section key={k} className="stack-card">
        <small>{k}</small>

        <p>
          {v.map((x) => (
            <span key={x}>{x}</span>
          ))}
        </p>
      </section>
    ))}
  </div>
  </section>
  );
};

export default TechStack;