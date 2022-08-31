import React, { useState } from 'react';
import './Itools.css';

import Cronometro from '../../Cronometro/Cronometro';
import Convertidor from '../../Convertidor/Convertidor';

const Itools = () => {
  
  let [isItoolsShown,setIsItoolsShown] = useState(false);
  function toggleIsItoolsShown(){
    if(isItoolsShown){
      setIsItoolsShown(false);
    }else{
      setIsItoolsShown(true);
    }
  }

  function printTools(switcher){
    if(switcher){
      return (<div className='containerItools'><Cronometro/><Convertidor/></div>)
    }else{return null;}
  }
  function switchToolButton(switcher){
    if(switcher){
      return <button className='itools_button' onClick={toggleIsItoolsShown}>Close</button>
    }else{
      return <button className='itools_button' onClick={toggleIsItoolsShown}>OpenTools</button>
    }
  }
  return(
    <div className="Itools">
      {switchToolButton(isItoolsShown)}
      {printTools(isItoolsShown)}
    </div>
);}

export default Itools;
