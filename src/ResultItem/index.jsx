import React from 'react';
import './styles.css';
import { BinIcon } from '../icons/BinIcon';

import { data } from '../../data';

const Notes = ({ type }) => {
  return (
    <ul className="search__result--text">
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
          <div className="search__icon">
            <BinIcon color="blue" width="60px" height="80px" />
          </div>

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
          <div className="search__icon">
            <BinIcon color="green" width="60px" height="80px" />
          </div>
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
          <div className="search__icon">
            <BinIcon color="yellow" width="60px" height="80px" />
          </div>
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
          <div className="search__icon">
            <BinIcon color="braun" width="60px" height="80px" />
          </div>
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
          <div className="search__icon">
            <BinIcon color="braun" width="60px" height="80px" />
          </div>

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
          <div className="search__icon">
            <BinIcon color="braun" width="60px" height="80px" />
          </div>

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
          <div className="search__icon">
            <BinIcon color="black" width="60px" height="80px" />
          </div>
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
          <div className="search__icon">
            <BinIcon color="black" width="60px" height="80px" />
          </div>

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
          <div className="search__icon">
            <BinIcon color="red" width="60px" height="80px" />
          </div>
          <p>Textil</p>
        </div>
        <div className="search__result--notes">
          <Notes type={type} />
        </div>
      </>
    );
  }
  if (type === 'nápojové kartóny' && group === 'A/D') {
    return (
      <>
        <div className="search__result--bin">
          <div className="search__icon">
            <BinIcon color="yellow" width="60px" height="80px" />
          </div>

          <p>Plast/Kovy</p>
        </div>
        <div className="search__result--notes">
          <Notes type={type} />
        </div>
      </>
    );
  }
  if (type === 'nápojové kartóny' && group === 'C') {
    return (
      <>
        <div className="search__result--bin">
          <div className="search__icon">
            <BinIcon color="yellow" width="60px" height="80px" />
          </div>
          <p>Plast</p>
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
          <div className="search__icon">
            <BinIcon color="orange" width="60px" height="80px" />
          </div>

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
          <div className="search__icon">
            <BinIcon color="yellow" width="60px" height="80px" />
          </div>
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
          <div className="search__icon">
            <BinIcon color="yellow" width="60px" height="80px" />
          </div>

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
          <div className="search__icon">
            <BinIcon color="red" width="60px" height="80px" />
          </div>
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
        <div className="search__icon">
          <BinIcon color="braun" width="60px" height="80px" />
        </div>
        <p>Zmiešaný odpad</p>
      </div>
      <div className="search__result--notes">
        <Notes type={type} />
      </div>
    </>
  );
};
