import React, { useContext } from 'react';
import './Note.css';

import { FaTrashAlt } from 'react-icons/fa'

import { NotesContext } from '../containers/NoteBody/NoteBody'

const Note = ({ indexItem, deleteNote }) => {

  function sendNoteToDelete(){
    let index = indexItem
    console.log(indexItem)
    deleteNote(index)
  }
  const notesContext = useContext(NotesContext)
    return(
      <tr className="Note">
        <td className='td'>{notesContext[indexItem].title}</td>
        <td className='td'>{notesContext[indexItem].description}</td>
        <td className='td'>{notesContext[indexItem].text}</td>
        <td onClick={sendNoteToDelete}><FaTrashAlt className='icon-trash'/></td>
      </tr>
);}

export default Note;
