/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import './DrumPad.css';

export default function DrumPad(props) {
  const {
    pad,
    setAudioName,
    isOn,
    volume,
  } = props;

  const [isActive, setIsActive] = useState(false);
  const audioRef = useRef(null);

  const playAudio = () => {
    if (isOn) {
      audioRef.current.currentTime = 0;
      audioRef.current.volume = volume / 100;
      audioRef.current.play();
      setAudioName(pad.name);
    }
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === pad.keyCode) {
      playAudio();
      setIsActive(true);
    }
  };

  const handleKeyUp = (event) => {
    if (event.keyCode === pad.keyCode) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [volume, isOn]);

  return (
    <div className="pad">
      <label className="pad__label" htmlFor={pad.id}>
        {pad.name}
      </label>
      <button
        id={pad.id}
        className={isActive ? 'drum-pad active' : 'drum-pad'}
        type="button"
        onClick={() => playAudio()}
      >
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <audio id={pad.key} src={pad.audio} className="clip" ref={audioRef} />
        {pad.key}
      </button>
    </div>
  );
}

DrumPad.propTypes = {
  pad: PropTypes.instanceOf(Object).isRequired,
  setAudioName: PropTypes.func.isRequired,
  isOn: PropTypes.bool.isRequired,
  volume: PropTypes.number.isRequired,
};
