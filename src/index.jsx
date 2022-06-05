import React, { useState, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import { Parallax } from 'react-parallax';
import img1 from './img/buckets.jpg';
import img2 from './img/bird_trash.jpg';
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
            <Parallax bgImage={img1} strength={300}>
              <div style={{ height: 800 }}>
                <div className="strip strip__one">
                  <StripContent />
                </div>
                <div className="buble buble__one">
                  <Bubles />
                </div>
              </div>
            </Parallax>
          </section>

          <section ref={sectionRefs[1]} id="search" className="search">
            <Variations group={group} onChangeGroup={setGroup} />
            <Search group={group} />
          </section>

          <section ref={sectionRefs[2]} id="rules">
            <Parallax bgImage={img2} strength={300}>
              <div style={{ height: 800 }}>
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

          <section ref={sectionRefs[3]} id="containers">
            <Containers />
          </section>

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
