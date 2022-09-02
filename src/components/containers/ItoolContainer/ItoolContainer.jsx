import React, { useState } from 'react';
import './ItoolContainer.css';

const ItoolContainer = (props) => {
    
    let [isShownComponent, setIsShownComponent] = useState(false);

    function toggleStateBoolean(stateReference, setFunction){
        setFunction(!stateReference);
    }
    function renderSwitchComponent(handlerBoolean, componentTrue, componentFalse){
        return handlerBoolean
        ? componentTrue
        : componentFalse;
    }
    return(
        <div className="ItoolContainer">
            <button className='container_Itool_button' onClick={()=>toggleStateBoolean(isShownComponent, setIsShownComponent)}>
            {props.title}
            </button>
            {renderSwitchComponent(isShownComponent, props.children)}
        </div>
);}

export default ItoolContainer;
