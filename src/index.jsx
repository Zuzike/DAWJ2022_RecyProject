import React, { useState, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import { Parallax } from 'react-parallax';
import imguvod from './img/trefaNaKos.jpg';
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
import { Home } from './Home';
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
              <div className="strip strip__one">
                <Home />
              </div>
              <div className="buble buble__one">
                <Bubles />
              </div>
            </Parallax>
          </section>

          <section ref={sectionRefs[1]} id="search">
            <Parallax bgImage={imgsearcher} strength={300}>
              <div className="search">
                <Variations group={group} onChangeGroup={setGroup} />

                <Search group={group} />
              </div>
            </Parallax>
          </section>

          <section ref={sectionRefs[2]} id="rules">
            <Parallax bgImage={imgrules} strength={300}>
              <div className="strip strip__two">
                {' '}
                <Rules />
              </div>
              <div className="buble buble__two">
                <Bubles position="left" />
              </div>
            </Parallax>
          </section>

          <section ref={sectionRefs[3]} id="containers">
            <Parallax bgImage={imgcontainers} strength={300}>
              <Containers />
            </Parallax>
          </section>

          <section ref={sectionRefs[4]} id="footer">
            <Parallax strength={500}>
              <div>
                <Footer />
              </div>
            </Parallax>
          </section>
          <p className="footer__bottom">
            Trefa na k???? ?? 2022. Autorky: Ivana Pla??ienkov??, Zuzana Nemesov??;
            Mentor: Pavol Ot??en????
          </p>
        </div>
      )}
    </Scrollspy>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
