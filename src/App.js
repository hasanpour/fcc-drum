import React, { useState } from 'react';

import Pads from './Pads';
import DrumPad from './Components/DrumPads';
import Logo from './assets/images/logo.png';

import './App.css';

export default function App() {
  const [currentPad, setCurrentPad] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [volume, setVolume] = useState(100);

  return (
    <>
      <header>
        <div className="header__lines__left" />
        <img className="header__logo" src={Logo} alt="Linn Drum" />
        <div className="header__lines__right" />
      </header>
      <main>
        <div id="drum-machine">
          <div className="pads">
            { Pads.map((pad) => (
              <DrumPad
                key={pad.id}
                pad={pad}
                setCurrentPad={setCurrentPad}
              />
            ))}
          </div>

          <div className="displays">
            <div className="display__volume">
              <p>{currentPad}</p>
            </div>
            <div id="display">
              <p>{currentPad}</p>
            </div>
          </div>
        </div>

        <div className="controllers">
          <div className="controllers__volume">
            <p>volume</p>
          </div>
          <div className="controllers__on-off">
            <p>on-off</p>
          </div>
        </div>
      </main>
    </>
  );
}
