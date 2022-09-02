import React, { useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'
import './Itools.css';

import ItoolContainer from '../ItoolContainer/ItoolContainer';
import Cronometro from '../../Cronometro/Cronometro';
import Convertidor from '../../Convertidor/Convertidor';
import QuicklyNote from '../../QuicklyNote/QuicklyNote';

const Itools = () => {
  
  let [isContainerItoolsShown,setIsContainerItoolsShown] = useState(false);

  function renderSwitchComponent(switcher, componentTrue, componentFalse){
    if(switcher){
      return componentTrue;
    }else{
        return componentFalse;
    }
  }

  function toggleStateBoolean(dataState, setFunctionState){
            setFunctionState(!dataState);
  }

  return(
    <div className="Itools">
        <button className='itools_button' onClick={()=> toggleStateBoolean(isContainerItoolsShown, setIsContainerItoolsShown)}>
            {isContainerItoolsShown 
                ? <FaArrowCircleRight className='Itools_icon'/> 
                : <FaArrowCircleLeft  className='Itools_icon'/>
            }
        </button>
      
    {renderSwitchComponent(isContainerItoolsShown, 
      <div className='containerItools'>
        <ItoolContainer title='Cronometro'><Cronometro/></ItoolContainer>
        <ItoolContainer title='Convertidor'><Convertidor/></ItoolContainer>
        <ItoolContainer title='Nota rapida'><QuicklyNote/></ItoolContainer>
      </div>
    )}
    </div>
);}

export default Itools;
