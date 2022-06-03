import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import { Parallax, Background } from 'react-parallax';
import img1 from './img/buckets.jpg';
import img2 from './img/bird_trash.jpg';
import img3 from './img/water_pipe.jpg';
import { Search } from './Search';

const App = () => (
  <div className="main">
    <Parallax bgImage={img1} strength={300}>
      <div style={{ height: 800 }}>
        <div className="strip strip__one">
          <h1 className="strip__title">Návod </h1>
        </div>
      </div>
    </Parallax>
    <Search />
    <Parallax bgImage={img2} strength={300}>
      <div style={{ height: 600 }}>
        <div className="strip strip__two">
          {' '}
          <h1 className="strip__title">Päť pravidiel recyklácie</h1>
        </div>
      </div>
    </Parallax>

    <h2>| | |</h2>
    <Parallax bgImage={img3} strength={-100}>
      <div style={{ height: 700 }}>
        <div className="strip strip__three">
          <h1 className="strip__title">Niečo zmysluplné</h1>
        </div>
      </div>
    </Parallax>
    <h2>| | |</h2>
    <Parallax strength={500}></Parallax>
    <div style={{ height: 500 }} />
    <h2>{'\u2728'}</h2>
  </div>
);

createRoot(document.querySelector('#app')).render(<App />);
