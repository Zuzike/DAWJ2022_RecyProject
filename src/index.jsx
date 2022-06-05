import React, { useState, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import { Parallax } from 'react-parallax';
import imguvod from './img/trefaNaKos.jpg';
import imgkontajnery from './img/kontajnery.jpg';
import imgrules from './img/cajka.jpg';
import imgsearcher from './img/papier.jpg';
import imgcontainers from './img/kontajnery-velke.jpg';
import { Rules } from './Rules';
import { Search } from './Search';
import { Navigation } from './Navigation';
import { Scrollspy } from '@makotot/ghostui';
import { Variations } from './Variations';
import { Containers } from './Containers';
import { Bubles } from './Bubles';
import { StripContent } from './StripContent';
import { Footer } from './Footer';

const App = () => {
  const [group, setGroup] = useState('');

  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  return (
    <Scrollspy sectionRefs={sectionRefs}>
      {({ currentElementIndexInViewport }) => (
        <div className="main">
          <Navigation activeIndex={currentElementIndexInViewport} />
          <section ref={sectionRefs[0]} id="home">
            <Parallax bgImage={imguvod} strength={300}>
              <div style={{ height: 1300, width: 2400 }}>
                <div className="strip strip__one">
                  <StripContent />
                </div>
                <div className="buble buble__one">
                  <Bubles />
                </div>
              </div>
            </Parallax>
          </section>
          <h1> </h1>
          <section ref={sectionRefs[1]} id="search">
            <Parallax bgImage={imgsearcher} strength={300}>
              <div className="search">
                <Variations group={group} onChangeGroup={setGroup} />

                <Search group={group} />
              </div>
            </Parallax>
          </section>
          <h1> </h1>
          <section ref={sectionRefs[2]} id="rules">
            <Parallax
              bgImage={imgrules}
              strength={300}
              style={{ height: 1300 }}
            >
              <div>
                <div className="strip strip__two">
                  {' '}
                  <Rules />
                </div>
                <div className="buble buble__two">
                  <Bubles position="left" />
                </div>
              </div>
            </Parallax>
          </section>
          <h1> </h1>
          <section ref={sectionRefs[3]} id="containers">
            <Parallax bgImage={imgcontainers} strength={300}>
              {/* <div style={{ height: 1300 }}> */}
              <Containers />
              {/* </div> */}
            </Parallax>
            <h1> </h1>
          </section>

          <h1> </h1>
          <section ref={sectionRefs[4]} id="footer">
            <Parallax strength={500}>
              <div style={{ height: 300 }}>
                <Footer />
              </div>
            </Parallax>
          </section>
          <p className="footer__bottom">
            Trefa na kôš © 2022. Autorky: Ivana Plašienková, Zuzana Nemesová;
            Mentor: Pavol Otčenáš
          </p>
        </div>
      )}
    </Scrollspy>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
