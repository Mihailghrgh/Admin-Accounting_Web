import React from "react";
import "./Services.css";

export default function Services() {
  const services = [
    {
      title: "Financial Analysis",
      description:
        "Comprehensive financial analysis services tailored to your business needs.",
    },
    {
      title: "Tax Planning",
      description:
        "Comprehensive tax planning services tailored to your business needs.",
    },
    {
      title: "Business Administration",
      description:
        "Comprehensive business administration services tailored to your business needs.",
    },
    {
      title: "Risk Management",
      description:
        "Comprehensive risk management services tailored to your business needs.",
    },
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <h2>Our Services</h2>
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
