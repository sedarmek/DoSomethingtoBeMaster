import React from 'react';

import { useStateBoolean } from '../../hooks/useStateBoolean';

const TogglerComponent = ({firstIcon, lastIcon, component, styles}) => {

  let [{toggleStateBoolean, renderSwitchComponent}, isContainerItoolsShown] = useStateBoolean();
  
  return(
  <div className="TogglerComponent" style={styles.toggler}>
    <div style={styles.header}>
      <h2 style={styles.title.style}>
        {isContainerItoolsShown 
          ? styles.title.name 
          : ''
        }
      </h2>
      <button style={styles.button} onClick={()=> toggleStateBoolean()}>
        {isContainerItoolsShown 
          ? firstIcon 
          : lastIcon
        }
      </button>
    </div>
    {renderSwitchComponent(component)}
  </div>
)};

export default TogglerComponent;
