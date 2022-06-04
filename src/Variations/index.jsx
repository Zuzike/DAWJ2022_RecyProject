import React from 'react';
import './styles.css';
import bin1 from './img/mini_bin.jpg';
import bin2 from './img/mini_bin2.jpg';

export const Variations = () => {
  return (
    <>
      <section className="search__variations">
        <h2 className="variatons__title">Kombinácie zberu</h2>
        <p className="variations__text">
          Zistite vo vedľajšom okienku aké máte možnosti zberných nádob vo vašom
          okolí. <br />
          Zakliknite políčko pri farebnej variante nádoby, ktoré u vás nájdete.
        </p>
        <div className="search__groups">
          <div className="variations__checkbox-slot">
            <div className="variations__checkbox-slot--var">
              <img src={bin1} alt="smetna nadoba ikona" />
              <input
                id="checkboxRed"
                className="variations__checkbox"
                type="checkbox"
              ></input>
            </div>
            <div className="variations__checkbox-slot--var">
              <img src={bin2} alt="smetna nadoba ikona" />
              <input
                id="checkboxBlue"
                className="variations__checkbox"
                type="checkbox"
              ></input>
            </div>
            <div className="variations__checkbox-slot--var">
              <img src={bin1} alt="smetna nadoba ikona" />
              <input
                id="checkboxGreen"
                className="variations__checkbox"
                type="checkbox"
              ></input>
            </div>
            <div className="variations__checkbox-slot--var">
              <img src={bin1} alt="smetna nadoba ikona" />
              <input
                id="checkboxYellow"
                className="variations__checkbox"
                type="checkbox"
              ></input>
            </div>
            <div className="variations__checkbox-slot--var">
              <img src={bin1} alt="smetna nadoba ikona" />
              <input
                id="checkboxOrange"
                className="variations__checkbox"
                type="checkbox"
              ></input>
            </div>
          </div>
          <button className="variations__button">Nájdi</button>
        </div>
        <div className="variations__groups">
          <ul>
            <li>
              {' '}
              A – Papier, sklo, kovy , kombinovaný zber plasty a nápojové
              kartóny(VKM)
            </li>
            <li>
              B – Papier, sklo, nápojové kartóny (VKM), kombinovaný zber plasty
              a kovy
            </li>
            <li>
              C – Papier, sklo, kombinovaný zber plasty, kovy, nápojové kartóny
              (VKM)
            </li>
            <li>
              D – Papier, sklo, plasty, kombinovaný zber kovy a nápojové kartóny
              (VKM)
            </li>
            <li>E – Papier, sklo, plasty, kovy, nápojové kartóny (VKM)</li>
            <li>
              F – Mobilný zber papiera + zvyšné komodity v jednej z kombinácií A
              – E *
            </li>
          </ul>
          <p className="variations__note">
            * Kombinácia F predstavuje zriedkavý systém zberu triedenej zložky
            odpadu. V tomto prípade sa papier nezbiera do zberných nádob (resp.
            do vriec), ale občania odovzdávajú papier prostredníctvom mobilného
            zberu.
          </p>
        </div>
      </section>
    </>
  );
};
