import React from "react";
import "./Hero.css";

export default function Hero({ handleScrollIntoView }) {
  return (
    <section className="hero" id="home">
      <div className="container">
        <h1>ADMIN BUCURESTI SRL</h1>
        <p>
          Empowering businesses with strategic financial management and
          efficient administrative processes.
        </p>
        <button
          className="cta-button"
          onClick={(e) => {
            e.preventDefault();
            handleScrollIntoView("contact");
          }}
        >
          Get in Touch
        </button>
      </div>
    </section>
  );
}
