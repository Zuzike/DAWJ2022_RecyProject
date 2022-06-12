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
        Ak si v situácii, kedy vec ktorá chceš vytriediť a recyklovať vec, ktorá
        už doslúžila, nie si si istí do ktorého kontajnera danú vec vyhodiť.
        Nájdeš tu preto praktického pomocníka v podobe vyhľadávača, vďaka
        ktorému môžeš kedykoľvek rýchlo zisťiť kam s odpadom, aby tvoje úsilie
        malo zmysel.
      </p>
      <p className="strip__content">
        Na Slovensku máme trocha zložitejšie systémy triedenia odpadu, tak na
        rôznych miestach môžeš použiť tú istú nádobu na rôzny odpad.
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
