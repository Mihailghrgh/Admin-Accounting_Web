import React from "react";
import "./Services.css";

export default function Services() {
  const services = [
    {
      title: "Administrare financiara",
      description:
        "Simplu și de încredere: folosim platformă online EBloc și contabilitate devine mai simplă.",
    },
    {
      title: "Administrare tehnica",
      description:
        "Inspecții periodice și servicii de încredere pentru echipamente, anexe și spații comune, asigurând funcționarea optimă și siguranța acestora.",
    },
    {
      title: "Servicii Adiționale",
      description:
        "Emitere somații de plată, redactare procese-verbale, publicare anunțuri și asistență specializată.",
    },
    {
      title: "Casierie",
      description:
        "Servicii profesionale pentru colectarea cotelor de întreținere lunar.",
    },
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <h2>Alege serviciile noastre! </h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
