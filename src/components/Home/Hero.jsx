import React from "react";
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import "./Hero.css";

const Hero = ({ go, github, linkedin }) => {
  const defaultGo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  const handleGo = go || defaultGo;
  const gh = github || "https://github.com/nur21horin";
  const li = linkedin || "https://www.linkedin.com/in/nur-mohammod-9b63b4306/";
  return (
    <section className="hero">
      <div className="topline">
        <span>BASED IN DHAKA, BD</span>
        <span>SOFTWARE ENGINEER / {new Date().getFullYear()}</span>
      </div>

      <div className="hero-shell">
        <div className="hero-copy">
          <span className="label badge">WEB DEVELOPMENT / DATA / AI</span>
          <h1>
            BUILDING
            <br />
            DIGITAL EXPERIENCES
            <br />
            <i>&amp; INTELLIGENT SYSTEMS.</i>
          </h1>

          <div className="hero-info">
            <div>
              <b>NUR MOHAMMOD</b>
              <p>Web Developer · Data Science · AI · Research</p>
            </div>
            <p>
              I build modern web applications and explore intelligent systems through machine learning, AI, and research.
            </p>
          </div>

          <div className="actions">
            <button className="primary" onClick={() => handleGo("work")}>
              VIEW MY WORK <ArrowDownRight />
            </button>
            <button onClick={() => handleGo("contact")}>
              GET IN TOUCH <ArrowDownRight />
            </button>
          </div>
        </div>

        <aside className="hero-visual">
          <div className="status-card">AVAILABLE FOR WORK</div>
          <div className="portrait-frame">
            <img src="/nur.png" alt="Nur Mohammod" />
          </div>
          <div className="mini-panel">
            <span>Focus</span>
            <strong>React · AI · Full Stack</strong>
          </div>
        </aside>
      </div>

          <div className="foot">
            <span>
              <i /> OPEN TO OPPORTUNITIES
            </span>
            <div>
              <a href={gh}>GITHUB</a>
              <a href={li}>LINKEDIN</a>
              <a href="/nur_resume.pdf">RESUME</a>
            </div>
          </div>
    </section>
  );
};

export default Hero;
