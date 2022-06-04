import React from 'react';
import './styles.css';
import lupa from './img/lupa.png';

export const Search = () => {
  return (
    <>
      <section className="search__form">
        <div className="search__bar">
          <input className="search__input" type="input"></input>
          <img className="search__icon" src={lupa} alt="lupa" />
        </div>
      </section>
    </>
  );
};
