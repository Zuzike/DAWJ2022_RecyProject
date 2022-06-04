import React from 'react';
import './styles.css';
import bin2 from './img/mini_bin2.jpg';

export const ResultItem = ({ type, group }) => {
  if (type === 'papier') {
    return (
      <>
        <img src={bin2} alt="smetna nadoba ikona modrá" />
        <p>Papier</p>
      </>
    );
  }
  if (type === 'sklo') {
    return (
      <>
        <img src={bin2} alt="smetna nadoba ikona zelená" />
        <p>Sklo</p>
      </>
    );
  }
  if (type === 'plasty') {
    return (
      <>
        <img src={bin2} alt="smetna nadoba ikona žltá" />
        <p>Plast</p>
      </>
    );
  }
  if (type === 'kuchynský bioodpad') {
    return (
      <>
        <img src={bin2} alt="smetna nadoba ikona hnedá" />
        <p>Kuchynský bioodpad</p>
      </>
    );
  }
  if (type === 'záhradný bioodpad') {
    return (
      <>
        <img src={bin2} alt="smetna nadoba ikona hnedá" />
        <p>Záhradný bioodpad</p>
      </>
    );
  }
  if (type === 'kompost') {
    return (
      <>
        <img src={bin2} alt="smetna nadoba ikona hnedá" />
        <p>Kompost</p>
      </>
    );
  }
  if (type === 'jedlé oleje a tuky') {
    return (
      <>
        <img src={bin2} alt="smetna nadoba ikona čierna" />
        <p>Jedlé oleje a tuky</p>
      </>
    );
  }
  if (type === 'zberný dvor') {
    return (
      <>
        <img src={bin2} alt="ikona dvor" />
        <p>Zberný dvor</p>
      </>
    );
  }
  if (type === 'textil') {
    return (
      <>
        <img src={bin2} alt="smetna nadoba ikona fialová" />
        <p>Textil</p>
      </>
    );
  }
  if (type === 'nápojové kartóny' && group === 'A/D') {
    return (
      <>
        <img src={bin2} alt="smetna nadoba ikona fialová" />
        <p>Plast/Kovy</p>
      </>
    );
  }

  return (
    <>
      <img src={bin2} alt="smetná nadoba ikona šedá" />
      <p>Zmiešaný odpad</p>
    </>
  );
};
