import React, { useState, createContext } from 'react';
import './NoteBody.css';
// import { ListGroup } from 'react-bootstrap';
import { FaPlusSquare } from 'react-icons/fa'

import { Note } from '../../../models/note.class';
import GeneradorNotes from '../../GeneradorNotes/GeneradorNotes'
import NoteForm from '../../pures/forms/NoteForm/NoteForm';

import { useStateBoolean } from '../../../hooks/useStateBoolean';

export const NotesContext = createContext([])

const NoteBody = () => {
    let defaultNote = new Note('title', 'description', 'texto');
    let initialNotes = [defaultNote];
    let [notesData, setNotesData] = useState(initialNotes);
    let [{renderSwitchComponent}, , {switchStateToFalse, switchStateToTrue}] = useStateBoolean();

    function updateNotesData(newData){
      setNotesData(()=>{
        let currentNotesData = [...notesData];
        currentNotesData[newData.index][newData.title] = newData.value;
        return currentNotesData;
      });
    }
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
    function hideNoteForm(){
      switchStateToFalse()
    }
    return(
      <NotesContext.Provider value={notesData}>
        <div className="NoteBody">
          <table className="noteBody_table">
            <thead className="table_head">
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Text</th>
              </tr>
            </thead>
              <GeneradorNotes updateNotesData={updateNotesData} deleteNote={deleteNote}/>
            <tfoot>
              <tr>
                <td onClick={switchStateToTrue}><FaPlusSquare className='icon-addNote'/></td>
              </tr>
            </tfoot>
          </table>
          {renderSwitchComponent(<NoteForm addNote={addNote} hideNoteForm={hideNoteForm}/>)}
        </div>
      </NotesContext.Provider>
);}

export default NoteBody;
