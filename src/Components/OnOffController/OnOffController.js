import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './OnOffController.css';

export default function OnOffButton(props) {
  const { isOn, setIsOn, setAudioName } = props;

  const handleOnOffClick = () => {
    setIsOn(!isOn);
    setAudioName('');
  };

  const ledClass = classNames({
    led: true,
    'led--on': isOn,
    'led--off': !isOn,
  });

  const buttonClass = classNames({
    'drum-pad': true,
    'drum-pad--pressed': isOn,
  });

  return (
    <div className="controllers__on-off">
      <div className={ledClass} />
      <div className="vl" />
      <div className="pad">
        <button
          id="on-off"
          className={buttonClass}
          aria-label="On Off button"
          type="button"
          onClick={() => handleOnOffClick()}
        />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label className="pad__label--bottom" htmlFor="on-off">
          PLAY/STOP
        </label>
      </div>
    </div>
  );
}

OnOffButton.propTypes = {
  isOn: PropTypes.bool.isRequired,
  setIsOn: PropTypes.func.isRequired,
  setAudioName: PropTypes.func.isRequired,
};
