import React from "react";
import Navbar from "../components/Navbaar/Navbaar";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import "./RootLayout.css";


const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Dynamic Pages */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default RootLayout;
