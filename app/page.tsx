import React from "react";
import Main from "./components/main/Main";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import Portfolio from "./components/portfolio/Portfolio";
import Sidebar from "./components/sidebar/Sidebar";
import Contact from "./components/contact/Contact";

export default function Home() {
  return (
    <>
    <Sidebar />
    <div className="main">
      <Main />
      <About />
      <Resume />
      <Portfolio />
      <Contact />
    </div>
    </>
  );
}
