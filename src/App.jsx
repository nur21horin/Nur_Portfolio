import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUp, ArrowUpRight, Github, Linkedin, Mail, Moon, Send, Sun } from "lucide-react";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";
import "./App.css";
import "./components/Home/Hero.css";
import "./components/Navbaar/Navbaar.css";
import "./components/About/About.css";
import "./components/Tehstak/Skills.css";
import "./components/Research/Research.css";
import "./components/GitHub/GitHub.css";
import "./components/ProblemSolving/ProblemSolving.css";
import "./components/Contacts/Contacts.css";
import Navbar from "./components/Navbaar/Navbaar";
import ProjectShowcase from "./components/Showcase/ProjectShowcase";
import About from "./components/About/About";
import "./components/Showcase/ProjectShowcase.css";
import TechStack from "./components/Tehstak/TechStack";
import Footer from "./components/Footer/Footer";



const github = "https://github.com/nur21horin";
const linkedin = "https://www.linkedin.com/in/nur-mohammod-9b63b4306/";
const projects = [
  ["01","GitHub Profile Viewer + AI","AI","A developer tool combining GitHub profile search, repository intelligence, Gemini AI assistance, and streaming responses.",["Next.js","TypeScript","GitHub API","Gemini API"],"https://github-user-profile-show.vercel.app/",github,"github","/github_profile_user.png"],
  ["02","CodeShare","FULL STACK","A community platform where programmers share solutions, interact through likes and comments, filter by tags, and build public profiles.",["React","Node.js","Express","MongoDB","Firebase"],"https://codeshare21.netlify.app/","https://github.com/nur21horin/codeShare","code","/codeshare.png"],
  ["03","PlateShare","FULL STACK","A community food-sharing platform for donating surplus food, making requests, managing contributions, and reducing waste.",["React","Node.js","Express","MongoDB","Firebase Auth"],"https://dazzling-babka-75b8f8.netlify.app/","https://github.com/nur21horin/Assingment10","plate","/plateshare.png"],
  ["04","Movie Recommender","MACHINE LEARNING","An interactive content-based recommendation experience built around preprocessing, feature engineering, and cosine similarity.",["Python","Pandas","NumPy","Scikit-learn","Streamlit"],"https://movierecommendersystem-nur21horin.streamlit.app/","https://github.com/nur21horin/Movie_recommender_system","movie","/movie_recommender.png"],
  ["05","Mood-Based AI Agent","AI","An interactive AI chatbot that adapts its personality to Happy, Funny, Sad, and Angry moods, demonstrating prompt engineering, conversational AI, and context-aware interactions.",["Python","LangChain","Mistral AI","Streamlit","Prompt Engineering"],"https://multipleaiagentiaichatbot.streamlit.app/",github,"bot","/Mood_based_ai.png"],
  ["06","FunnyBot AI","AI","A humorous conversational AI chatbot exploring LangChain, Mistral AI, conversational memory, prompt engineering, and deploying AI applications with Streamlit.",["Python","LangChain","Mistral AI","Streamlit","python-dotenv"],"https://funnybot-ai.streamlit.app/","https://github.com/nur21horin/nur21horin/blob/main/YOUR_FUNNYBOT_GITHUB_REPO_LINK","bot","/FUnny-bot.png"],
  ["07","Dr. M. Amjad Hossain","WEB","A responsive healthcare experience for medical information, patient care, treatment specialties, and appointments.",["Next.js","React","Tailwind CSS"],"https://website-redesign-git-main-nur-mohammods-projects.vercel.app/",github,"health","/dr-amjad.png"],
  ["08","Sushi Shop","WEB","A modern sushi restaurant website with menu browsing, online ordering, reservation booking, and a polished dining experience.",["React","Tailwind CSS","Node.js","Express","MongoDB"],"https://sushi-shop-demo.netlify.app/",github,"health",""],
];
const research = [["01","Explainable AI","Making model behaviour easier to inspect and communicate."],["02","Anomaly Detection","Finding meaningful patterns and deviations in complex data."],["03","Multi-Agent LLM Systems","Exploring collaborative, tool-using AI workflows."],["04","AI Stability","Thinking about reliable and robust intelligent systems."],["05","Machine Learning","Learning from data through practical experimentation."],["06","Agentic AI","Investigating goal-oriented systems that reason and act."]];
const stack={Frontend:["React","Next.js","JavaScript","TypeScript","HTML","CSS","Tailwind CSS"],Backend:["Node.js","Express.js","Laravel"],Database:["MongoDB","MySQL","PostgreSQL","SQLite"],"AI / Data":["Python","Machine Learning","Scikit-learn","LangChain","Mistral AI","Streamlit"],Tools:["Git","VS Code","Postman","Vite"]};
const tickerOne=["React","Next.js","JavaScript","TypeScript","Tailwind CSS","Node.js","Express.js","MongoDB"];
const tickerTwo=["Python","Scikit-learn","LangChain","Mistral AI","Streamlit","Git","Postman","Vite"];
const showcaseProjects = projects.map(([num, title, category, description, tech, live, repo, kind, image]) => ({
  num,
  title,
  category,
  description,
  tech,
  live,
  github: repo,
  kind,
  year: "{new Date().getFullYear()}",
  image,
}));
function Visual({v}){return <div className={`visual ${v}`}><div className="dots">● ● ●</div><b>{v==="github"?"PROFILE\nINTELLIGENCE":v==="code"?"const\nshare = code":v==="plate"?"GOOD FOOD\nBELONGS\nEVERYWHERE.":v==="movie"?"FILMS\nFOR YOU":v==="bot"?"THINK\nWITH AI":"CARE,\nMADE CLEAR."}</b><span>{v==="movie"?"MATCH 94%":v==="bot"?"MULTI-AGENT / 01":"↗"}</span></div>}
export default function App() {
  const [dark, setDark] = useState(true);
  const [stats, setStats] = useState({ repos: 122, followers: 15 });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [directNav, setDirectNav] = useState(false);

  useEffect(() => {
    fetch("https://api.github.com/users/nur21horin")
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => d && setStats({ repos: d.public_repos, followers: d.followers }))
      .catch(() => {});
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    if (id === "projects") setDirectNav(true);
  };

  const submit = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs
      .send(
        "service_2kiuov9",
        "template_2dnijno",
        { from_name: form.name, from_email: form.email, message: form.message },
        "GQZBJ237S1mmyR3Mf"
      )
      .then(() => {
        toast.success("Message sent — thank you.");
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => toast.error("Message failed. Please email me directly."))
      .finally(() => setSending(false));
  };

  return (
    <div className={dark ? "site" : "site light"}>
      <Toaster position="top-center" />
      <Navbar dark={dark} setDark={setDark} />

      <main id="top">
        <section className="hero">
          <div className="topline">
            <span>BASED IN DHAKA, BD</span>
            <span>SOFTWARE ENGINEER / 2026</span>
          </div>
          <div className="hero-shell">
            <div className="hero-copy">
              <span className="label badge">WEB DEVELOPMENT / DATA / AI</span>
              <motion.h1
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.span
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                  className="hero-line"
                >
                  BUILDING
                </motion.span>
                <br />
                <motion.span
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
                  className="hero-line"
                >
                  DIGITAL EXPERIENCES
                </motion.span>
                <br />
                <motion.span
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                  className="hero-line"
                >
                  <i>&amp; INTELLIGENT SYSTEMS.</i>
                </motion.span>
              </motion.h1>
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
                <button className="primary" onClick={() => go("projects")}>
                  VIEW MY WORK <ArrowDownRight />
                </button>
                <button onClick={() => go("contact")}>
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
              <a href={github}>GITHUB</a>
              <a href={linkedin}>LINKEDIN</a>
              <a href="/nur_resume.pdf">RESUME</a>
            </div>
          </div>
        </section>
        <About></About>
        <TechStack></TechStack>

        <ProjectShowcase projects={showcaseProjects} directNav={directNav} onView={() => setDirectNav(false)} />

        <section id="research" className="research">
          <div>
            <p className="label"> RESEARCH / AI</p>
            <h2>
              CURIOUS
              <br />
              BY <i>DESIGN.</i>
            </h2>
            <p>
              Areas I’m actively exploring as I move toward data-focused and research-informed work.
            </p>
          </div>

          <div className="research-list">
            {research.map((r) => (
              <div key={r[1]}>
                <small>{r[0]}</small>
                <h3>{r[1]}</h3>
                <p>{r[2]}</p>
                <ArrowUpRight />
              </div>
            ))}
          </div>
        </section>

        <section className="github pad">
          <div>
            <p className="label"> OPEN SOURCE / GITHUB </p>
            <h2>
              BUILDING
              <br />
              IN <i>PUBLIC.</i>
            </h2>
            <p>
              Selected work, active learning, and a growing archive of experiments are available on GitHub.
            </p>
            <a className="primary" href={github}>
              VISIT GITHUB <Github />
            </a>
          </div>

          <div className="panel">
            <div>
              ● LIVE PROFILE <a href={github}>@nur21horin <ArrowUpRight /></a>
            </div>
            <main>
              {Array.from({ length: 77 }, (_, i) => (
                <i className={`c${(i * 7 + i % 5) % 5}`} key={i} />
              ))}
            </main>
            <footer>
              <span>
                <b>{stats.repos}</b> repositories
              </span>
              <span>
                <b>{stats.followers}</b> followers
              </span>
              <span>
                <b>34</b> stars
              </span>
            </footer>
          </div>
        </section>

        <section className="problem pad">
          <p className="label">PROBLEM SOLVING</p>
          <div>
            <h2>
              ALGORITHMIC
              <br />
              <i>THINKING.</i>
            </h2>
            <p>
              Competitive programming is where I practise clarity, constraints, and efficient solutions.
            </p>
          </div>
          <div>
            {[
              ["LEETCODE · nur1089", "https://leetcode.com/u/nur1089"],
              ["CODEFORCES · nurmohammod", "https://codeforces.com/profile/nurmohammod"],
              ["CODECHEF · nurm98371", "https://www.codechef.com/users/nurm98371"],
              ["GEEKSFORGEEKS · nur21hi1zw", "https://auth.geeksforgeeks.org/user/nur21hi1zw"],
            ].map((x) => (
              <a href={x[1]} key={x[0]}>
                {x[0]} <ArrowUpRight />
              </a>
            ))}
          </div>
        </section>

        <section id="contact" className="contact">
          <div>
            <p className="label"> CONTACT </p>
            <h2>
              LET’S BUILD
              <br />
              SOMETHING
              <br />
              <i>MEANINGFUL.</i>
            </h2>
            <p>Have an idea, project, or research opportunity?</p>
            <div className="social">
              <a href="mailto:nurm98371@gmail.com">
                EMAIL <Mail />
              </a>
              <a href={github}>
                GITHUB <Github />
              </a>
              <a href={linkedin}>
                LINKEDIN <Linkedin />
              </a>
            </div>
          </div>

          <form onSubmit={submit}>
            <label>
              NAME
              <input
                required
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </label>
            <label>
              EMAIL
              <input
                required
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </label>
            <label>
              MESSAGE
              <textarea
                required
                rows="5"
                placeholder="Tell me what you’re thinking."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </label>
            <button className="primary" disabled={sending}>
              {sending ? "SENDING..." : "SEND MESSAGE"}
              <Send />
            </button>
          </form>
        </section>
      </main>

      <footer className="site-footer">        
        <div className="footer-bottom">
        <span><motion.span
  whileHover={{ letterSpacing: "0.18em" }}
  transition={{ duration: 0.3 }}
  className="cursor-default text-[#f1f0ea]"
>
  NUR MOHAMMOD
</motion.span></span>
        <span><motion.span
  initial={{ opacity: 0, x: 15 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ delay: 0.2, duration: 0.5 }}
  viewport={{ once: true }}
  className="text-[#cef95b]"
>
  © {new Date().getFullYear()}
</motion.span></span>
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="footer-top-btn"
          >
            BACK TO TOP <ArrowUp size={12} />
          </motion.button>
        </div>
      </footer>
     
    </div>
  );
}
