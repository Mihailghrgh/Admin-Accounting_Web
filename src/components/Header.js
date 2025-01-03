import React from "react";
import "./Header.css";

export default function Header({ handleScrollIntoView, setPage }) {
  function handleSetPage(page) {
    setPage(page);
  }
  return (
    <header className="sticky-header">
      <nav className="main-nav">
        <div className="container">
          <div className="logo">AccountAdmin Pro</div>
          <ul className="nav-links">
            <li>
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollIntoView("home");
                  handleSetPage("home");
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollIntoView("services");
                  handleSetPage("home");
                }}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  handleSetPage("home");
                  handleScrollIntoView("about");
                }}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollIntoView("contact");
                }}
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#protofolio"
                onClick={(e) => {
                  e.preventDefault();
                  handleSetPage("portofolio");
                }}
              >
                Portofoliu
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
