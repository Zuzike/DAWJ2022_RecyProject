import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import { Parallax, Background } from 'react-parallax';
import img1 from './img/buckets.jpg';
import img2 from './img/bird_trash.jpg';
import img3 from './img/water_pipe.jpg';

const App = () => (
  <div className="main">
    <Parallax bgImage={img1} strength={500}>
      <div style={{ height: 500 }}>
        <div className="strip strip__one">
          <h1 className="strip__title">Návod </h1>
        </div>
      </div>
    </Parallax>
    <h2>| | |</h2>
    <Parallax bgImage={img2} blur={{ min: -1, max: 3 }}>
      <div style={{ height: 500 }}>
        <div className="strip strip__two">
          {' '}
          <h1 className="strip__title">Päť pravidiel recyklácie</h1>
        </div>
      </div>
    </Parallax>
    <h2>| | |</h2>
    <Parallax bgImage={img3} strength={-100}>
      <div style={{ height: 500 }}>
        <div className="strip strip__three">
          <h1 className="strip__title">Niečo zmysluplné</h1>
        </div>
      </div>
    </Parallax>
    <h2>| | |</h2>
    <Parallax strength={500}>
      <Background className="custom-bg">
        <div
          style={{
            height: 2000,
            width: 2000,
            backgroundImage: "url('https://i.imgur.com/8CV5WAB.png')",
          }}
        />
      </Background>
      <div>
        <br />
        custom background component
        <br />
        <br />
        custom background component
        <br />
        <br />
        custom background component
        <br />
        <br />
      </div>
    </Parallax>
    <div style={{ height: 500 }} />
    <h2>{'\u2728'}</h2>
  </div>
);

createRoot(document.querySelector('#app')).render(<App />);
