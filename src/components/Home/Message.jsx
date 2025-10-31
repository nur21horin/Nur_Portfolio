import React from "react";
import { Code2, Zap } from "lucide-react";

const Message = () => {
  return (
    <section
      id="message"
      className="py-20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white relative overflow-hidden"
    >
      {/* Gradient overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* Header */}
        <div className="mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Core Competencies
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mb-6" />
        </div>

        {/* Content Box */}
        <div
          className="max-w-3xl mx-auto p-8 rounded-2xl bg-slate-800/60 backdrop-blur border border-cyan-500/20 shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="p-4 rounded-full bg-cyan-500/10 border border-cyan-400/20">
              <Code2 className="h-10 w-10 text-cyan-400" />
            </div>

            <p className="text-gray-300 leading-relaxed text-lg">
              Proficient in implementing and optimizing{" "}
              <span className="font-semibold text-cyan-400">
                data structures
              </span>{" "}
              (arrays, linked lists, trees, graphs, hash tables) and{" "}
              <span className="font-semibold text-cyan-400">algorithms</span>{" "}
              (sorting, searching, dynamic programming, greedy algorithms). <br />
              Strong understanding of{" "}
              <span className="font-semibold text-cyan-400">
                time and space complexity
              </span>{" "}
              analysis, with experience in solving complex algorithmic
              challenges using{" "}
              <span className="font-semibold text-cyan-400">C++</span>.
            </p>

            <div className="hidden md:block p-4 rounded-full bg-blue-500/10 border border-blue-400/20">
              <Zap className="h-10 w-10 text-blue-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Message;
