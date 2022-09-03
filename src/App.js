import React, { useState } from 'react';
import './App.css';

import Pads from './Pads';
import DrumPad from './assets/DrumPads';

export default function App() {
  const [currentPad, setCurrentPad] = useState('');
  return (
    <div id="drum-machine">
      <div id="display">
        <p>{currentPad}</p>
      </div>

      <div className="pads">
        { Pads.map((pad) => (
          <DrumPad
            key={pad.id}
            pad={pad}
            setCurrentPad={setCurrentPad}
          />
        ))}
      </div>
    </div>
  );
}
