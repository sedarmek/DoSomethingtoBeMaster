import React, { useState, createContext } from 'react';
import './NoteBody.css';
// import { ListGroup } from 'react-bootstrap';
import { FaPlusSquare } from 'react-icons/fa'

import { Note } from '../../../models/note.class';
import GeneradorNotes from '../../GeneradorNotes/GeneradorNotes'

export const NotesContext = createContext([])

const NoteBody = () => {
    let defaultNote = new Note('title', 'description', 'loremsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss');
    let initialNotes = [defaultNote];
    let [notesData, setNotesData] = useState(initialNotes);

    function updateNotesData(newData){
      setNotesData(()=>{
        let currentNotesData = [...notesData];
        currentNotesData[newData.index][newData.title] = newData.value;
        return currentNotesData;
      });
    }
    function addNote(){
      setNotesData(()=>{
        let currentNotesData = [...notesData, new Note('title', 'description', 'default value')]
        return currentNotesData
      })
    }
    function deleteNote(noteIndex){
        setNotesData(()=>{let currentNotesData = [...notesData]
        currentNotesData.splice(noteIndex, 1)
        return currentNotesData
      })
    }

    return(
      <NotesContext.Provider value={notesData}>
        <div className="NoteBody">
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Text</th>
              </tr>
            </thead>
              <GeneradorNotes updateNotesData={updateNotesData} deleteNote={deleteNote}/>
            <tfoot>
              <tr>
                <td onClick={addNote}><FaPlusSquare className='icon-addNote'/></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </NotesContext.Provider>
);}

export default NoteBody;
