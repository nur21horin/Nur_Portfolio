import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      color: "from-cyan-400 to-blue-500",
      skills: [
        { name: "React.js", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "DaisyUI", level: 85 },
        { name: "JavaScript (ES6+)", level: 90 },
        { name: "HTML5 / CSS3", level: 95 },
      ],
    },
    {
      category: "Backend",
      color: "from-emerald-400 to-green-500",
      skills: [
        { name: "Express.js", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Firebase", level: 85 },
        { name: "REST APIs", level: 88 },
        { name: "Node.js", level: 82 },
      ],
    },
    {
      category: "Programming",
      color: "from-purple-400 to-pink-500",
      skills: [
        { name: "C++", level: 88 },
        { name: "Java", level: 82 },
        { name: "C", level: 80 },
        { name: "JavaScript", level: 70 },
        { name: "Python", level: 50 },

      ],
    },
    {
      category: "Tools & Others",
      color: "from-orange-400 to-red-500",
      skills: [
        { name: "Git / GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Vite", level: 88 },
        { name: "Firebase Hosting", level: 85 },
        { name: "Responsive Design", level: 92 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white"
    >
      {/* glowing background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A comprehensive skill set spanning frontend, backend, and
            algorithmic problem-solving — built through practical projects and
            hands-on experience.
          </p>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, i) => (
            <div
              key={i}
              className="p-6 md:p-8 rounded-2xl border border-cyan-500/10 bg-slate-800/60 backdrop-blur shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <h3 className="text-2xl font-bold font-display mb-6 flex items-center gap-3">
                <span
                  className={`w-2 h-8 rounded-full bg-gradient-to-b ${category.color}`}
                ></span>
                {category.category}
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill, j) => (
                  <div key={j}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-200">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-400">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: `${skill.level}%`,
                          transitionDelay: `${i * 0.1 + j * 0.05}s`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
