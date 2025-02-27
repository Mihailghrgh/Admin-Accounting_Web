import React from "react";
import "./Footer.css";

export default function Footer({ handleScrollIntoView }) {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>Info Contact</h3>
            <div className="contact-info">
              <p>
                <span className="icon phone-icon"></span> +40 735 843 957
              </p>
              <p>
                <span className="icon mail-icon"></span> g_gheorghegww@yahoo.com
              </p>
              <p>
                <span className="icon map-icon"></span>Sector 6, Aleea Cetatuia
                nr.6
              </p>
            </div>
          </div>
          <div className="footer-section">
            <h3>Link-uri rapide</h3>
            <ul>
              <li>
                <a
                  href="#footer"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollIntoView("services");
                  }}
                >
                  Servicii
                </a>
              </li>
              <li>
                <a
                  href="https://example.com"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollIntoView("about");
                  }}
                >
                  Despre noi
                </a>
              </li>
              <li>
                <a
                  href="https://example.com"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollIntoView("contact");
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Ore de Business </h3>
            <p>Luni - Vineri: 9:00 AM - 6:00 PM</p>
            <p>Sâmbătă - Duminică: Închis</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} All right reserved by Regina
            Olteniei
          </p>
        </div>
      </div>
    </footer>
  );
}
