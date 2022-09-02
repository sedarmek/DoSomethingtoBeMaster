import React, { useState } from 'react';
import './QuicklyNote.css';

const QuicklyNote = () => {
    let dataNoteInStorage = window.localStorage.getItem('dataNoteInStorage') ?? '';
    let [dataNoteState, setDataNoteState] = useState(dataNoteInStorage);

    function updateNoteData({target}){
        window.localStorage.setItem('dataNoteInStorage', target.value);
        setDataNoteState(target.value);
      }

    return (
        <div className="QuicklyNote">
            <textarea className='Itools_nota' placeholder='escribe aqui' onChange={updateNoteData} value={dataNoteState}/>
        </div>
);}

export default QuicklyNote;
