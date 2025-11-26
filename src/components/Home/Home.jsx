import React, { useState } from "react";
import Navbar from "../Navbaar/Navbaar";
import Hero from "./Hero";
import Skills from "../Tehstak/Skills";
import Footer from "../Footer/Footer";
import CompetitiveProgramming from "../Tehstak/CompetitivePogramming";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Message from "./Message";
import Contact from "../Contacts/Contacts";
import { Outlet } from "react-router";
import LoadingPage from "../../Page/LoadingPage";

const Home = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-white">
      
      <main className="flex-grow">
        <Hero />
        <About />
        <CompetitiveProgramming />
        <Skills />
        <Projects />
        <Message />
        <Contact />
      
      </main>
     
    </div>
  );
};

export default Home;
