import React, { useState } from 'react';
import './styles.css';

export const Hamburger = () => {
  const [menuOn, setMenuOn] = useState(false);
  return (
    <>
      <button
        className={menuOn ? 'hamburger hamburger--open' : 'hamburger'}
        aria-label="menu"
        onClick={() => (menuOn ? setMenuOn(false) : setMenuOn(true))}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      {menuOn && (
        <ul className="hamburger__list">
          <li>
            <a href="#home" onClick={() => setMenuOn(false)}>
              Domov
            </a>
          </li>
          <li>
            <a href="#search" onClick={() => setMenuOn(false)}>
              Vyhľadať
            </a>
          </li>
          <li>
            <a href="#rules" onClick={() => setMenuOn(false)}>
              5R
            </a>
          </li>
          <li>
            <a href="#containers" onClick={() => setMenuOn(false)}>
              Kontajnery
            </a>
          </li>
          <li>
            <a href="#footer" onClick={() => setMenuOn(false)}>
              {' '}
              Odkazy
            </a>
          </li>
        </ul>
      )}
    </>
  );
};
