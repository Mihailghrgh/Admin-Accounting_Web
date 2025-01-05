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
                  handleSetPage("home");
                  setTimeout(() => {
                    handleScrollIntoView("home");
                  }, 0);
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
                  handleSetPage("home");
                  setTimeout(() => {
                    handleScrollIntoView("services");
                  }, 0);
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
                  setTimeout(() => {
                    handleScrollIntoView("about");
                  }, 0);
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
                  setTimeout(() => {
                    handleScrollIntoView("contact");
                  }, 0);
                }}
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#protofolio"
                onClick={(e) => {
                  handleSetPage("portofolio");
                  setTimeout(() => {
                    handleScrollIntoView("portofolio");
                  }, 500);
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
