import React from 'react';
// import PropTypes from 'prop-types';
// import './TogglerComponent.css';

import { useStateBoolean } from '../../hooks/useStateBoolean';

const TogglerComponent = ({firstIcon, lastIcon, component, toggleStyle}) => {

  let [{toggleStateBoolean, renderSwitchComponent}, isContainerItoolsShown] = useStateBoolean();
  
  let containerButtonStyle = {
    position: 'relative',
    backgroundColor: '#20242b',
    textAlign: 'right',

  }
  let buttonStyle = {
    color: 'black',
    height: 'auto',
    width: 'auto',
    margin: '0',
    padding: '0',
    border: 'none',
    backgroundColor: 'transparent',
  }
  return(
  <div className="TogglerComponent" style={toggleStyle}>
    <div style={containerButtonStyle}>
      <button style={buttonStyle} onClick={()=> toggleStateBoolean()}>
        {isContainerItoolsShown 
          ? firstIcon 
          : lastIcon
        }
      </button>
    </div>
    {renderSwitchComponent(component)}
  </div>
)};

TogglerComponent.propTypes = {};

TogglerComponent.defaultProps = {};

export default TogglerComponent;
