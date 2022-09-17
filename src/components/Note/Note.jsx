import React, { useContext } from 'react';
import './Note.css';

import { FaTrashAlt, FaEdit } from 'react-icons/fa'

import { NotesContext } from '../containers/NoteBody/NoteBody'

const Note = ({ indexItem, deleteNote, catchIndexToModifyNote }) => {
  
  const notesContext = useContext(NotesContext)
  function sendNoteToDelete(){
    let index = indexItem
    deleteNote(index)
  }

  function sendDataToEdit(){
    catchIndexToModifyNote(indexItem)
  }
    return(
      <div className="Note">
        <p>{notesContext[indexItem].title}</p>
        <p>{notesContext[indexItem].description.properies.type}</p>
        <p>{notesContext[indexItem].description.comment}</p>
        {/* <p>{notesContext[indexItem].text}</p> */}
        <FaEdit className='icon-edit' onClick={sendDataToEdit}/>
        <FaTrashAlt className='icon-trash' onClick={sendNoteToDelete}/>
      </div>
);}

export default Note;
