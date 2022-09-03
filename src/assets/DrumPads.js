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
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
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
  );
}

DrumPad.propTypes = {
  pad: PropTypes.instanceOf(Object).isRequired,
  setCurrentPad: PropTypes.func.isRequired,
};
