import React from 'react';
import { RecyIcon } from '../icons/RecyIcon';
import { EarthIcon } from '../icons/EarthIcon';
import './styles.css';

export const Home = () => {
  return (
    <div className="uvod">
      <h1 className="strip__title"> Vyhľadávač odpadových nádob </h1>
      <EarthIcon />
      <br />
      <p className="strip__content">
        Možno sa aj ty občas ocitneš v situácii, kedy chceš správne vytriediť a
        recyklovať vec, ktorá už doslúžila, ale nie si si istý do ktorého
        kontajnera danú vec vyhodiť. Tu nájdeš praktického pomocníka v podobe
        online vyhľadávača, vďaka ktorému môžeš kedykoľvek rýchlo zistiť kam s
        odpadom, aby tvoje úsilie malo zmysel.
      </p>
      <br />
      <p className="strip__content strip__content--three">
        Triedený zber odpadov na Slovensku nie je jednotný, odpady sa zbierajú v
        rôznych kombináciách. Najprv si vyber z ponuky farebných kontajnerov
        tie, ktoré máš vo svojom okolí k dispozícii. Vyhľadávač sa vzhľadom k
        tvojej kombinácii bude snažiť vybrať pre danú vec ten správny kontajner.
      </p>
      <br />
      <RecyIcon />
    </div>
  );
};
