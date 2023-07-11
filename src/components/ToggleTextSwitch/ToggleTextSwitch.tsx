import React, { Component, FC } from 'react';
import './ToggleTextSwitch.scss';

interface ToggleProps {
  name: string,
  handleTextToggle: () => void,
}

const ToggleSwitch: FC<ToggleProps> = ({name, handleTextToggle}) => {
  return <>
    <div className="toggle-switch" >
      <input
        type="checkbox"
        className="toggle-switch-checkbox"
        name={name}
        id={name}
        onClick={() => handleTextToggle()}
      />
      <label className="toggle-switch-label" htmlFor={name}>
        <span className="toggle-switch-inner" />
        <span className="toggle-switch-switch" />
      </label>
    </div>
  </>;
}

export default ToggleSwitch;