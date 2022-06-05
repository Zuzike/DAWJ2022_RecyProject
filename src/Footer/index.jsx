import React from 'react';
import './styles.css';

export const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__left">
          <p className="footer__left--text">
            <h3>O projekte</h3>
            Projekt vznikol v rámci účasti Digitálnej akadémie Czechitas.
          </p>
        </div>
        <div className="footer__right">
          <p className="footer__right--text">
            <h3>Odkazy na užitočné stránky:</h3>
          </p>
        </div>
      </div>
    </>
  );
};
