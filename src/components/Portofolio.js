import React from "react";
import "./Portofolio.css";

export default function Portofolio() {
  const sectors = [
    {
      name: "Sector 6",
      businesses: [
        "ASOCIATIA DE PROPRIETARI BLOC 132 SCARA A",
        "ASOCIATIA DE PROPRIETARI BLOC M21 SCARA 4",
        "ASOCIAŢIA DE PROPRIETARI BĂBEŞTI 6 A",
        "ASOCIATIA DE PROPRIETARI BL.M21 SC.3",
        "ASOCIATIA DE PROPRIETARI BLOC 229 BIS",
        "ASOCIATIA DE PROPRIETARI BLOC 229 BIS",
        "ASOCIATIA DE PROPRIETARI BL. C52",
        "ASOCIATIA DE PROPRIETARI BLOC 132 SCARA B",
        "ASOCIATIA PROPRIETARILOR BLOC M21 SC.6",
        "ASOCIATIA DE PROPRIETARI BLOC M21 SCARA 5",
        "ASOCIATIA DE PROPRIETARI BL.M21 SC.2",
        "ASOCIATIA DE PROPRIETARI BLOC M21 SCARA 1",
        "ASOCIATIA DE PROPRIETARI BLOC 27",
        "ASOCIATIA DE PROPRIETARI BLOC 25/IV",
        "ASOCIATIA DE PROPRIETARI BLOC A.1",
        "ASOCIATIA DE PROPRIETARI BLOC M.19",
        "ASOCIAŢIA DE PROPRIETARI BLOC 25/1",
        "ASOCIATIA DE PROPRIETARI BLOC 132 SCARA A",
      ],
    },
    {
      name: "Sector 3",
      businesses: ["ASOCIATIA DE PROPRIETARI - BLOC COLTEA, SC.1"],
    },
    { name: "Sector 5", businesses: ["ASOCIATIA DE PROPRIETARI BLOC 65/67"] },
    {
      name: "Sector 4",
      businesses: [
        "ASOCIATIA DE PROPRIETARI BL.2 SC.3",
        "ASOCIATIA DE PROPRIETARI BL.2 SC.2A",
      ],
    },
    { name: "Sector 1", businesses: ["ASOCIATIA DE PROPRIETARI BLOC C4 SC.1"] },
  ];

  const reviews = [
    {
      text: "Their expertise transformed our operations. Highly recommended!",
      author: "John Smith",
      company: "ASOCIATIA DE PROPRIETARI BLOC 132 SCARA A",
    },
    {
      text: "Exceptional service and results. They truly understand our needs.",
      author: "Emma Johnson",
      company: "ASOCIATIA DE PROPRIETARI BLOC M21 SCARA 4",
    },
    {
      text: "A game-changer for our association. Professional and innovative team.",
      author: "Michael Brown",
      company: "ASOCIATIA DE PROPRIETARI BLOC 27",
    },
  ];

  return (
    <section className="business-showcase" id="portofolio">
      <div className="container">
        <h2>Portofoliu Administrativ al Clădirilor Rezidențiale </h2>
        <p className="section-description">
          Un portofoliu complet al clădirilor rezidențiale pe care le
          administrăm, ce include organizarea administrativă, colaborarea cu
          asociațiile de proprietari și gestionarea datelor operaționale
          esențiale. Ne dedicăm asigurării transparenței, preciziei și unei
          administrări eficiente a proprietăților în beneficiul locatarilor.
        </p>

        <div className="sectors-grid">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className={`sector-card ${sector.name === "Sector 6" ? "sector-6" : ""}`}
            >
              <h3>{sector.name}</h3>
              <ul
                className={sector.name === "Sector 6" ? "scrollable-list" : ""}
              >
                {sector.businesses.map((business, bizIndex) => (
                  <li key={bizIndex}>{business}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="reviews-section">
          <h3>What Our Clients Say</h3>
          <div className="reviews-grid">
            {reviews.map((review, index) => (
              <div key={index} className="review-card">
                <p className="review-text">"{review.text}"</p>
                <p className="review-author">{review.author}</p>
                <p className="review-company">{review.company}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
