import React, { useState } from 'react';

import Pads from './Pads';
import DrumPad from './Components/DrumPads';
import Volume from './Components/7Segments/Volume';
import AudioName from './Components/7Segments/AudioName';
import Logo from './assets/images/logo.png';

import './App.css';

export default function App() {
  // eslint-disable-next-line no-unused-vars
  const [volume, setVolume] = useState(100);
  const [audioName, setAudioName] = useState('');

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
                setAudioName={setAudioName}
              />
            ))}
          </div>

          <div className="displays">
            <Volume
              className="display__volume"
              volume={volume}
            />
            <AudioName
              id="display"
              audioName={audioName}
            />
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
