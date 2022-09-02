import { useState } from 'react';

export function useStateBoolean() {
    
    let [isShownComponent, setIsShownComponent] = useState(false);

    function toggleStateBoolean(){
        setIsShownComponent(!isShownComponent);
    }
    function renderSwitchComponent(componentTrue, componentFalse){
        return isShownComponent
        ? componentTrue
        : componentFalse;
    }
    return [{toggleStateBoolean, renderSwitchComponent}, isShownComponent];
}