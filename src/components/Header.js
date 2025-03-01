import React from "react";
import "./Header.css";

export default function Header({ handleScrollIntoView, setPage }) {
  function handleSetPage(page) {
    setPage(page);
  }
  return (
    <header className="sticky-header">
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-16831922698"
      ></script>{" "}
      <nav className="main-nav">
        <div className="container">
          <div className="logo">Damil Administratie SRL</div>
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
                Servicii
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
                Despre noi
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
