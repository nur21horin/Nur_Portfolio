import React, { useEffect, useState } from "react";
import {
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Database,
  Sparkles,
} from "lucide-react";

const About = () => {
  const github = "https://github.com/nur21horin";
  const [githubStats, setGithubStats] = useState({ repos: "—", followers: "—" });

  useEffect(() => {
    fetch("https://api.github.com/users/nur21horin")
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => {
        if (data) {
          setGithubStats({
            repos: data.public_repos,
            followers: data.followers,
          });
        }
      })
      .catch(() => {});
  }, []);

  const stats = [
    [githubStats.repos, "PUBLIC REPOSITORIES"],
    ["34", "PROFILE STARS"],
    [githubStats.followers, "GITHUB FOLLOWERS"],
    ["500+", "PROBLEMS SOLVED"],
  ];

  const focusAreas = [
    {
      icon: Code2,
      title: "Product-minded engineering",
      text: "I design and ship interfaces that balance UX, performance, and clean code structure.",
    },
    {
      icon: BrainCircuit,
      title: "Research-driven learning",
      text: "I love pulling ideas from data, ML, and AI experiments into practical product thinking.",
    },
    {
      icon: Database,
      title: "Full-stack execution",
      text: "From APIs to databases to frontend systems, I build the end-to-end pieces that make products work.",
    },
  ];

  return (
    <section id="about" className="about pad">
      <div className="about-shell">
        <div className="about-head">
          <p className="label about-label">ABOUT</p>
          <h2>
            I BUILD FOR THE WEB,
            <br />
            <i>LEARN THROUGH DATA,</i>
            <br />
            AND EXPLORE INTELLIGENT SYSTEMS.
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-lede">
            <p>
              I&apos;m Nur Mohammod, a web developer and problem solver based in
              Dhaka. My foundation in C++ and Java led me from algorithms into
              building practical, user-centred software.
            </p>
          </div>

          <div className="about-body">
            <div className="about-copy">
              <p>
                Today I work across <b>React</b>, <b>Next.js</b>, <b>Node.js</b>,
                <b> Express</b>, <b>MongoDB</b>, and modern web tooling—while
                growing deeper in data science, machine learning, AI, and
                research-driven engineering.
              </p>
            </div>

            <ul className="about-cards">
              {focusAreas.map((item, index) => {
                const Icon = item.icon;

                return (
                  <li
                    key={item.title}
                    className="about-card"
                    style={{ "--i": index }}
                  >
                    <span className="about-card-icon">
                      <Icon size={18} />
                    </span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                    <span className="about-card-corner" aria-hidden="true" />
                  </li>
                );
              })}
            </ul>

            <div className="about-actions">
              <a className="primary" href={github} target="_blank" rel="noreferrer">
                MORE ON GITHUB
                <ArrowUpRight size={16} />
              </a>
              <a className="ghost" href="#projects">
                VIEW PROJECTS
              </a>
            </div>
          </div>
        </div>

        <div className="stats" aria-label="Personal stats">
          {stats.map(([value, label]) => (
            <div key={label} className="stats-item">
              <b>{value}</b>
              <span>{label}</span>
            </div>
          ))}
          <a className="stats-cta" href={github} target="_blank" rel="noreferrer">
            GitHub
            <Sparkles size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
