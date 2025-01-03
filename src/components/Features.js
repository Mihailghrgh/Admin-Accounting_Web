import React from "react";
import "./Features.css";

const Feature = ({ title, description, icon, imageOnRight = true }) => {
  return (
    <div
      className={`feature-container ${imageOnRight ? "image-right" : "image-left"}`}
    >
      <div className="content-side">
        <div className="icon-container">
          <img src={icon} alt="" className="feature-icon" />
        </div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="image-side">
        <img alt="" className="feature-image" />
      </div>
    </div>
  );
};

export default function FeatureSection() {
  const features = [
    {
      title: "Watch your money grow",
      description:
        "Nesciunt quos autem dolorum voluptates cum dolores dicta fuga inventore ab? Nulla incidunt eius numquam sequi iste pariatur quibusdam!",
      imageSrc: "/placeholder.svg?height=400&width=400",
      icon: "/placeholder.svg?height=40&width=40",
      imageOnRight: true,
    },
    {
      title: "Free debit card included",
      description:
        "Quasi fugit in cumque cupiditate reprehenderit debitis animi enim eveniet consequatur odit amet.",
      imageSrc: "/placeholder.svg?height=400&width=400",
      icon: "/placeholder.svg?height=40&width=40",
      imageOnRight: false,
    },
    {
      title: "Smart investments",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi.",
      imageSrc: "/placeholder.svg?height=400&width=400",
      icon: "./Pictures/investment.jpg",
      imageOnRight: true,
    },
  ];

  return (
    <section className="features-section" id="about">
      <div className="features-container">
        {features.map((feature, index) => (
          <Feature
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            imageOnRight={feature.imageOnRight}
          />
        ))}
      </div>
    </section>
  );
}
