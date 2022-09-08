import React, { useContext } from 'react';
import './GeneradorNotes.css';

import { NotesContext } from '../containers/NoteBody/NoteBody';

import Note from '../Note/Note';

const GeneradorNotes = (props) => {

  function updateNotesData(notesData){
    props.updateNotesData(notesData)
  }

  function deleteNote(index){
    props.deleteNote(index)
  }

  function printNotes(notesData){
    let notes = notesData;
    return (
            notes.map((note, index)=>{
              return <Note key={index} indexItem={index} updateNotesData={updateNotesData} deleteNote={deleteNote}/>
            })
    )
    
}
  const notesContext = useContext(NotesContext)
  return (
  <tbody className="GeneradorNotes">
    {printNotes(notesContext)}
  </tbody>
);}

export default GeneradorNotes;
