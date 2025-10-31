import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Award, Target, Zap, Trophy } from "lucide-react";
import Message from "../Home/Message";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const platforms = [
  {
    name: "CodeChef",
    description: "Active problem solver with consistent participation",
    stats: [
      { label: "Problems Solved", value: "150+" },
      { label: "Max Rating", value: "★★★" },
    ],
  },
  {
    name: "Codeforces",
    description: "Regular contest participant and problem solver",
    stats: [
      { label: "Problems Solved", value: "200+" },
      { label: "Rating", value: "Specialist" },
    ],
  },
];

const achievements = [
  {
    icon: Trophy,
    text: "500+ Problems Solved Across Platforms",
    color: "text-cyan-400",
  },
  {
    icon: TrendingUp,
    text: "Consistent Rating Growth",
    color: "text-blue-400",
  },
  {
    icon: Target,
    text: "Focus on Algorithm Optimization",
    color: "text-cyan-400",
  },
  {
    icon: Zap,
    text: "Quick Problem Analysis Skills",
    color: "text-blue-400",
  },
];

const CompetitiveProgramming = () => {
  return (
    <section
      id="competitive-programming"
      className="py-20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white relative overflow-hidden"
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Competitive Programming
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Honing algorithmic thinking and problem-solving through coding
            challenges and online contests.
          </p>
        </div>

        {/* Platform Cards */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-8 rounded-2xl bg-slate-800/70 backdrop-blur border border-cyan-500/20 hover:border-cyan-400 hover:shadow-cyan-500/10 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-2 text-cyan-400">
                {platform.name}
              </h3>
              <p className="text-gray-400 mb-6">{platform.description}</p>

              <div className="grid grid-cols-2 gap-4">
                {platform.stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-semibold text-blue-400 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-6 rounded-xl bg-slate-800/60 border border-cyan-500/20 text-center hover:border-cyan-400 hover:shadow-cyan-500/10 transition-all duration-300"
            >
              <achievement.icon
                className={`w-8 h-8 mx-auto mb-3 ${achievement.color}`}
              />
              <p className="text-gray-300 text-sm font-medium">
                {achievement.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Include Core Competence Section */}
      <div className="mt-20">
        <Message />
      </div>
    </section>
  );
};

export default CompetitiveProgramming;
