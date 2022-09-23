import React from 'react';
import PropTypes from 'prop-types';

import './7segment.css';
import './AudioName.css';

export default function AudioName(props) {
  const { audioName } = props;

  const displayClasses = [];

  for (let i = 0; i < 6; i += 1) {
    if (!audioName[i]) {
      displayClasses[i] = 'display-container display-off';
    } else {
      displayClasses[i] = `display-container display-${audioName[i].toLowerCase()}`;
    }
  }

  return (
    <div className="clock-container">
      <div className={displayClasses[0]}>
        <div className="segment-x segment-a"><span className="segment-border" /></div>
        <div className="segment-y segment-b"><span className="segment-border" /></div>
        <div className="segment-y segment-c"><span className="segment-border" /></div>
        <div className="segment-x segment-d"><span className="segment-border" /></div>
        <div className="segment-y segment-e"><span className="segment-border" /></div>
        <div className="segment-y segment-f"><span className="segment-border" /></div>
        <div className="segment-x segment-g"><span className="segment-border" /></div>
      </div>
      <div className={displayClasses[1]}>
        <div className="segment-x segment-a"><span className="segment-border" /></div>
        <div className="segment-y segment-b"><span className="segment-border" /></div>
        <div className="segment-y segment-c"><span className="segment-border" /></div>
        <div className="segment-x segment-d"><span className="segment-border" /></div>
        <div className="segment-y segment-e"><span className="segment-border" /></div>
        <div className="segment-y segment-f"><span className="segment-border" /></div>
        <div className="segment-x segment-g"><span className="segment-border" /></div>
      </div>
      <div className={displayClasses[2]}>
        <div className="segment-x segment-a"><span className="segment-border" /></div>
        <div className="segment-y segment-b"><span className="segment-border" /></div>
        <div className="segment-y segment-c"><span className="segment-border" /></div>
        <div className="segment-x segment-d"><span className="segment-border" /></div>
        <div className="segment-y segment-e"><span className="segment-border" /></div>
        <div className="segment-y segment-f"><span className="segment-border" /></div>
        <div className="segment-x segment-g"><span className="segment-border" /></div>
      </div>
      <div className={displayClasses[3]}>
        <div className="segment-x segment-a"><span className="segment-border" /></div>
        <div className="segment-y segment-b"><span className="segment-border" /></div>
        <div className="segment-y segment-c"><span className="segment-border" /></div>
        <div className="segment-x segment-d"><span className="segment-border" /></div>
        <div className="segment-y segment-e"><span className="segment-border" /></div>
        <div className="segment-y segment-f"><span className="segment-border" /></div>
        <div className="segment-x segment-g"><span className="segment-border" /></div>
      </div>
      <div className={displayClasses[4]}>
        <div className="segment-x segment-a"><span className="segment-border" /></div>
        <div className="segment-y segment-b"><span className="segment-border" /></div>
        <div className="segment-y segment-c"><span className="segment-border" /></div>
        <div className="segment-x segment-d"><span className="segment-border" /></div>
        <div className="segment-y segment-e"><span className="segment-border" /></div>
        <div className="segment-y segment-f"><span className="segment-border" /></div>
        <div className="segment-x segment-g"><span className="segment-border" /></div>
      </div>
      <div className={displayClasses[5]}>
        <div className="segment-x segment-a"><span className="segment-border" /></div>
        <div className="segment-y segment-b"><span className="segment-border" /></div>
        <div className="segment-y segment-c"><span className="segment-border" /></div>
        <div className="segment-x segment-d"><span className="segment-border" /></div>
        <div className="segment-y segment-e"><span className="segment-border" /></div>
        <div className="segment-y segment-f"><span className="segment-border" /></div>
        <div className="segment-x segment-g"><span className="segment-border" /></div>
      </div>
    </div>
  );
}

AudioName.propTypes = {
  audioName: PropTypes.string.isRequired,
};
