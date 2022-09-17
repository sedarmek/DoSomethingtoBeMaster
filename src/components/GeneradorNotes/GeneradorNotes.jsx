import React, { useContext } from 'react';
import './GeneradorNotes.css';

import { NotesContext } from '../containers/NoteBody/NoteBody';

import Note from '../Note/Note';

const GeneradorNotes = (props) => {

  function printNotes(notesData){
    let notes = notesData;
    return (
            notes.map((note, index)=>{
              return <Note key={index} indexItem={index} deleteNote={props.deleteNote} catchIndexToModifyNote={props.catchIndexToModifyNote}/>
            })
    )
    
}
  const notesContext = useContext(NotesContext)
  return (
  <div className="GeneradorNotes">
    {printNotes(notesContext)}
  </div>
);}

export default GeneradorNotes;
