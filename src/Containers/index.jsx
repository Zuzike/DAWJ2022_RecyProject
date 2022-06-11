import React from 'react';
import './style.css';
import { useState } from 'react';
import { Papier } from './Papier';
import { ZahradnyBioodpad } from './ZahradnyBioodpad';
import { Sklo } from './Sklo';
import { Kovy } from './Kovy';
import { Elektro } from './Elektro';
import { Plasty } from './Plasty';
import { KuchynskyBioodpad } from './KuchynskyBioodpad';
import { JedleOleje } from './JedleOleje';
import { Kompost } from './Kompost';
import { NapojoveKartony } from './NapojoveKartony';
import { Textil } from './Textil';
import { ZalohovanieFlias } from './ZalohovanieFlias';

export const Containers = () => {
  const [type, setType] = useState('');

  return (
    <>
      {!type ? (
        <div className="containers">
          <div onClick={() => setType('papier')} className="container">
            PAPIER
          </div>
          <div onClick={() => setType('kov')} className="container">
            KOVY
          </div>
          <div onClick={() => setType('plasty')} className="container">
            PLASTY
          </div>
          <div onClick={() => setType('sklo')} className="container">
            SKLO
          </div>
          <div
            onClick={() => setType('zalohovanie_flias')}
            className="container"
          >
            ZÁLOHOVANIE FLIAŠ A PLECHOVIEK OD NÁPOJOV
          </div>
          <div
            onClick={() => setType('napojove_kartony')}
            className="container"
          >
            NÁPOJOVÉ KARTÓNY
          </div>
          <div
            onClick={() => setType('zahradny_bioodpad')}
            className="container"
          >
            ZÁHRADNÝ BIOODPAD
          </div>
          <div
            onClick={() => setType('kuchynsky_bioodpad')}
            className="container"
          >
            KUCHYNSKÝ BIOODPAD
          </div>
          <div onClick={() => setType('jedle_oleje')} className="container">
            JEDLÉ OLEJE A TUKY
          </div>
          <div onClick={() => setType('kompost')} className="container">
            KOMPOST
          </div>
          <div onClick={() => setType('elektro')} className="container">
            ELEKTRO, BATÉRIE A AKUMULÁTORY
          </div>
          <div onClick={() => setType('textil')} className="container">
            TEXTIL
          </div>
        </div>
      ) : (
        <div>
          <div className="popup">
            <button onClick={() => setType('')} className="button_close">
              X
            </button>
            {type === 'papier' && <Papier />}
            {type === 'kov' && <Kovy />}
            {type === 'plasty' && <Plasty />}
            {type === 'kompost' && <Kompost />}
            {type === 'kuchynsky_bioodpad' && <KuchynskyBioodpad />}
            {type === 'sklo' && <Sklo />}
            {type === 'zahradny_bioodpad' && <ZahradnyBioodpad />}
            {type === 'napojove_kartony' && <NapojoveKartony />}
            {type === 'textil' && <Textil />}
            {type === 'elektro' && <Elektro />}
            {type === 'jedle_oleje' && <JedleOleje />}
            {type === 'zalohovanie_flias' && <ZalohovanieFlias />}
          </div>
        </div>
      )}
    </>
  );
};
