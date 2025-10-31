import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/Home/Home.jsx";
import Skills from "./components/Tehstak/Skills.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Contact from "./components/Contacts/Contacts.jsx";
import About from "./components/About/About.jsx";
import Projects from "./components/Projects/Projects.jsx";
import CompetitiveProgramming from "./components/Tehstak/CompetitivePogramming.jsx";
import Hero from "./components/Home/Hero.jsx";
import { ErrorIcon } from "react-hot-toast";
import ErrorPage from "./Page/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: <Hero />,
      },
      {
        path: "works",
        element: <Projects />,
      },
      {
        path: "cp",
        element: <CompetitiveProgramming />,
      },
      {
        path: "skills",
        element: <Skills />,
      },
      {
        path: "about-me",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/footer",
    element: <Footer />,
  },
  {
    path:"*",
    element:<ErrorPage/>,
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
