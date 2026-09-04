import React from "react";
import { ArrowUpRight } from "lucide-react";
import "./Research.css";

const Research = () => {
  return (
    <section id="research" className="research">
      <div>
        <p className="label">( 03 — RESEARCH / AI )</p>
        <h2>
          CURIOUS
          <br />
          BY <i>DESIGN.</i>
        </h2>
        <p>
          Areas I'm actively exploring as I move toward data-focused and research-informed work.
        </p>
      </div>

      <div className="research-list">
        {[
          ["01", "Explainable AI", "Making model behaviour easier to inspect and communicate."],
          ["02", "Anomaly Detection", "Finding meaningful patterns and deviations in complex data."],
          ["03", "Multi-Agent LLM Systems", "Exploring collaborative, tool-using AI workflows."],
          ["04", "AI Stability", "Thinking about reliable and robust intelligent systems."],
          ["05", "Machine Learning", "Learning from data through practical experimentation."],
          ["06", "Agentic AI", "Investigating goal-oriented systems that reason and act."],
        ].map((r) => (
          <div key={r[1]}>
            <small>{r[0]}</small>
            <h3>{r[1]}</h3>
            <p>{r[2]}</p>
            <ArrowUpRight />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Research;
