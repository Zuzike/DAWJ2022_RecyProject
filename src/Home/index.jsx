import React from 'react';
import { RecyIcon } from '../icons/RecyIcon';
import { EarthIcon } from '../icons/EarthIcon';
import './styles.css';

export const Home = () => {
  return (
    <div className="uvod">
      <h1 className="strip__title"> Vyhľadávač odpadových nádob </h1>
      <EarthIcon />
      <p className="strip__content">
        Často sa nám stáva, že nevieme, do akého kontajneru hodiť vec, ktorá nám
        už doslúžila. Vyhľadávač ti pomôže rýchlo nájsť ten správny kontajner.
      </p>
      <p className="strip__content">
        Na Slovensku máme troch zložitejšie systémy triedenia, tak na rôznych
        miestach môžeš použiť tú istú nádobu na rôzny odpad.
      </p>
      <p className="strip__content strip__content--three">
        V prvom kroku sa preto zaraď do skupiny a potom stačí zadať názov veci,
        s ktorou si nevieš celkom rady. Vyhľadávač ti aj napovedá a bude sa
        snažiť vybrať ten vhodný kontajner. Niekedy sa s odpadom dá naložiť
        rôzne, preto ďalej na stránke nájdeš aj veľa užitočných informácií.
      </p>
      <RecyIcon />
    </div>
  );
};
