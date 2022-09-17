import React, { useState, createContext } from 'react';
import './NoteBody.css';
// import { ListGroup } from 'react-bootstrap';
import { FaPlusSquare } from 'react-icons/fa'

import { Note } from '../../../models/note.class';
import GeneradorNotes from '../../GeneradorNotes/GeneradorNotes'
import NoteForm from '../../pures/forms/NoteForm/NoteForm';

import { useStateBoolean } from '../../../hooks/useStateBoolean';

export const NotesContext = createContext([])
export const IndexToModifyContext = createContext(null);

const NoteBody = () => {
    let defaultNote = new Note('title', 'none', '16/09/2022', 'none', 'comment',  'texto');
    let initialNotes = [defaultNote];
    let [notesData, setNotesData] = useState(initialNotes);
    let [{renderSwitchComponent}, , {switchStateToFalse, switchStateToTrue}] = useStateBoolean();
    let [indexNoteToModify, setIndexNoteToModify] = useState(null);

    function addNote(newNote){
      let currentNotesData = [...notesData, newNote]
      setNotesData(currentNotesData)
    }
    function deleteNote(noteIndex){
        setNotesData(()=>{let currentNotesData = [...notesData]
        currentNotesData.splice(noteIndex, 1)
        return currentNotesData
      })
    }
    //se ejecutara en el form
    function modifyNote(noteIndex, modifiedData){
      setNotesData(()=>{
        let currentNotesData = [...notesData];
        currentNotesData.splice(noteIndex, 1, modifiedData);
        return currentNotesData
      })
    }
    function resetIndexNote(){
      setIndexNoteToModify(null)
    }
    function catchIndexToModifyNote(noteIndex){
      setIndexNoteToModify(noteIndex);
      switchStateToTrue()
    }
    function hideNoteForm(){
      switchStateToFalse()
    }

    return(
      <NotesContext.Provider value={notesData}>
        <div className="NoteBody">
          <GeneradorNotes deleteNote={deleteNote} catchIndexToModifyNote={catchIndexToModifyNote}/>
          <FaPlusSquare className='icon-addNote' onClick={switchStateToTrue}/>
          <IndexToModifyContext.Provider value={indexNoteToModify}>
          {renderSwitchComponent(<NoteForm addNote={addNote} hideNoteForm={hideNoteForm} modifyNote={modifyNote} resetIndexNote={resetIndexNote}/>)}
          </IndexToModifyContext.Provider>
        </div>
      </NotesContext.Provider>
);}

export default NoteBody;
