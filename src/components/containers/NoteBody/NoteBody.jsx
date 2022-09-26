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
    let localStorageNotes = JSON.parse(localStorage.getItem('localStorageNotes'));
    const initialNotesData = [new Note('title', 'note', '', 'none', 'comment', 'texto')];

    let [{renderSwitchComponent}, , {switchStateToFalse, switchStateToTrue}] = useStateBoolean();
    let [notesData, setNotesData] = useState(localStorageNotes ?? initialNotesData);
    let [indexNoteToModify, setIndexNoteToModify] = useState(null);

    function addNote(newNote){
      let currentNotesData = [...notesData, newNote]
      localStorage.setItem('localStorageNotes', JSON.stringify(currentNotesData))
      setNotesData(currentNotesData)
    }
    function deleteNote(noteIndex){
        setNotesData(()=>{let currentNotesData = [...notesData]
        currentNotesData.splice(noteIndex, 1)
        localStorage.setItem('localStorageNotes', JSON.stringify(currentNotesData))
        return currentNotesData
      })
    }
    function modifyNote(noteIndex, modifiedData){
      setNotesData(()=>{
        let currentNotesData = [...notesData];
        currentNotesData.splice(noteIndex, 1, modifiedData);
        localStorage.setItem('localStorageNotes', JSON.stringify(currentNotesData))
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
      <IndexToModifyContext.Provider value={indexNoteToModify}>
        <div className="NoteBody">
          <GeneradorNotes deleteNote={deleteNote} catchIndexToModifyNote={catchIndexToModifyNote}/>
          <FaPlusSquare className='icon-addNote' onClick={switchStateToTrue}/>
          {renderSwitchComponent(<NoteForm addNote={addNote} hideNoteForm={hideNoteForm} modifyNote={modifyNote} resetIndexNote={resetIndexNote}/>)}
        </div>
      </IndexToModifyContext.Provider>
      </NotesContext.Provider>
);}

export default NoteBody;
