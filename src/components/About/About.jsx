import React from "react";
import { Code2, Lightbulb, Rocket } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Full Stack Expertise",
      description:
        "Proficient in both frontend and backend technologies, creating seamless web experiences.",
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description:
        "Strong foundation in algorithms and data structures with C++ and Java.",
    },
    {
      icon: Rocket,
      title: "Continuous Learner",
      description:
        "Always exploring new technologies and best practices in web development.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 md:py-32 relative bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white overflow-hidden"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mb-6"></div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left - Description */}
          <div className="space-y-6 animate-fade-in">
            <p className="text-gray-300 leading-relaxed text-lg">
              My journey into development started with{" "}
              <span className="font-semibold text-cyan-400">C++</span> and{" "}
              <span className="font-semibold text-cyan-400">Java</span>, where I
              discovered my passion for solving complex problems and building
              efficient algorithms. This strong foundation in programming logic
              naturally led me to explore web development.
            </p>

            <p className="text-gray-300 leading-relaxed text-lg">
              Today, I specialize in creating modern, scalable web applications
              using <span className="font-semibold text-cyan-400">React.js</span>,{" "}
              <span className="font-semibold text-cyan-400">Express.js</span>, and{" "}
              <span className="font-semibold text-cyan-400">MongoDB</span>. I love
              the entire process of bringing ideas to life—from designing
              intuitive user interfaces to architecting robust backend systems.
            </p>

            <p className="text-gray-300 leading-relaxed text-lg">
              I'm passionate about writing clean, maintainable code and building
              applications that not only work flawlessly but also provide
              exceptional user experiences. Whether it's crafting beautiful
              frontends with <span className="font-semibold text-cyan-400">Tailwind CSS</span> or
              optimizing database queries, I approach every challenge with
              enthusiasm and attention to detail.
            </p>
          </div>

          {/* Right - Highlights */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border border-cyan-500/20 bg-slate-800/60 backdrop-blur shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-all duration-300">
                    <item.icon className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-display text-lg mb-2 text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
