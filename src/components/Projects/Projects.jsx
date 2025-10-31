import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "GreenNest Platform",
      description:
        "A full-featured online flower platform with user authentication, product management, cart functionality",
      tech: ["React", "Firebase", "TailwindCSS", "DaisyUi"],
      liveLink: "https://greennestplantsproject.netlify.app/",
      githubLink: "https://github.com/programming-hero-web-course-4/b12a7-customer-support-zone-nur21horin",
      gradient: "from-cyan-400/30 to-blue-500/30",
    },
    {
      title: "Hero.IO App",
      description:
        "A modern web application for discovering , browsing , and managing top mobile and web apps. ##TechNology Built with **React +Vite ** and also Tailwindcss + DaisyUi ** along with ** React-Router + Toastify",
      tech: ["React", "React ROuter", "Tailwind CSS", "DaisyUI"],
      liveLink: "https://aloio.netlify.app/allapps",
      githubLink: "https://github.com/nur21horin/B12-A08-Hero-Apps",
      gradient: "from-cyan-400/30 to-blue-500/30",
    },
    {
      title: "IELTS Master Platform",
      description:
        "IELTS Master Platform is a comprehensive web application designed to help users prepare for the IELTS exam effectively. Built using Express.js and MongoDB",
      tech: ["React", "Express.js", "MongoDB"],
      liveLink: "https://ieltsmaster9.netlify.app/",
      githubLink: "#",
      gradient: "from-cyan-400/30 to-blue-500/30",
    },
    {
      title: "Sushi Shop",
      description:
        "Sakura Sushi Website – A modern, responsive web application showcasing a sushi restaurant. Built with HTML, CSS, and JavaScript, the site features an interactive menu, engaging UI elements, and smooth navigation. ",
      tech: ["JavaScript","CSS","HTMl"],
      liveLink: "https://sushishopbd.netlify.app/",
      githubLink: "https://github.com/nur21horin/Sushi_Themed",
      gradient: "from-cyan-400/30 to-blue-500/30",
    },
  ];

  // Motion variants for staggered animation
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section
      id="projects"
      className="py-20 md:py-32 relative bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
            A showcase of my full-stack web development projects built with modern technologies.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group overflow-hidden rounded-2xl border border-cyan-500/20 bg-slate-800/60 backdrop-blur shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />

              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold font-display mb-3 text-white group-hover:text-cyan-400 transition-all duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm rounded-md bg-cyan-500/10 text-cyan-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full border border-cyan-400/40 rounded-md py-2 text-sm hover:bg-cyan-400/10 transition-all duration-300 text-white"
                  >
                    <ExternalLink className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    Live Demo
                  </a>

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full border border-cyan-400/40 rounded-md py-2 text-sm hover:bg-cyan-400/10 transition-all duration-300 text-white"
                  >
                    <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
