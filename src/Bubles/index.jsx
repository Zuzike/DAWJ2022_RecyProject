import React, { useState, useEffect } from 'react';
import './styles.css';

const motivation = [
  'Takmer polovica (42 %) vyťaženého dreva (globálne) sa spotrebuje na výrobu papiera.Recyklácia 1 tony papiera ušetrí asi 2 580 litrov ropy, 26 500 litrov vody a 17 stromov.',
  'Recyklované sklo potrebuje v procese výroby na ohrev nižšiu teplotu ako sklo z primárnych materiálov, vďaka čomu ušetríme až 25 - 30 % energie.',
  'Recyklovaním skla tiež zredukujeme znečistenie ovzdušia o cca 20 % a  vody o cca 50 % v porovnaní s primárnou výrobou skla.',
  'Sklo je recyklovateľné donekonečna.',
  'Podľa ministerstva životného prostredia sa na Slovensku ročne predá asi miliarda PET fliaš a 345 miliónov plechoviek od nápojov.',
  'V krajinách, ktoré zálohovanie zaviedli, kleslo množstvo voľne pohodených nápojových obalov o 95 %.',
  'Kovy sa dajú recyklovať donekonečna a podobne ako sklo, ani pri opakovanej recyklácii nestrácajú svoje pôvodné vlastnosti.',
  'Recykláciou cca 650 - 700 hliníkových plechoviek sa dá vyrobiť kostra nového bicykla.',
  'Pri recyklácii hliníka sa ušetrí až 95 % energie v porovnaní s jeho výrobou z bauxitu.',
  '50 % plastov použijeme len 1x a potom vyhodíme.',
  'Kvôli plastovému odpadu v moriach a oceánoch ročne umrie asi 1 milión morských vtákov a 100 000 morských cicavcov.',
  'V strede severného Tichého oceána je ostrov, tzv. „Veľká pacifická odpadková záplata“. „Ostrov“ má rozlohu Francúzska, Nemecka a Španielska dokopy a je tvorený prevažne z plastov.',
  'Až 45 % odpadu z domácnosti tvorí bioodpad. Kompostovaním tak vieme zredukovať množstvo nami vyprodukovaného odpadu takmer o polovicu. O rovnaké množstvo tak zredukujeme aj naše náklady na odvoz a spracovanie nášho odpadu.',
  'Vyzbierané jedlé oleje a tuky budú ekologicky spracované a využité ako zložka pri výrobe biopalív.',
  'Globálna produkcia oblečenia sa od roku 2000 do 2014 zdvojnásobila.',
  'Jeden človek kupuje každým rokom v priemere o 60 % viac vecí a ponecháva si ich o polovicu kratšie ako pred 15 rokmi, čím generuje obrovské množstvo odpadu končiaceho prevažne na skládkach.',
];

export const Bubles = ({ position }) => {
  const [i, setIndex] = useState(0);

  const showChoice = () => {
    setIndex((i) => (i + 1) % motivation.length);
  };
  useEffect(() => {
    const intervalID = setInterval(showChoice, 10000);
    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return (
    <p
      className={`buble__content ${
        position === 'left' ? 'buble__left' : 'buble__right'
      }`}
    >
      "{motivation[i]}"
    </p>
  );
};
