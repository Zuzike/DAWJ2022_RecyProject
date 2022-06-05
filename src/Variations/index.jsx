import './styles.css';
import React, { useState, useEffect } from 'react';
import { BinIcon } from '../BinIcon';

const computeGroup = (results) => {
  if (
    results.includes('blue') &&
    results.includes('green') &&
    results.includes('yellow')
  ) {
    if (!results.includes('orange')) {
      if (results.includes('red')) return 'A/D';
      else {
        return 'C';
      }
    }
    if (!results.includes('red')) return 'B';
    return 'E';
  }
  return '?';
};

export const Variations = ({ group, onChangeGroup }) => {
  const [selected, setSelected] = useState([]);

  const onChange = (color) => (ev) => {
    return ev.target.checked
      ? setSelected((selected) => [...selected, color])
      : setSelected((selected) => selected.filter((item) => item !== color));
  };

  useEffect(() => {
    const computedGroup = computeGroup(selected);
    if (group !== computedGroup) {
      onChangeGroup(computedGroup);
    }
  }, [selected]);

  return (
    <>
      <section className="search__variations">
        <h2 className="variatons__title">Kombinácie zberu</h2>
        <p className="variations__text">
          Triedený zber odpadov na Slovensku nie je jednotný a odpady sa
          zbierajú v rôznych kombináciách.
          <br />
          Zistite vo vedľajšom okienku aké máte možnosti zberných nádob vo vašom
          okolí. <br />
          Zakliknite políčko pri farebnej variante nádoby, ktoré u vás nájdete a
          zaradíme Vás do patričnej skupiny.
        </p>
        <div className="search__groups">
          <div className="variations__checkbox-slot">
            <div className="variations__checkbox-slot--var">
              <div className="search__icon">
                <BinIcon color="green" />
              </div>
              <label>
                <input
                  onChange={onChange('red')}
                  id="checkboxRed"
                  className="variations__checkbox"
                  type="checkbox"
                ></input>
                Zelená
              </label>
            </div>
            <div className="variations__checkbox-slot--var">
              <div className="search__icon">
                <BinIcon color="blue" />
              </div>{' '}
              <label>
                <input
                  onChange={onChange('blue')}
                  id="checkboxBlue"
                  className="variations__checkbox"
                  type="checkbox"
                ></input>
                Modrá
              </label>
            </div>
            <div className="variations__checkbox-slot--var">
              <div className="search__icon">
                <BinIcon color="yellow" />{' '}
              </div>

              <label>
                <input
                  onChange={onChange('green')}
                  id="checkboxGreen"
                  className="variations__checkbox"
                  type="checkbox"
                ></input>
                Žltá
              </label>
            </div>
            <div className="variations__checkbox-slot--var">
              <div className="search__icon">
                {' '}
                <BinIcon color="orange" />{' '}
              </div>

              <label>
                {' '}
                <input
                  onChange={onChange('yellow')}
                  id="checkboxYellow"
                  className="variations__checkbox"
                  type="checkbox"
                ></input>
                Oranžová
              </label>
            </div>
            <div className="variations__checkbox-slot--var">
              <div className="search__icon">
                {' '}
                <BinIcon color="red" />{' '}
              </div>

              <label>
                {' '}
                <input
                  onChange={onChange('orange')}
                  id="checkboxOrange"
                  className="variations__checkbox"
                  type="checkbox"
                ></input>
                Červená
              </label>
            </div>
          </div>
          <div className="variations__result">{group}</div>
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
            <br />* VKM - viacvrstvový kombinovaný materiál
          </p>
        </div>
      </section>
    </>
  );
};
