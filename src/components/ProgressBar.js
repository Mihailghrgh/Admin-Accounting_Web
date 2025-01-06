import React, { useState, useEffect } from "react";
import "./ProgressBar.css";
import "./Features.js";

function handleShowBar() {
  const target = document.getElementById("bar");
  const rect = target.getBoundingClientRect();

  if (rect.top <= window.innerHeight && rect.bottom >= 0) {
    console.log("Element is in view");
  }
}

function ProgressBar({ progress, label, id, barFill }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(progress);
    if (start === end) return;

    let timer = setInterval(() => {
      if (id === "ap") {
        start += 15;
        setCount(start);
      } else {
        start += 1;
        setCount(start);
      }

      if (start === end || start > end) {
        setCount(progress);
        clearInterval(timer);
      }
    }, 1);

    return () => clearInterval(timer);
  }, [progress, id]);

  useEffect(() => {
    const onScroll = () => handleShowBar();
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="progress-bar-container">
      <div className="progress-bar-label">{label}</div>
      <div className="progress-bar">
        {id === "ap" && (
          <>
            <div className="progress-bar-fill" style={{ width: `${barFill}%` }}>
              <span className="progress-bar-text">{count}</span>
            </div>
          </>
        )}
        <div className="progress-bar-fill" style={{ width: `${count}%` }}>
          <span className="progress-bar-text">{count}</span>
        </div>
      </div>
    </div>
  );
}

function ProgressBarPreview() {
  return (
    <div className="progress-bar-preview" id="bar">
      <ProgressBar progress={25} label="Total proprietati administrate" />
      <ProgressBar progress={3000} label="Apartamente" id="ap" barFill={80} />
      <ProgressBar
        progress={5000}
        label="Clienti satisfacuti"
        id="ap"
        barFill={100}
      />
      <ProgressBar progress={30} label="Ani de experienta" />
    </div>
  );
}

export default function ProgressBarComponent() {
  return (
    <div>
      <ProgressBarPreview />
    </div>
  );
}
