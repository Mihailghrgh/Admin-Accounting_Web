import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./App";
import "./Contact.css";
import "./Sector.css";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const googleMapsRef = `https://www.google.com/maps?q=44.436129,26.038793" target="_blank" rel="noopener noreferrer`;

export default function Contact() {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = L.map(mapRef.current).setView([44.436129, 26.038793], 14);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      ext: "png",
    }).addTo(map);

    L.marker([44.436129, 26.038793])
      .addTo(map)
      .bindPopup(`<a href="${googleMapsRef}">Locatia noastra </a`)
      .openPopup();

    return () => {
      map.remove();
    };
  }, []);

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Hai să simplificăm administrarea blocurilor pentru tine!</h2>
        <p className="">
          Completați formularul de mai jos pentru a afla mai multe despre
          ofertele și serviciile noastre!
        </p>
        <div className="contact-grid">
          <form
            className="contact-form"
            action="https://formspree.io/f/mkggpjnv"
            method="POST"
          >
            <div className="form-group">
              <label htmlFor="name">Nume</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="sector" className="block mb-2 text-gray-700">
                Alege Sectorul:
              </label>
              <select
                id="sector"
                name="Sector"
                className="custom-select w-full"
              >
                <option>Sector 1</option>
                <option>Sector 2</option>
                <option>Sector 3</option>
                <option>Sector 4</option>
                <option>Sector 5</option>
                <option>Sector 6</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Mesaj</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit" className="cta-button">
              Trimite Mesaj
            </button>
          </form>
          <div ref={mapRef} style={{ height: "520px", width: "100%" }}></div>
        </div>
      </div>
    </section>
  );
}
