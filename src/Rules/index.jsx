import React from 'react';
import './style.css';

export const Rules = (props) => {
  return (
    <>
      <div className="rules">
        <h1 className="rules_title">Päť pravidiel recyklácie</h1>
        <div className="icons">
          <div className="icon icon_refuse">REFUSE (Odmietam)</div>
          <p className="icons_describe">
            Ak si naozaj potrebujem niečo nové kúpiť, zamyslím sa nad obalom,
            pôvodom, kvalitou, férovosťou a spôsobom výroby a spracovania.
            Odmietam obaly a výrobky, ktoré vlastne nepotrebujem alebo neviem
            znovu využiť, vytriediť či skompostovať. Odmietam letáky a reklamné
            predmety zadarmo.
          </p>
        </div>
        <div />
        <div className="icons">
          <div className="icon icon_reduce">REDUCE (Redukujem)</div>
          <p className="icons_describe">
            Redukujem množstvo vecí, ktoré nakupujem, či používam. Vyhýbam sa
            impulzívnemu nakupovaniu a nakupovaniu samoúčelných vecí. S každou
            novou vecou vzniká ďalší odpad. Každý nákup si teda poriadne
            premyslím.
          </p>
        </div>
        <div className="icons">
          <div className="icon icon_reuse">REUSE (Znovu využijem)</div>
          <p className="icons_describe">
            Veci používam opakovane. Pokiaľ vec už doslúžila svojmu primárnemu
            účelu, zamyslím sa nad inou možnosťou jej využitia. Zároveň myslím
            na to, že každá jednorázová vec má svoju alternatívu, ktorá je
            vhodná na viac použití. Aj týmto obmedzím vytváranie odpadu.
          </p>
        </div>
        <div className="icons">
          <div className="icon icon_recycle">RECYCLE (Recyclujem)</div>
          <p className="icons_describe">
            Keď už vec naozaj doslúžila, snažím sa ju správne vytriediť, aby
            mohla byť zrecyklovaná. Na to, aby jeho recyklácia bola účelná,
            myslím už pri kúpe výrobku. Zmesovému odpadu sa chceme vyhnúť,
            nakoľko ten končí na skládke odpadov alebo v spaľovni s energetickým
            zhodnotením.
          </p>
        </div>
        <div className="icons">
          <div className="icon icon_rot">ROT (Kompostujem)</div>
          <p className="icons_describe">
            Kompostovanie ako riadený proces rozkladu biologicky rozložiteľného
            odpadu je najlepším spôsobom využitia predovšetkým rastlinného
            odpadu z kuchyne a záhrady. Pri kompostovaní sa odpad stáva potravou
            pre iné organizmy, ktoré z neho vytvoria kvalitné hnojivo aj na
            pestovanie našej potravy.
          </p>
        </div>
      </div>
    </>
  );
};
