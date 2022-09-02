import React from 'react';
import './ItoolContainer.css';

import { useStateBoolean } from '../../../hooks/useStateBoolean';

const ItoolContainer = (props) => {
    
    let [{toggleStateBoolean, renderSwitchComponent}] = useStateBoolean();

    return(
        <div className="ItoolContainer">
            <button className='container_Itool_button' onClick={()=>toggleStateBoolean()}>
            {props.title}
            </button>
            {renderSwitchComponent(props.children)}
        </div>
);}

export default ItoolContainer;
