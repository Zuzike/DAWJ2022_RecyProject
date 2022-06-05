import React from 'react';
import './styles.css';

export const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__left">
          <h3>O projekte</h3>
          <p className="footer__left--text">
            Projekt vznikol v rámci účasti Digitálnej akadémie Czechitas.
          </p>
        </div>
        <div className="footer__right">
          <h3>Odkazy na užitočné stránky:</h3>
          <p className="footer__right--text"></p>
        </div>
      </div>
    </>
  );
};
