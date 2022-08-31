import React, { useState } from 'react';
import './Itools.css';

import Cronometro from '../../Cronometro/Cronometro';
import Convertidor from '../../Convertidor/Convertidor';

const Itools = () => {
  
  let [isItoolsShown,setIsItoolsShown] = useState(false);
  function toggleShowItools(){
    if(isItoolsShown){
      setIsItoolsShown(false);
    }else{
      setIsItoolsShown(true);
    }
  }
  function printTool(switcher){
    if(switcher){
      return (<div><Cronometro/><Convertidor/></div>)
    }else{return null;}
  }
  function switchToolButton(switcher){
    if(switcher){
      return <button className='itools_button' onClick={toggleShowItools}>Close</button>
    }else{
      return <button className='itools_button' onClick={toggleShowItools}>OpenTools</button>
    }
  }
  return(
    <div className="Itools">
      {switchToolButton(isItoolsShown)}
      {printTool(isItoolsShown)}
    </div>
);}

export default Itools;
