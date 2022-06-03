import React from 'react';
import './style.css';
import lupa from './img/lupa.png';

export const Search = () => {
  return (
    <>
      <div className="search">
        <section className="search__variations">
          <p>
            Zistite najprv aké máte možnosti zberných nádob vo vašom okolí.{' '}
            <br />
            Zakliknite políčko pri farebnej variante nádoby, ktoré u vás
            nájdete.
          </p>
        </section>
        <section className="search__form">
          <div className="search__bar">
            <input className="search__input" type="input"></input>
            <img className="search__icon" src={lupa} alt="lupa" />
          </div>
        </section>
      </div>
    </>
  );
};
