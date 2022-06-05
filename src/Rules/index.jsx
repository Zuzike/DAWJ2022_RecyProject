import React from 'react';
import './style.css';
import { useMediaQuery } from 'react-responsive';

const rules = {
  refuse:
    'Ak si naozaj potrebujem niečo nové kúpiť, zamyslím sa nad obalom,pôvodom, kvalitou, férovosťou a spôsobom výroby a spracovania.Odmietam obaly a výrobky, ktoré vlastne nepotrebujem alebo neviem znovu využiť, vytriediť či skompostovať. Odmietam letáky a reklamné predmety zadarmo.',

  reduce: `   Redukujem množstvo vecí, ktoré nakupujem, či používam. Vyhýbam sa
    impulzívnemu nakupovaniu a nakupovaniu samoúčelných vecí. S každou
    novou vecou vzniká ďalší odpad. Každý nákup si teda poriadne
    premyslím.`,

  reuse: `Veci používam opakovane. Pokiaľ vec už doslúžila svojmu primárnemu
    účelu, zamyslím sa nad inou možnosťou jej využitia. Zároveň myslím na
    to, že každá jednorázová vec má svoju alternatívu, ktorá je vhodná na
    viac použití. Aj týmto obmedzím vytváranie odpadu.`,

  recycle: `
    Keď už vec naozaj doslúžila, snažím sa ju správne vytriediť, aby mohla
          byť zrecyklovaná. Na to, aby jeho recyklácia bola účelná, myslím už
          pri kúpe výrobku. Zmesovému odpadu sa chceme vyhnúť, nakoľko ten končí
          na skládke odpadov alebo v spaľovni s energetickým zhodnotením.`,

  rot: ` Kompostovanie ako riadený proces rozkladu biologicky rozložiteľného
          odpadu je najlepším spôsobom využitia predovšetkým rastlinného odpadu
          z kuchyne a záhrady. Pri kompostovaní sa odpad stáva potravou pre iné
          organizmy, ktoré z neho vytvoria kvalitné hnojivo aj na pestovanie
          našej potravy.`,
};

export const Rules = (props) => {
  const [type, setType] = React.useState('');

  const isMobile = useMediaQuery({
    query: '(max-width: 600px)',
  });
  return !type ? (
    <div className="rules">
      <h1 className="rules_title">Päť pravidiel recyklácie</h1>
      <div className="icons">
        <div
          onClick={() => isMobile && setType('refuse')}
          className="icon icon_refuse"
        >
          REFUSE <br />
          (Odmietam)
        </div>
        <p className="icons_describe icons_describe--refuse">{rules.refuse}</p>
      </div>
      <div className="icons">
        <div
          onClick={() => isMobile && setType('reduce')}
          className="icon icon_reduce"
        >
          REDUCE <br />
          (Redukujem)
        </div>
        <p className="icons_describe icons_describe--reduce">{rules.reduce}</p>
      </div>
      <div className="icons">
        <div
          onClick={() => isMobile && setType('reuse')}
          className="icon icon_reuse"
        >
          REUSE <br />
          (Znovu využijem)
        </div>
        <p className="icons_describe icons_describe--reuse">{rules.reuse}</p>
      </div>
      <div className="icons">
        <div
          onClick={() => isMobile && setType('recycle')}
          className="icon icon_recycle"
        >
          RECYCLE <br />
          (Recyclujem)
        </div>
        <p className="icons_describe icons_describe--recycle">
          {rules.recycle}
        </p>
      </div>
      <div className="icons">
        <div
          onClick={() => isMobile && setType('rot')}
          className="icon icon_rot"
        >
          ROT <br />
          (Kompostujem)
        </div>
        <p className="icons_describe icons_describe--rot">{rules.rot}</p>
      </div>
    </div>
  ) : (
    <div className="popup">
      <button onClick={() => setType('')} className="button_close">
        X
      </button>

      <p className=" ">{rules[type]}</p>
    </div>
  );
};
