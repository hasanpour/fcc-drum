import React, { useState } from 'react';

import Pads from './Components/DrumPad/Pads';
import DrumPad from './Components/DrumPad/DrumPad';
import Volume from './Components/7Segments/Volume';
import AudioName from './Components/7Segments/AudioName';
import OnOffController from './Components/OnOffController/OnOffController';
import VolumeSlider from './Components/VolumeSlider/VolumeSlider';
import Logo from './assets/images/logo.png';

import './App.css';

export default function App() {
  const [volume, setVolume] = useState(100);
  const [audioName, setAudioName] = useState('');
  const [isOn, setIsOn] = useState(true);

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
                isOn={isOn}
                volume={volume}
              />
            ))}
          </div>

          <div className="displays">
            <Volume
              className="display__volume"
              volume={volume}
              isOn={isOn}
            />
            <AudioName
              id="display"
              audioName={audioName}
              isOn={isOn}
            />
          </div>
        </div>

        <div className="controllers">
          <VolumeSlider setVolume={setVolume} />
          <OnOffController
            isOn={isOn}
            setIsOn={setIsOn}
            setAudioName={setAudioName}
          />
        </div>
      </main>
    </>
  );
}
