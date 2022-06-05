import React, { useState, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import { Parallax } from 'react-parallax';
import imguvod from './img/trefaNaKos.jpg';
import imgkontajnery from './img/kontajnery.jpg';
import imgrules from './img/cajka.jpg';
import imgsearcher from './img/papier.jpg';
import { Rules } from './Rules';
import { Search } from './Search';
import { Navigation } from './Navigation';
import { Scrollspy } from '@makotot/ghostui';
import { Variations } from './Variations';
import { Containers } from './Containers';
import { Bubles } from './Bubles';
import { StripContent } from './StripContent';

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
            <Parallax
              bgImageStyle={{ heigth: '100%', width: '100%' }}
              bgImage={imguvod}
              strength={300}
            >
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
          <section ref={sectionRefs[1]} id="search" className="search">
            <Parallax bgImage={imgsearcher} strength={300}>
              <div style={{ height: 1300, width: 2000 }}>
                <Variations group={group} onChangeGroup={setGroup} />

                <Search group={group} />
              </div>
            </Parallax>
          </section>
          <h1> </h1>
          <section ref={sectionRefs[2]} id="rules">
            <Parallax bgImage={imgrules} strength={300}>
              <div style={{ height: 1300, width: 2000 }}>
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
            <Parallax
              bgImage={imgkontajnery}
              bgImageStyle={{ heigth: '100%', width: '100%' }}
              strength={-100}
            >
              <div style={{ height: 1300 }}>
                <Containers />
              </div>
            </Parallax>
            <h1> </h1>
          </section>

          <h1> </h1>
          <section ref={sectionRefs[4]} id="footer">
            <Parallax strength={500}>
              <div className="footer" style={{ height: 300 }} />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Sapiente ipsa deserunt repudiandae, porro nam magni quidem
                consequatur nesciunt. Iure inventore magni quasi, voluptatibus
                deleniti accusamus sunt quos laborum porro ab.
              </p>
            </Parallax>
          </section>
        </div>
      )}
    </Scrollspy>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
