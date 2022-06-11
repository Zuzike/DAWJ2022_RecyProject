import React from 'react';
import './styles.css';
import czechitas from './img/czechitas_logo.png';

export const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__left">
          <h3>O projekte</h3>
          <p className="footer__left--text">
            Projekt "Trefa na kôš" vznikol ako záverečný projekt k úspešnému
            ukončeniu Digitálnej akadémie Web Jaro 2022 v CzechITas.
          </p>
          <img src={czechitas} alt="logo" />
        </div>
        <div className="footer__right">
          <h3>Odkazy na užitočné stránky:</h3>

          <ul className="footer__right--text">
            <li>
              <strong> Inštitút cirkulárnej ekonomiky: </strong>
              <a href="https://www.incien.sk/">www.incien.sk </a>
            </li>
            <li>
              <strong> OZV NATUR-PACK: </strong>
              <a href="https://www.naturpack.sk/"> www.naturpack.sk </a>
            </li>
            <li>
              <strong>Zoznam zberných dvorov SR:</strong>
              <a href="https://www.odpady-portal.sk/Dokument/100291/zberne-dvory.aspx">
                {' '}
                www.odpady-portal.sk{' '}
              </a>
            </li>

            <li>
              <strong>
                Zber použitého kuchynského oleja – zoznam čerpacích staníc
                Slovnaft:
              </strong>{' '}
              <a href="https://slovnaft.sk/sk/cerpacie-stanice/predajne/zber-pouziteho-kuchynskeho-oleja/">
                https://slovnaft.sk{' '}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
