import React, { useState, useContext } from 'react';
import './Note.css';

import { FaTrashAlt } from 'react-icons/fa'

import { NotesContext } from '../containers/NoteBody/NoteBody'

const Note = (props) => {
  let [noteShown, setNoteShown] = useState(false);

  function toggleBoolean(){
      setNoteShown(!noteShown);
  }

  // function sendNotesData(event){
  //   const data = {
  //     index: props.indexItem,
  //     title: event.target.name,
  //     value: event.target.value
  //   }
  //   props.updateNotesData(data);
  //   console.log(data)
  // }
  function deleteNote(){
    let index = props.indexItem
    props.deleteNote(index)
  }
  const notesContext = useContext(NotesContext)
    return(
      <tr className="Note">
        {/* <input type='text' name='title' value={notesContext[info.indexItem].title} onChange={sendNotesData} onClick={toggleBoolean}/> */}
        <td className='td' onClick={toggleBoolean}>{notesContext[props.indexItem].title}</td>
        <td className='td'>{notesContext[props.indexItem].description}</td>
        <td className='td'>{notesContext[props.indexItem].text}</td>
        <td onClick={deleteNote}><FaTrashAlt className='icon-trash'/></td>
      </tr>
);}

export default Note;
