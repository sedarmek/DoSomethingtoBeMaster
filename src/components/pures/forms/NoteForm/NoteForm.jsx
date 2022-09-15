import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import './NoteForm.css';

import { Note } from '../../../../models/note.class'

const NoteForm = ({ addNote, hideNoteForm }) => {
  
  let titleRef = useRef('')
  let descriptionRef = useRef('')
  let textRef = useRef('')

  function sendNote(e){
    e.preventDefault()
    let newData = new Note(titleRef.current.value, descriptionRef.current.value, textRef.current.value)
    addNote(newData)
    hideNoteForm()
  }

  return(
  <form onSubmit={sendNote} className="NoteForm">
    <input type="text" name='title' placeholder='write title here' ref={titleRef}/>
    <input type="text" name='description' placeholder='write description here' ref={descriptionRef}/>
    <textarea name='text' placeholder='write note here' ref={textRef}/>
    <div className='NoteForm_buttons'>
      <button onClick={hideNoteForm}>cancelar</button>
      <button>listo</button>
    </div>
  </form>
)};

NoteForm.propTypes = {
  addNote: PropTypes.func.isRequired,
  hideNoteForm: PropTypes.func.isRequired
};

NoteForm.defaultProps = {};

export default NoteForm;
