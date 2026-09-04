import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import "./ProjectShowcase.css";
import "../Tehstak/TechStack.css";
const PALETTES = {
  github: { from: "#0e1116", to: "#1a2230", accent: "#cef95b", ink: "#e8e8df" },
  code:    { from: "#10141a", to: "#1d262f", accent: "#65d5df", ink: "#e8e8df" },
  plate:   { from: "#0e1a14", to: "#1a2a22", accent: "#a8e063", ink: "#e8e8df" },
  movie:   { from: "#16121d", to: "#2a2238", accent: "#cf91ee", ink: "#efe5ff" },
  bot:     { from: "#0c1622", to: "#18283b", accent: "#7fb6ff", ink: "#e2ecff" },
  health:  { from: "#111a14", to: "#1f2a22", accent: "#cef95b", ink: "#e8e8df" },
  default: { from: "#0e1116", to: "#1a1d24", accent: "#cef95b", ink: "#f1f0ea" },
};

const EASE = [0.22, 0.2, 0.36, 1];

function ProjectVisual({ project }) {
  const palette = PALETTES[project.kind] || PALETTES.default;
  const titleLines = (project.title || "PROJECT").toUpperCase();

  return (
    <div className="psv-wrap">
      <div
        className="psv"
        style={{
          background: `linear-gradient(150deg, ${palette.from} 0%, ${palette.to} 100%)`,
          color: palette.ink,
        }}
      >
        {project.image ? (
          <img className="psv-image" src={project.image} alt={project.title} />
        ) : (
          <>
            <div className="psv-grid" />
            <div className="psv-noise" />
            <div className="psv-glow" style={{ background: `radial-gradient(circle at 75% 25%, ${palette.accent}33, transparent 55%)` }} />

            <div className="psv-meta">
              <span className="psv-meta-l">{project.year || "2026"}</span>
              <span className="psv-meta-r">{project.kind?.toUpperCase() || "PROJECT"}</span>
            </div>

            <div className="psv-title">
              <span>{titleLines}</span>
            </div>

            <div className="psv-foot">
              <span className="psv-glyph" style={{ color: palette.accent }}>
                {project.kind === "github" ? "</>" : project.kind === "code" ? "share" : project.kind === "plate" ? "plate" : project.kind === "movie" ? "film" : project.kind === "bot" ? "ai" : "◆"}
              </span>
              <span className="psv-stat">
                {project.category?.toUpperCase() || "PROJECT"}
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function SortChip({ category }) {
  const cat = (category || "PROJECT").toLowerCase();
  return (
    <span className={`ps-sort ps-sort-${cat.replace(/[^a-z]/g, "")}`}>
      <i className="ps-sort-dot" />
      {category || "PROJECT"}
    </span>
  );
}

function TechMarquee({ tech }) {
  if (!tech || tech.length === 0) return null;

  return (
    <div className="w-full overflow-hidden">
      <div className="flex w-max animate-tech-marquee hover:[animation-play-state:paused]">
        {[...tech, ...tech].map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="mx-2 shrink-0 whitespace-nowrap rounded-full border border-white/10 px-4 py-2 text-xs font-mono"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ProjectShowcase({ projects, onView }) {
  const allCategories = ["All", "AI", "ML", "Web", "Fullstack"];
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeIndex, setActiveIndex] = useState(0);
  const [position, setPosition] = useState(0);
  const [cardStep, setCardStep] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const dragStartX = useRef(0);
  const isDragging = useRef(false);
  const railRef = useRef(null);

  const normalizedCategories = useMemo(
    () => ({
      "AI": "AI",
      "FULL STACK": "Fullstack",
      "MACHINE LEARNING": "ML",
      "WEB": "Web",
    }),
    []
  );

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => normalizedCategories[p.category] === activeCategory);
  }, [projects, activeCategory, normalizedCategories]);

  const total = filteredProjects.length;
  const loopedProjects = useMemo(() => {
    if (total <= 1) return filteredProjects;
    return [...filteredProjects, ...filteredProjects];
  }, [filteredProjects, total]);

  const measureStep = useCallback(() => {
    const track = railRef.current;
    if (!track) return 0;
    const slide = track.querySelector(".ps-slide");
    if (!slide) return 0;
    const style = getComputedStyle(track);
    const gap = parseFloat(style.gap || style.columnGap || "0");
    return slide.getBoundingClientRect().width + gap;
  }, []);

  useEffect(() => {
    if (!total) return;
    const updateStep = () => {
      const step = measureStep();
      if (!step) return;
      setCardStep(step);
    };

    updateStep();
    window.addEventListener("resize", updateStep);
    return () => window.removeEventListener("resize", updateStep);
  }, [measureStep, total, activeCategory]);

  useEffect(() => {
    if (!total) return;
    const wrappedPosition = ((position % total) + total) % total;
    setActiveIndex(wrappedPosition);
  }, [position, total]);

  useEffect(() => {
    if (position >= total && total > 1) {
      const raf = requestAnimationFrame(() => setPosition(0));
      return () => cancelAnimationFrame(raf);
    }
  }, [position, total]);

  const handleCategoryChange = useCallback((category) => {
    setActiveCategory(category);
    setPosition(0);
    setActiveIndex(0);
  }, []);

  const goToSlide = useCallback((nextPosition) => {
    if (!total) return;
    setPosition(Math.max(0, Math.min(nextPosition, total)));
  }, [total]);

  const stepCarousel = useCallback((direction) => {
    if (!total) return;
    setPosition((prev) => {
      if (direction > 0) {
        const next = prev + 1;
        return next >= total ? total : next;
      }

      if (prev <= 0) return total - 1;
      return prev - 1;
    });
  }, [total]);

  useEffect(() => {
    if (isHovering || total <= 1) return;
    const timer = setInterval(() => {
      setPosition((prev) => {
        const next = prev + 1;
        if (next >= total) return total;
        return next;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isHovering, total]);

  return (
    <section id="projects" className="ps ps-modern-showcase">
      <motion.div
        className="ps-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <div className="ps-heading-row">
          <p className="label"> SOME PROJECTS </p>
        </div>
        <h2 className="ps-heading-title">
         IDEAS
         INTO 
         <i> REALITY.</i>
        </h2>
        <p className="ps-heading-desc">
          A curated index of products, tools, and experiments — each built with
          care, intent, and a clear point of view.
        </p>
      </motion.div>

      <div className="ps-filters">
        {allCategories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`ps-filter-btn ${
              activeCategory === category ? "ps-filter-btn-active" : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div
        className="ps-modern-carousel"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onPointerDown={(event) => {
          isDragging.current = true;
          dragStartX.current = event.clientX;
        }}
        onPointerMove={(event) => {
          if (!isDragging.current) return;
          setDragOffset(event.clientX - dragStartX.current);
        }}
        onPointerUp={() => {
          if (!isDragging.current) return;
          isDragging.current = false;

          if (dragOffset > 70) {
            stepCarousel(-1);
          } else if (dragOffset < -70) {
            stepCarousel(1);
          }

          setDragOffset(0);
        }}
        onPointerLeave={() => {
          if (!isDragging.current) return;
          isDragging.current = false;
          setDragOffset(0);
        }}
      >
        <motion.div
          className="ps-carousel-stage"
          ref={railRef}
          animate={{ x: total ? -position * cardStep + dragOffset : dragOffset }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          onAnimationComplete={() => {
            if (position >= total && total > 1) {
              setPosition(0);
            }
          }}
        >
          {loopedProjects.map((p, idx) => {
            const originalIndex = idx % total;
            const distance = idx - position;
            const absoluteDistance = Math.abs(distance);
            const isActive = total > 0 && originalIndex === activeIndex;

            return (
              <motion.div
                key={`${p.title}-${idx}`}
                className="ps-slide"
                animate={{
                  opacity: absoluteDistance > 2 ? 0.45 : Math.max(0.8, 1 - absoluteDistance * 0.12),
                  scale: isActive ? 1 : absoluteDistance === 1 ? 0.97 : 0.9,
                  x: isActive ? 0 : distance * 20,
                  y: isActive ? 0 : Math.sign(distance || 1) * absoluteDistance * 10,
                  rotate: isActive ? 0 : distance * 3,
                  filter: isActive ? "blur(0px)" : `blur(${Math.min(absoluteDistance, 2) * 0.18}px)`,
                }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                style={{ zIndex: 100 - Math.min(absoluteDistance, 3) }}
              >
                <div className={`ps-carousel-card ${isActive ? "is-active" : ""}`}>
                  <div className="ps-carousel-visual">
                    <ProjectVisual project={p} />
                  </div>
                  <div className="ps-carousel-content">
                    <SortChip category={p.category} />
                    <h3 className="ps-carousel-title">{p.title}</h3>
                    <p className="ps-carousel-desc">{p.description}</p>
                    <TechMarquee tech={p.tech} title={p.title} />
                    <div className="ps-carousel-actions">
                      {p.live && (
                        <a className="ps-cta" href={p.live} target="_blank" rel="nopener noreferrer" onClick={onView}>
                          <span>VIEW PROJECT</span>
                          <span className="ps-cta-arrow">↗</span>
                        </a>
                      )}
                      {p.github && (
                        <a className="ps-ghost" href={p.github} target="_blank" rel="nopener noreferrer" onClick={onView}>
                          GITHUB <i>↗</i>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="ps-carousel-controls">
          <button
            className="ps-carousel-btn"
            onClick={() => stepCarousel(-1)}
            aria-label="Previous project"
          >
            ←
          </button>

          <div className="ps-carousel-counter">
            <span className="ps-carousel-counter-current">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
            <span className="ps-carousel-counter-sep">/</span>
            <span className="ps-carousel-counter-total">
              {String(total).padStart(2, "0")}
            </span>
          </div>

          <button
            className="ps-carousel-btn"
            onClick={() => stepCarousel(1)}
            aria-label="Next project"
          >
            →
          </button>
        </div>

        <div className="ps-carousel-dots  marquee Technology stack marquee">
          {filteredProjects.map((_, idx) => (
            <button
              key={idx}
              className={`ps-carousel-dot ${idx === activeIndex ? "is-active" : ""}`}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to project ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="ps-foot flex items-center justify-between text-[10px] tracking-[0.3em] text-white/30 font-mono uppercase">
        <span>END OF SELECTED WORK</span>
        <span>{total} PROJECTS / 2026</span>
      </div>
    </section>
  );
}
