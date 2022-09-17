import React, { useRef, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import './NoteForm.css';

import { Note } from '../../../../models/note.class'
import { NotesContext, IndexToModifyContext } from '../../../containers/NoteBody/NoteBody'

const NoteForm = ({ addNote, hideNoteForm, modifyNote, resetIndexNote }) => {
  
  let titleRef = useRef('')
  let typeRef = useRef('note')
  let dueDateRef = useRef('16-09-2022')
  let tagsRef = useRef('none')
  let commentRef = useRef('')
  let textRef = useRef('')
  const notesContext = useContext(NotesContext)
  let indexOfNoteContext = useContext(IndexToModifyContext)
  let defaultNote = new Note('', '', '', '', '',  '');
  let [noteData, setNoteData] = useState(notesContext[indexOfNoteContext] ?? defaultNote)
  
  function updateNoteData(e){
    let currentNoteData = {...noteData}
    if(e.target.name === 'title') currentNoteData.title = e.target.value
    if(e.target.name === 'type') currentNoteData.description.type = e.target.value
    if(e.target.name === 'dueDate') currentNoteData.description.dueDate = e.target.value
    if(e.target.name === 'tags') currentNoteData.description.tags = e.target.value
    if(e.target.name === 'comment') currentNoteData.description.comment = e.target.value
    if(e.target.name === 'text') currentNoteData.text = e.target.value
    setNoteData(currentNoteData)
  }

  function sendNote(e){
    e.preventDefault()
    let newData = new Note(titleRef.current.value, typeRef.current.value, dueDateRef.current.value, tagsRef.current.value, commentRef.current.value, textRef.current.value)
    //comprobar si tiene indice para modificar nota o si no crear nueva
    if(indexOfNoteContext !== null){
      modifyNote(indexOfNoteContext, newData)
      resetIndexNote()
    }else{
      addNote(newData)
    }
    hideNoteForm()
  }
  function cancelNote(){
    hideNoteForm()
    resetIndexNote()
  }

  return(
  <form onSubmit={sendNote} className="NoteForm">
    <input type="text" name='title' className='Note_title' placeholder='write title here' ref={titleRef} value={noteData.title} onChange={updateNoteData}/>
    <div className='Note_description'>
      <div className='Note_properies'>
        <label htmlFor="type">Type:</label>
        <select id='type' name="type" ref={typeRef} value={noteData.description.type} onChange={updateNoteData}>
          <option value="note">Note</option>
          <option value="task">Task</option>
          <option value="other">Other</option>
        </select>
        <label htmlFor="dueDate">Due Date:</label>
        <input id='dueDate' type="date" name='dueDate' ref={dueDateRef} value={noteData.description.dueDate} onChange={updateNoteData}/>
        <label htmlFor="tags">Tags:</label>
        <select id='tags' name="tags" ref={tagsRef} value={noteData.description.tags} onChange={updateNoteData}>
          <option value="none">None</option>
          <option value="study">Study</option>
          <option value="work">Work</option>
          <option value="other">Other</option>
        </select>
      </div>
      <textarea name='comment' className='Note_comment' placeholder='write description here' ref={commentRef} value={noteData.description.comment} onChange={updateNoteData}/>
    </div>
    <textarea name='text' placeholder='write note here' ref={textRef} value={noteData.text} onChange={updateNoteData}/>
    <div className='NoteForm_buttons'>
      <button onClick={cancelNote}>cancelar</button>
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
