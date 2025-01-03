import React, { useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";
import FeatureSection from "./Features";
import Portofolio from "./Portofolio";
import "./App.css";

export default function App() {
  const [activePage, setPage] = useState("home");

  function handleScrollIntoView(page) {
    const target = document.getElementById(page);

    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth",
      });
    }
  }

  return (
    <div className="app">
      <Header handleScrollIntoView={handleScrollIntoView} setPage={setPage} />

      {activePage === "home" && (
        <>
          <Hero handleScrollIntoView={handleScrollIntoView} />
          <Services />
          <FeatureSection />
        </>
      )}

      {activePage === "portofolio" && (
        <>
          <Portofolio />
        </>
      )}

      <Contact />
      <Footer handleScrollIntoView={handleScrollIntoView} />
    </div>
  );
}