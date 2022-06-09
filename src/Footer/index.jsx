import React from 'react';
import './styles.css';

export const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__left">
          <h3>O projekte</h3>
          <p className="footer__left--text">
            Projekt "Trefa na kôš" vznikol ako záverečný projekt k úspešnému
            ukončeniu Digitálnej akadémie web od Czechitas.
          </p>
        </div>
        <div className="footer__right">
          <h3>Odkazy na užitočné stránky:</h3>

          <ul className="footer__right--text">
            <li>
              <strong> Inštitút cirkulárnej ekonomiky: </strong> www.incien.sk{' '}
            </li>
            <li>
              <strong> OZV NATUR-PACK: </strong> www.naturpack.sk{' '}
            </li>
            <li>
              <strong>Zoznam zberných dvorov SR:</strong>{' '}
              www.odpady-portal.sk/Dokument/100291/zberne-dvory.aspx{' '}
            </li>

            <li>
              <strong>
                Zber použitého kuchynského oleja – zoznam čerpacích staníc
                Slovnaft:
              </strong>{' '}
              https://slovnaft.sk/sk/cerpacie-stanice/predajne/zber-pouziteho-kuchynskeho-oleja{' '}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
