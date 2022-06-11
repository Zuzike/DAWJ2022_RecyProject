import React from 'react';
import './styles.css';

export const Home = () => {
  return (
    <div className="uvod">
      <h1 className="strip__title"> Vyhľadávač odpadových nádob </h1>
      <p className="strip__content">
        Možno ste sa aj vy neraz ocitli v situácii, kedy ste vec ktorá vám už
        doslúžila, chceli vytriediť a poslať tak na recykláciu. Tento dobrý
        zámer sa však často nepodarí uskutočniť, pretože si nie sme istí do
        ktorého kontajnera danú vec vyhodiť. Prinášame preto praktického
        pomocníka v podobe online vyhľadávača, vďaka ktorému môžete kedykoľvek
        rýchlo zisťiť kam s odpadom, aby vaše úsilie malo zmysel.
      </p>
    </div>
  );
};
