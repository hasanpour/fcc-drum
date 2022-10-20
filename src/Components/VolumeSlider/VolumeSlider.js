import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import './VolumeSlider.css';

export default function VolumeSlider(props) {
  const { setVolume } = props;
  const sliderRef = useRef(null);
  const knobRef = useRef(null);

  const calculateDegree = (event) => {
    const x1 = sliderRef.current.offsetWidth / 2 + sliderRef.current.offsetLeft;
    const y1 = sliderRef.current.offsetHeight / 2 + sliderRef.current.offsetTop;
    const x2 = event.pageX;
    const y2 = event.pageY;

    const deltaX = x1 - x2;
    const deltaY = y1 - y2;

    const rad = Math.atan2(deltaY, deltaX);

    const deg = rad * (180 / Math.PI);
    return deg;
  };

  const handleMouseMove = (event) => {
    let angle = (Math.round(calculateDegree(event) - 90));

    if (angle < 0) {
      angle = 360 + angle; // Always show angle positive
    }

    if (angle <= 50 || angle >= 310) {
      knobRef.current.style.transform = `rotate(${angle}deg)`;

      if (angle >= 0 && angle <= 50) {
        setVolume(angle + 50);
      } else {
        setVolume(angle - 310);
      }
    }
  };

  const handleMouseDown = () => {
    knobRef.current.addEventListener('mousemove', handleMouseMove);
  };

  const handleMouseUp = () => {
    knobRef.current.removeEventListener('mousemove', handleMouseMove);
  };

  useEffect(() => {
    knobRef.current.addEventListener('mousedown', handleMouseDown);
    knobRef.current.addEventListener('mouseup', handleMouseUp);

    return () => {
      knobRef.current.removeEventListener('mousedown', handleMouseDown);
      knobRef.current.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div className="controllers__volume">
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label className="volume__label">
        VOLUME
      </label>
      <div className="volume__slider" ref={sliderRef}>
        <div
          className="slider__knob"
          ref={knobRef}
        />
      </div>
    </div>
  );
}

VolumeSlider.propTypes = {
  setVolume: PropTypes.func.isRequired,
};
