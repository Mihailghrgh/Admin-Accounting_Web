import React from "react";
import "./Features.css";
import ProgressBarComponent from "./ProgressBar";
import { useState } from "react";
import { useEffect } from "react";

function Feature({
  title,
  description,
  icon,
  imageOnRight = true,
  ProgressBar,
  bar,
  imageSrc,
}) {
  return (
    <div
      className={`feature-container ${imageOnRight ? "image-right" : "image-left"}`}
      id="about"
    >
      <div className="content-side">
        <div className="icon-container">
          <img src={icon} alt="" className="feature-icon" />
        </div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      {bar === true ? (
        <div className="image-side">{ProgressBar}</div>
      ) : (
        <img className="image-side" src={imageSrc} alt=""></img>
      )}
    </div>
  );
}

export default function FeatureSection({ id }) {
  const features = [
    {
      title:
        "Administrare Financiară și Fiscală pentru Asociații de Proprietari",
      description:
        "Ne ocupăm de gestionarea eficientă a fondurilor și de respectarea obligațiilor fiscale pentru asociația ta de proprietari. De la întocmirea și depunerea declarațiilor fiscale până la evidența contabilă clară și transparentă, îți garantăm o administrare financiară fără griji. Ai acces la rapoarte detaliate și soluții personalizate pentru o gestionare corectă și eficientă.",
      imageSrc: "/placeholder.svg?height=400&width=400",
      icon: "https://www.svgrepo.com/show/678/calculator.svg",
      progressBar: <ProgressBarComponent />,
      bar: true,
      imageOnRight: true,
    },
    {
      title: "Servicii Administrative pentru Blocuri fără Griji",
      description:
        "De la organizarea adunărilor generale și gestionarea relației cu furnizorii de utilități, până la plata facturilor și comunicarea transparentă cu locatarii, ne ocupăm de toate detaliile administrative. Echipa noastră se asigură că blocul tău funcționează fără probleme și că toți locatarii sunt mulțumiți. Ai partenerul de încredere pentru o administrare completă!",
      imageSrc:
        "https://plus.unsplash.com/premium_photo-1661311947753-065ef4af9087?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: "https://www.svgrepo.com/show/6787/signing-the-contract.svg",
      imageOnRight: false,
    },
    {
      title: "Întreținere și Curățenie la Standardele Tale",
      description:
        "Asigurăm întreținerea spațiilor comune, astfel încât blocul tău să fie mereu curat, sigur și bine întreținut. Echipele noastre de curățenie și întreținere se ocupă de toate detaliile, de la curățarea scărilor și a lifturilor, până la gestionarea eventualelor reparații. Ne asigurăm că locatarii se bucură de un mediu plăcut și bine organizat.",
      imageSrc:
        "https://plus.unsplash.com/premium_photo-1679920026812-d9b1ec223018?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: "https://www.svgrepo.com/show/490129/housekeeping.svg",
      imageOnRight: true,
    },
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleVisibility() {
      const target = document.getElementById("about");

      if (!target) return;

      const rect = target.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true);
      }
    }

    handleVisibility();
    window.addEventListener("scroll", handleVisibility);
    return () => window.removeEventListener("scroll", handleVisibility);
  }, [id]);

  return (
    <section className="features-section" id="about">
      {isVisible ? (
        <div className="features-container">
          {features.map((feature, index) => (
            <Feature
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              imageOnRight={feature.imageOnRight}
              ProgressBar={feature.progressBar}
              bar={feature.bar}
              imageSrc={feature.imageSrc}
            />
          ))}
        </div>
      ) : null}
    </section>
  );
}
