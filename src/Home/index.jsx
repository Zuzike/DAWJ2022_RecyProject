import React from 'react';
import './styles.css';

export const Home = () => {
  return (
    <div className="uvod">
      <h1 className="strip__title"> Vyhľadávač odpadových nádob </h1>
      <p className="strip__content">
        Naučme sa správne vytriediť odpad, ktorý po nás denne ostáva. Často sa
        nám stáva, že si nie sme istí, do akého kontajneru hodiť vec, ktorá nám
        už doslúžila. Hoci na Slovensku máme systémy triedenia odpadov pestré ba
        až zložité, triediť sa dá všade. Môže nám v tom pomôcť aj nasledujúci
        vyhľadávač. Vyberte si z ponuky farebných kontajnerov tie, ktoré máte vo
        svojom okolí k dispozícií a do okienka vyhľadávača zadajte názov veci,
        ktorej sa chcete zbaviť. Vyhľadávač sa bude snažiť vybrať pre vás vhodný
        kontajner.
      </p>
    </div>
  );
};
