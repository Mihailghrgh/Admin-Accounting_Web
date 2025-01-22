import React from "react";
import "./Hero.css";

export default function Hero({ handleScrollIntoView }) {
  return (
    <section className="hero" id="home">
      <div className="container">
        <h1>Damil Administratie SRL</h1>
        <p>
          Împuternicim asociațiile de proprietari printr-un management financiar
          strategic și procese administrative eficiente, pentru o administrare
          modernă și bine organizată a blocurilor.
        </p>
        <button
          className="cta-button"
          onClick={(e) => {
            e.preventDefault();
            handleScrollIntoView("contact");
          }}
        >
          Contactează-ne!
        </button>
      </div>
    </section>
  );
}
