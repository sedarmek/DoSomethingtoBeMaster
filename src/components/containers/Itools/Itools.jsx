import React, { useState } from 'react';
import './Itools.css';

import Cronometro from '../../Cronometro/Cronometro';
import Convertidor from '../../Convertidor/Convertidor';

const Itools = () => {
  
  let [isContainerItoolsShown,setIsContainerItoolsShown] = useState(false);
  let [isItoolShown, setIsItoolsShown] = useState({cronometro: false, convertidor: false, nota: false});

  let dataNoteInStorage = window.localStorage.getItem('dataNoteInStorage') ?? '';
  let [dataNoteState, setDataNoteState] = useState(dataNoteInStorage);

  function switchToRenderComponent(switcher, componentTrue, componentFalse){
    if(switcher){
      return componentTrue;
    }else{
        return componentFalse;
    }
  }

  function toggleStateBoolean(dataState, setFunctionState, optinalParameterOfObjectWithBoolean){
    if(typeof dataState === 'boolean'){
        if(dataState){
            setFunctionState(dataState=false);
          }else{
            setFunctionState(dataState=true);
          }
    }else if(typeof dataState === 'object'){
        if(dataState[optinalParameterOfObjectWithBoolean]){
            setFunctionState(()=>{
                let currentData = {...dataState}
                currentData[optinalParameterOfObjectWithBoolean]=false;
                return currentData;
            });
          }else{
            setFunctionState(()=>{
                let currentData = {...dataState}
                currentData[optinalParameterOfObjectWithBoolean]=true;
                return currentData;
            });
          }
    }
  }

  function updateNoteData({target}){
    window.localStorage.setItem('dataNoteInStorage', target.value);
    setDataNoteState(target.value);
  }
  return(
    <div className="Itools">
              {switchToRenderComponent(isContainerItoolsShown, 
              <button className='itools_button' onClick={()=> toggleStateBoolean(isContainerItoolsShown, setIsContainerItoolsShown)}>
                Close
              </button>, 
              <button className='itools_button' onClick={()=>toggleStateBoolean(isContainerItoolsShown, setIsContainerItoolsShown)}>
                OpenTools
              </button>)}
      
      {switchToRenderComponent(isContainerItoolsShown, 
      <div className='containerItools'>
        <div className='container_Itool'>
            <button className='container_Itool_button' 
            onClick={()=>toggleStateBoolean(isItoolShown, setIsItoolsShown, 'cronometro')}>
                Cronometro
            </button>
            {switchToRenderComponent(isItoolShown.cronometro, <Cronometro/>)}
        </div>
        <div className='container_Itool'>
            <button className='container_Itool_button' 
            onClick={()=>toggleStateBoolean(isItoolShown, setIsItoolsShown, 'convertidor')}>
                Convertidor
            </button>
            {switchToRenderComponent(isItoolShown.convertidor, <Convertidor/>)}
        </div>
        <div className='container_Itool'>
            <button className='container_Itool_button' 
            onClick={()=>toggleStateBoolean(isItoolShown, setIsItoolsShown, 'nota')}>
                Nota
            </button>
            {switchToRenderComponent(isItoolShown.nota, <textarea className='Itools_nota' placeholder='escribe aqui' onChange={updateNoteData} value={dataNoteState}/>)}
        </div>
      </div>)}
      {console.log('In render:',{dataNoteInStorage})}
    </div>
);}

export default Itools;
