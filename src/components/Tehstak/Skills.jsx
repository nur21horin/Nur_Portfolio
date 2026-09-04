import React from "react";
import "./Skills.css";

const Skills = () => {
  const stack = {
    Frontend: ["React", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS"],
    Backend: ["Node.js", "Express.js", "Laravel"],
    Database: ["MongoDB", "MySQL", "PostgreSQL", "SQLite"],
    "AI / Data": ["Python", "Machine Learning", "Scikit-learn", "LangChain", "Mistral AI", "Streamlit"],
    Tools: ["Git", "VS Code", "Postman", "Vite"],
  };

  const tickerOne = ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"];
  const tickerTwo = ["Python", "Scikit-learn", "LangChain", "Mistral AI", "Streamlit", "Git", "Postman", "Vite"];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-header">
        <p className="label">( 04 — TECH STACK )</p>
        <h2>
          TOOLS I USE
          <br />
          TO <i>THINK &amp; BUILD.</i>
        </h2>
      </div>

      <div className="marquee-wrapper">
        <div className="marquee">
          <div className="marquee-track">
            {[...tickerOne, ...tickerOne].map((x, i) => (
              <div className="glass-card" key={`t1-${x}-${i}`}>
                <span className="card-index">{String((i % tickerOne.length) + 1).padStart(2, "0")}</span>
                <span className="card-name">{x}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="marquee marquee-reverse">
          <div className="marquee-track">
            {[...tickerTwo, ...tickerTwo].map((x, i) => (
              <div className="glass-card" key={`t2-${x}-${i}`}>
                <span className="card-index">{String((i % tickerTwo.length) + 1).padStart(2, "0")}</span>
                <span className="card-name">{x}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="stack-index">
        {Object.entries(stack).map(([category, items]) => (
          <div className="index-row" key={category}>
            <div className="index-meta">
              <span className="index-category">{category}</span>
              <span className="index-count">{String(items.length).padStart(2, "0")} tools</span>
            </div>
            <div className="index-items">
              {items.map((item) => (
                <span className="index-item" key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
