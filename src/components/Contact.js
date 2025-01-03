import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./Contact.css";
import "./Sector.css";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

export default function Contact() {
  const mapRef = useRef(null);

  useEffect(() => {
    console.log("mapRef.current", mapRef.current);

    if (!mapRef.current) return;

    const map = L.map("map").setView([44.436129, 26.038793], 12);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([44.436129, 26.038793])
      .addTo(map)
      .bindPopup("Locatia Noastra")
      .openPopup();

    return () => {
      map.remove();
    };
  }, []);

  // if (mapRef.current) {
  //   const map = L.map(mapRef.current).setView([51.505, -0.09], 13);
  //   L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  //     attribution: "© OpenStreetMap contributors",
  //   }).addTo(map);

  //   // Add marker for business location
  //   L.marker([51.505, -0.09]).addTo(map);
  // }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Contact Us</h2>
        <div className="contact-grid">
          <form
            className="contact-form"
            action="https://formspree.io/f/mkggpjnv"
            method="POST"
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
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
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
          <div
            ref={mapRef}
            id="map"
            style={{ height: "520px", width: "100%" }}
          ></div>
        </div>
      </div>
    </section>
  );
}
