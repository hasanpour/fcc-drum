import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

export default function DrumPad(props) {
  const { pad, setCurrentPad } = props;

  const audioRef = useRef(null);

  const playAudio = () => {
    audioRef.current.currentTime = 0;
    audioRef.current.play();
    setCurrentPad(pad.name);
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === pad.keyCode) {
      playAudio();
      document.getElementById(pad.id).classList.add('active');
    }
  };

  const handleKeyUp = (event) => {
    if (event.keyCode === pad.keyCode) {
      // playAudio();
      document.getElementById(pad.id).classList.remove('active');
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <div className="pad">
      <label className="pad__label" htmlFor={pad.id}>
        {pad.name}
      </label>
      <button
        id={pad.id}
        className="drum-pad"
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
  setCurrentPad: PropTypes.func.isRequired,
};
