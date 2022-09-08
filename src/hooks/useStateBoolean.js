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
    function switchStateToFalse(){
      setIsShownComponent(false)
    }
    function switchStateToTrue(){
      setIsShownComponent(true)
    }
    return [{toggleStateBoolean, renderSwitchComponent}, isShownComponent, {switchStateToFalse, switchStateToTrue}];
}