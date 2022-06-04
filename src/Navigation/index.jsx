import React from 'react';
import './style.css';

export const Navigation = ({ activeIndex }) => {
  return (
    <nav className="navbar">
      <span className="navbar_logo">Trefa na kôš</span>
      <div className="navbar_buttons">
        <a
          className={`navbar_button ${activeIndex === 0 ? 'activeIndex' : ''}`}
          href="#home"
        >
          Domov
        </a>
        <a
          className={`navbar_button ${activeIndex === 1 ? 'activeIndex' : ''}`}
          href="#search"
        >
          Vyhľadať
        </a>
        <a
          className={`navbar_button ${activeIndex === 2 ? 'activeIndex' : ''}`}
          href="#rules"
        >
          5R
        </a>
        <a
          className={`navbar_button ${activeIndex === 3 ? 'activeIndex' : ''}`}
          href="#containers"
        >
          Kontajnery
        </a>
        <a
          className={`navbar_button ${activeIndex === 4 ? 'activeIndex' : ''}`}
          href="#footer"
        >
          O nás
        </a>
      </div>
    </nav>
  );
};
