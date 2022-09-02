import React from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'
import './Itools.css';
import { useStateBoolean } from '../../../hooks/useStateBoolean';

import ItoolContainer from '../ItoolContainer/ItoolContainer';
import Cronometro from '../../Cronometro/Cronometro';
import Convertidor from '../../Convertidor/Convertidor';
import QuicklyNote from '../../QuicklyNote/QuicklyNote';

const Itools = () => {
  
    let [{toggleStateBoolean, renderSwitchComponent}, isContainerItoolsShown] = useStateBoolean();

  

  return(
    <div className="Itools">
        <button className='itools_button' onClick={()=> toggleStateBoolean()}>
            {isContainerItoolsShown 
                ? <FaArrowCircleRight className='Itools_icon'/> 
                : <FaArrowCircleLeft  className='Itools_icon'/>
            }
        </button>
      
    {renderSwitchComponent(
      <div className='containerItools'>
        <ItoolContainer title='Cronometro'><Cronometro/></ItoolContainer>
        <ItoolContainer title='Convertidor'><Convertidor/></ItoolContainer>
        <ItoolContainer title='Nota rapida'><QuicklyNote/></ItoolContainer>
      </div>
    )}
    </div>
);}

export default Itools;
