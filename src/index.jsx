import React, { useRef } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import { Parallax, Background } from 'react-parallax';
import img1 from './img/buckets.jpg';
import img2 from './img/bird_trash.jpg';
import img3 from './img/water_pipe.jpg';
import { Rules } from './Rules';
import { Search } from './Search';
import { Navigation } from './Navigation';
import { Scrollspy } from '@makotot/ghostui';
import { Variations } from './Variations';
import { Containers } from './Containers';

const App = () => {
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
            <Parallax bgImage={img1} strength={300}>
              <div style={{ height: 800 }}>
                <div className="strip strip__one">
                  <h1 className="strip__title">
                    {' '}
                    V našej krajine máme rôzne možnosti triedenia odpadov. Vyber
                    si z ponuky smetných košov tie, ktoré vídaš vo svojom okolí.
                    Potom do vyhľadávača napíš, čoho presne sa potrebuješ
                    zbaviť. Vyhľadávač sa posnaží ťa nasmerovať na správnu
                    odpadovú nádobu.
                  </h1>
                </div>
              </div>
            </Parallax>
          </section>
          <section ref={sectionRefs[1]} id="search">
            <Variations />
            <Search />
          </section>
          <section ref={sectionRefs[2]} id="rules">
            <Parallax bgImage={img2} strength={300}>
              <div style={{ height: 500 }}>
                <div className="strip strip__two">
                  {' '}
                  <Rules />
                </div>
              </div>
            </Parallax>
          </section>
          <section ref={sectionRefs[3]} id="containers">
            <h2>| | |</h2>
            <Containers />
          </section>
          <Parallax bgImage={img3} strength={-100}>
            <div style={{ height: 700 }}>
              <div className="strip strip__three">
                <h1 className="strip__title">Niečo zmysluplné</h1>
              </div>
            </div>
          </Parallax>

          <h2>| | |</h2>
          <section ref={sectionRefs[4]} id="footer">
            <Parallax strength={500}></Parallax>
            <div style={{ height: 500 }} />
            <h2>{'\u2728'}</h2>
          </section>
        </div>
      )}
    </Scrollspy>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
