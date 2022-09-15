import React, { useContext } from 'react';
import './Note.css';

import { FaTrashAlt } from 'react-icons/fa'

import { NotesContext } from '../containers/NoteBody/NoteBody'

const Note = ({ indexItem, deleteNote }) => {
  
  const notesContext = useContext(NotesContext)
  function sendNoteToDelete(){
    let index = indexItem
    deleteNote(index)
  }

  function openNote(){
    console.log('abre la nota para modificarla o leer')
  }
    return(
      <tr className="Note">
        <td className='td' onClick={openNote}>{notesContext[indexItem].title}</td>
        <td className='td'>{notesContext[indexItem].description}</td>
        <td className='td note_text'>{notesContext[indexItem].text}</td>
        <td onClick={sendNoteToDelete}><FaTrashAlt className='icon-trash'/></td>
      </tr>
);}

export default Note;
