// import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
// import profilePhoto from "/nur.png";
// import heroBg from "/hero-bg.jpg";
// import { Link, NavLink } from "react-router";

// const handleDownloadResume = () => {
//   const link = document.createElement("a");
//   link.href = "/nur_resume.pdf";
//   link.download = "Nur_Mohammod_Resume.pdf";
//   link.click();
// };

// export default function Hero() {
//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
//       style={{
//         backgroundImage: `url(${heroBg})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundAttachment: "fixed",
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95" />

//       <div className="container mx-auto px-4 md:px-6 relative z-10">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-12">
//           {/* Left Content */}
//           <div className="flex-1 text-center md:text-left animate-slide-in-left">
//             <div className="inline-block mb-4">
//               <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
//                 Full Stack Web Developer
//               </span>
//             </div>

//             <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
//               Hi, I'm{" "}
//               <span className="text-blue-500  bg-clip-text">Nur Mohammod</span>
//             </h1>

//             <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
//               Turning ideas into clean, scalable, and modern web solutions.
//               Passionate about building user-friendly applications with React,
//               Express, and MongoDB.
//             </p>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
//               <NavLink
//                 to={"/works"}
//                 className="group px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium shadow-blue hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
//               >
//                 View My Work
//                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//               </NavLink>

//               <button
//                 onClick={handleDownloadResume}
//                 className="px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/80 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
//               >
//                 <Download className="w-5 h-5" />
//                 Download Resume
//               </button>
//             </div>

//             {/* Social Links */}
//             <div className="flex gap-4 justify-center md:justify-start">
//               <Link
//                 href="https://github.com/nur21horin"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-12 h-12 rounded-full bg-secondary/50 backdrop-blur-sm border border-border/50 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300"
//                 aria-label="GitHub"
//               >
//                 <Github className="w-5 h-5" />
//               </Link>
//               <Link
//                 href="https://www.linkedin.com/in/nur-mohammod-9b63b4306/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-12 h-12 rounded-full bg-secondary/50 backdrop-blur-sm border border-border/50 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300"
//                 aria-label="LinkedIn"
//               >
//                 <Linkedin className="w-5 h-5" />
//               </Link>
//               <Link
//                 href="mailto:nurm98371@gmail.com"
//                 className="w-12 h-12 rounded-full bg-secondary/50 backdrop-blur-sm border border-border/50 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300"
//                 aria-label="Email"
//               >
//                 <Mail className="w-5 h-5" />
//               </Link>
//             </div>
//           </div>

//           {/* Right Content - Profile Photo */}
//           <div className="flex-1 flex justify-center md:justify-end animate-slide-in-right">
//             <div className="relative">
//               <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-3xl opacity-30 animate-float" />
//               <img
//                 src={profilePhoto}
//                 alt="Nur Mohammod - Full Stack Developer"
//                 className="relative w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-primary/20 shadow-2xl hover:scale-105 transition-transform duration-500"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Scroll Indicator */}
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//           <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
//             <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import profilePhoto from "/nur.png";
import heroBg from "/hero-bg.jpg";
import { Link, NavLink } from "react-router";
import { motion } from "framer-motion";

const handleDownloadResume = () => {
  const link = document.createElement("a");
  link.href = "/nur_resume.pdf";
  link.download = "Nur_Mohammod_Resume.pdf";
  link.click();
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Left Content */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
                Full Stack Web Developer
              </span>
            </div>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
            >
              Hi, I'm{" "}
              <span className="text-blue-500 bg-clip-text">Nur Mohammod</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.4 }}
            >
              Turning ideas into clean, scalable, and modern web solutions.
              Passionate about building user-friendly applications with React,
              Express, and MongoDB.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.6 }}
            >
              <NavLink
                to={"/works"}
                className="group px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium shadow-blue hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                View My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </NavLink>

              <button
                onClick={handleDownloadResume}
                className="px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/80 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <Link
                href="https://github.com/nur21horin"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary/50 backdrop-blur-sm border border-border/50 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/nur-mohammod-9b63b4306/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary/50 backdrop-blur-sm border border-border/50 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:nurm98371@gmail.com"
                className="w-12 h-12 rounded-full bg-secondary/50 backdrop-blur-sm border border-border/50 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Photo */}
          <motion.div
            className="flex-1 flex justify-center md:justify-end"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-3xl opacity-30 animate-float" />
              <motion.img
                src={profilePhoto}
                alt="Nur Mohammod - Full Stack Developer"
                className="relative w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-primary/20 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
