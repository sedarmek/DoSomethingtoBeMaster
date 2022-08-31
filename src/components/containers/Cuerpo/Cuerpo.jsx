import React, { useState, createContext } from 'react';
import './Cuerpo.css';

import Canvas from '../../Canvas/Canvas'
import GeneradorHabilidad from '../../GeneradorHabilidad/GeneradorHabilidad';
import Itools from '../Itools/Itools';

export const HabilitiesContext = createContext([]);

function Cuerpo() {
  const defaultNumberHabilities = 3;
  const defaultHour = 0.0;
  let localStorageHabilities = JSON.parse(localStorage.getItem('localStorageHabilities'));
  const defaultHability = {name: '', hours: defaultHour};
  const initialHabilitiesData = Array(defaultNumberHabilities).fill(defaultHability);

  let [habilitiesData, setHabilitiesData] = useState(localStorageHabilities ?? initialHabilitiesData);

  function incrementarHabilidades(){
    setHabilitiesData(()=>{
      saveInLocalStorage('localStorageHabilities', [...habilitiesData, defaultHability]);
      return [...habilitiesData, defaultHability];
    });
  }
  function decrementarHabilidades(){
    setHabilitiesData(()=>{
      saveInLocalStorage('localStorageHabilities', habilitiesData.slice(0, habilitiesData.length-1));
      return habilitiesData.slice(0, habilitiesData.length-1)
    })
  }

 
  function UpdateHabilityData(data){
    setHabilitiesData(()=>{
      let currentHabilitiesData = [...habilitiesData]
      currentHabilitiesData[data.index].hours = Number(data.hours);
      currentHabilitiesData[data.index].name = data.name;
      saveInLocalStorage('localStorageHabilities', currentHabilitiesData);
      return currentHabilitiesData;
    });
  }
  function saveInLocalStorage(storageName, data) {
      localStorage.setItem(storageName, JSON.stringify(data))
  }

  return (
    <HabilitiesContext.Provider value={habilitiesData}>
    <div className="Cuerpo">
      <Canvas/>
      <GeneradorHabilidad className='GeneradorHabilidad' IncrementarHabilidades={incrementarHabilidades} DecrementarHabilidades={decrementarHabilidades} UpdateHabilityData={UpdateHabilityData}/>
      <Itools/>
    </div>
    </HabilitiesContext.Provider>
  );
}

export default Cuerpo;
