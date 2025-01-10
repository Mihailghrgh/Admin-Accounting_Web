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
                <span className="icon phone-icon"></span> +40 234 567 890
              </p>
              <p>
                <span className="icon mail-icon"></span> info@company.com
              </p>
              <p>
                <span className="icon map-icon"></span> Aleea Cetatuia nr.6
              </p>
            </div>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a
                  href="#footer"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollIntoView("services");
                  }}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollIntoView("about");
                  }}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
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
            <h3>Ore Business </h3>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday - Sunday: Closed</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
