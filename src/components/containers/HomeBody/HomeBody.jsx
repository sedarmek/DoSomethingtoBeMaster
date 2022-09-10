import React, { useState, createContext } from 'react';
import './HomeBody.css';

import Canvas from '../../Canvas/Canvas'
import GeneradorHabilidad from '../../GeneradorHabilidad/GeneradorHabilidad';
import Itools from '../Itools/Itools';
import { Hability } from '../../../models/hability.class';

export const HabilitiesContext = createContext([]);

function HomeBody() {
  let localStorageHabilities = JSON.parse(localStorage.getItem('localStorageHabilities'));
  const initialHabilitiesData = [new Hability('', 0),new Hability('', 0),new Hability('', 0)];

  let [habilitiesData, setHabilitiesData] = useState(localStorageHabilities ?? initialHabilitiesData);

  function incrementarHabilidades(){
    setHabilitiesData(()=>{
      saveInLocalStorage('localStorageHabilities', [...habilitiesData, new Hability('', 0)]);
      return [...habilitiesData, new Hability('', 0)];
    });
  }
  function deleteHability(index){
    setHabilitiesData(()=>{
      let currentHabilitiesData = [...habilitiesData]
      currentHabilitiesData.splice(index, 1)
      saveInLocalStorage('localStorageHabilities', currentHabilitiesData)
      return currentHabilitiesData
    })
  }

 
  function UpdateHabilityData(data){
    setHabilitiesData(()=>{
      let currentHabilitiesData = [...habilitiesData]
      currentHabilitiesData[data.index].hours = data.hours;
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
    <div className="HomeBody">
      <Canvas/>
      <GeneradorHabilidad className='GeneradorHabilidad' IncrementarHabilidades={incrementarHabilidades} UpdateHabilityData={UpdateHabilityData} deleteHability={deleteHability}/>
      <Itools/>
    </div>
    {console.log(localStorageHabilities)}
    </HabilitiesContext.Provider>
  );
}

export default HomeBody;
