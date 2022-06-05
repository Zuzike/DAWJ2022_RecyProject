import React from 'react';
import './styles.css';
import bin2 from './img/mini_bin2.jpg';
import { Papier } from '../Containers/Papier';
import { data } from '../../data';

const Notes = ({ type }) => {
  return (
    <ul>
      {data
        .find((item) => item.type === type)
        ?.notes?.map((it, i) => (
          <li key={i}>{it}</li>
        ))}
    </ul>
  );
};

export const ResultItem = ({ type, group }) => {
  if (type === 'papier') {
    return (
      <>
        <div className="search__result--bin">
          <img src={bin2} alt="smetna nadoba ikona modrá" />
          <p>Papier</p>
        </div>
        <div className="search__result--notes">
          <Notes type={type} />
        </div>
      </>
    );
  }
  if (type === 'sklo') {
    return (
      <>
        <div className="search__result--bin">
          <img src={bin2} alt="smetna nadoba ikona zelená" />
          <p>Sklo</p>
        </div>
        <div className="search__result--notes">
          <Notes type={type} />
        </div>
      </>
    );
  }
  if (type === 'plasty') {
    return (
      <>
        <div className="search__result--bin">
          <img src={bin2} alt="smetna nadoba ikona žltá" />
          <p>Plast</p>
        </div>
        <div className="search__result--notes">
          <Notes type={type} />
        </div>
      </>
    );
  }
  if (type === 'kuchynský bioodpad') {
    return (
      <>
        <div className="search__result--bin">
          <img src={bin2} alt="smetna nadoba ikona hnedá" />
          <p>Kuchynský bioodpad</p>
        </div>
        <div className="search__result--notes">
          <Notes type={type} />
        </div>
      </>
    );
  }
  if (type === 'záhradný bioodpad') {
    return (
      <>
        <div className="search__result--bin">
          <img src={bin2} alt="smetna nadoba ikona hnedá" />
          <p>Záhradný bioodpad</p>
        </div>
        <div className="search__result--notes">
          <Notes type={type} />
        </div>
      </>
    );
  }
  if (type === 'kompost') {
    return (
      <>
        <div className="search__result--bin">
          <img src={bin2} alt="smetna nadoba ikona hnedá" />
          <p>Kompost</p>
        </div>
        <div className="search__result--notes">
          <Notes type={type} />
        </div>
      </>
    );
  }
  if (type === 'jedlé oleje a tuky') {
    return (
      <>
        <div className="search__result--bin">
          <img src={bin2} alt="smetna nadoba ikona čierna" />
          <p>Jedlé oleje a tuky</p>
        </div>
        <div className="search__result--notes">
          <Notes type={type} />
        </div>
      </>
    );
  }
  if (type === 'zberný dvor') {
    return (
      <>
        <div className="search__result--bin">
          <img src={bin2} alt="ikona dvor" />
          <p>Zberný dvor</p>
        </div>
        <div className="search__result--notes">
          <Notes type={type} />
        </div>
      </>
    );
  }
  if (type === 'textil') {
    return (
      <>
        <div className="search__result--bin">
          <img src={bin2} alt="smetna nadoba ikona fialová" />
          <p>Textil</p>
        </div>
        <div className="search__result--notes">
          <Notes type={type} />
        </div>
      </>
    );
  }
  if (type === 'nápojové kartóny' && (group === 'A/D' || group === C)) {
    return (
      <>
        <div className="search__result--bin">
          <img src={bin2} alt="smetna nadoba ikona " />
          <p>Plast/Kovy</p>
        </div>
        <div className="search__result--notes">
          <Notes type={type} />
        </div>
      </>
    );
  }
  if (type === 'nápojové kartóny' && (group === 'B' || group === 'E')) {
    return (
      <>
        <div className="search__result--bin">
          <img src={bin2} alt="smetna nadoba ikona oranžová " />
          <p>Nápojové kartóny</p>
        </div>
        <div className="search__result--notes">
          <Notes type={type} />
        </div>
      </>
    );
  }
  if ((type === 'nápojové kartóny' || type === 'kovy') && group === 'C') {
    return (
      <>
        <div className="search__result--bin">
          <img src={bin2} alt="smetna nadoba ikona žltá" />
          <p>Plast</p>
        </div>
        <div className="search__result--notes">
          <Notes type={type} />
        </div>
      </>
    );
  }
  if (type === 'kovy' && group === 'B') {
    return (
      <>
        <div className="search__result--bin">
          <img src={bin2} alt="smetna nadoba ikona žltá" />
          <p>Plast</p>
        </div>
        <div className="search__result--notes">
          <Notes type={type} />
        </div>
      </>
    );
  }
  if (type === 'kovy' && (group === 'E' || group === 'A/D')) {
    return (
      <>
        <div className="search__result--bin">
          <img src={bin2} alt="smetna nadoba ikona červená" />
          <p>Kovy</p>
        </div>
        <div className="search__result--notes">
          <Notes type={type} />
        </div>
      </>
    );
  }

  return (
    <>
      <div className="search__result--bin">
        <img src={bin2} alt="smetná nadoba ikona šedá" />
        <p>Zmiešaný odpad</p>
      </div>
      <div className="search__result--notes">
        <Notes type={type} />
      </div>
    </>
  );
};
